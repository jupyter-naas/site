---
sidebar_position: 1
---

# AWS - Daily biling notification to slack

**Tags:** #aws #cloud #storage #S3bucket #slack #operations #automation

**Author:** [Maxime Jublou](https://www.linkedin.com/in/maximejublou/)

**Description:** This notebook sends a daily notification to a Slack channel with the billing information from an AWS account. It allows users to easily keep track of their AWS spending.

## Input

### Install packages


```python
!pip install boto3
```

### Setup secret keys
Uncomment to setup.


```python
# naas.secret.add(name="AWS_ACCESS_KEY_ID", secret="***")
# naas.secret.add(name="AWS_SECRET_ACCESS_KEY", secret="***")
# naas.secret.add(name="SLACK_TOKEN", secret="***")
```

### Import libraries


```python
import datetime
import boto3
import naas
import dateutil.relativedelta
import pandas as pd
import naas_drivers
```

### Setup variables


```python
# AWS account
AWS_ACCESS_KEY_ID = naas.secret.get(name="AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = naas.secret.get(name="AWS_SECRET_ACCESS_KEY")

# Slack
SLACK_TOKEN = naas.secret.get(name="SLACK_TOKEN")
SLACK_CHANNEL = "-aws-billing"
```

### Constants


```python
# Compute dates
def last_day_of_month(any_day):
    # this will never fail
    # get close to the end of the month for any day, and add 4 days 'over'
    next_month = any_day.replace(day=28) + datetime.timedelta(days=4)
    # subtract the number of remaining 'overage' days to get last day of current month, or said programattically said, the previous day of the first of next month
    return next_month - datetime.timedelta(days=next_month.day)


today = datetime.date.today()
lastDay = last_day_of_month(today)
start_month_date = today - dateutil.relativedelta.relativedelta(months=12)

start_date = "{}-{:02d}-{:02d}".format(today.year, today.month, 1)
end_date = "{}-{:02d}-{:02d}".format(today.year, today.month, today.day)
last_day = "{}-{:02d}-{:02d}".format(lastDay.year, lastDay.month, lastDay.day)
```

### Connect to AWS


```python
client = boto3.client(
    "ce",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
)
```

## Model

### Get current cost from AWS billing


```python
result = client.get_cost_and_usage(
    TimePeriod={"Start": start_date, "End": end_date},
    Granularity="MONTHLY",
    Filter={"Dimensions": {"Key": "RECORD_TYPE", "Values": ["Credit", "Refund"]}},
    Metrics=["BlendedCost"],
    GroupBy=[
        {"Type": "DIMENSION", "Key": "SERVICE"},
        {"Type": "DIMENSION", "Key": "USAGE_TYPE"},
    ],
)
```

### Transform current billing to dataframe


```python
df_billing = pd.DataFrame()

for t in result["ResultsByTime"]:
    for r in t["Groups"]:
        dimension = r["Keys"][0]
        usage_type = r["Keys"][1]
        amount = r["Metrics"]["BlendedCost"]["Amount"]
        period_start = t["TimePeriod"]["Start"]
        period_end = t["TimePeriod"]["End"]
        df_billing = df_billing.append(
            {
                "Dimension": dimension,
                "UsageType": usage_type,
                "Amount": amount,
                "PeriodStart": period_start,
                "PeriodEnd": period_end,
            },
            ignore_index=True,
        )
df_billing = df_billing.astype({"Amount": "float"})

# Display result
df_billing.tail(5)
```

### Get forecast from AWS


```python
ce_forecast = client.get_cost_forecast(
    TimePeriod={"Start": end_date, "End": last_day},
    Metric="BLENDED_COST",
    Granularity="MONTHLY",
)
```

## Output

### Save current billing to csv


```python
df_billing.to_csv("current_month_data.csv")
naas.asset.add(path="current_month_data.csv")
```

### Data from AWS billing


```python
current_amount = df_billing["Amount"].sum()
forecast = float(ce_forecast["Total"]["Amount"])
asset_link = "Copy URL from generate asset above"
```

### Create message for slack


```python
message = """
Hey there, 

This is your daily AWS billing notification.

- Current spending: [*{:.2f}$*]
- Forecast left to spent: [*{:.2f}$*]
- End of month estimate: [*{:.2f}$*]

Download the detailed csv file {}
""".format(
    float(current_amount), float(forecast), float(current_amount - forecast), asset_link
)
image_url = None  # Set to None if you don't need it
print(message)
```

### Send data to slack


```python
naas_drivers.slack.connect(SLACK_TOKEN).send(SLACK_CHANNEL, message)
```

### Scheduler


```python
naas.scheduler.add(cron="0 9 * * *")
```
