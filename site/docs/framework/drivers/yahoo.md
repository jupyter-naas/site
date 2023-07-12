---
sidebar_position: 1
---

# Yahoo

{% embed url="https://finance.yahoo.com/" %}
Website
{% endembed %}

## Stock

Get stock data

### Basic

```python
naas_drivers.yahoofinance.get("TSLA")
```

### Date

```python
date_from = -30 # Date can be number or date or today
date_to = "today"
naas_drivers.yahoofinance.get("TSLA", date_from=date_from, date_to=date_to)
```

### Interval

```python
naas_drivers.yahoofinance.get("TSLA", interval="1d")
```

### Moving average

```python
ma = [20, 50] # max two value
naas_drivers.yahoofinance.get("TSLA", moving_averages=ma)
```

## Official documentation

{% embed url="https://rapidapi.com/apidojo/api/yahoo-finance1" %}
