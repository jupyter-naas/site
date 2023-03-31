---
sidebar_position: 1
---

# Google Sheets

{% embed url="https://www.youtube.com/watch?v=2IYJ3B1ymA8" caption="" %}

{% embed url="https://www.google.com/sheets/about/" caption="" %}

## Pre-requisite: share your Google Sheet with our service account

For the driver to fetch the contents of your google sheet, you need to share it with the service account linked with Naas.

{% hint style="success" %}
`naas-share@naas-gsheets.iam.gserviceaccount.com`
{% endhint %}

Now you can fetch data from the sheet as a pandas data frame.

Get your `spreadsheetId` for your spreadsheet URL like this :

## Get

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Dataframe is returned
df = naas_drivers.gsheet.connect(spreadsheet_id).get(
    sheet_name=sheet_name
)
```

## Send

### Append

Append to the current sheet.

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Data accepts list of dict or dataframe
data = [{"name": "Jean", "email": "jean@appleseed.com"},
        {"name": "Bunny", "email": "bunny@appleseed.com"}]

naas_drivers.gsheet.connect(spreadsheet_id).send(
    sheet_name=sheet_name,
    data=data
)
```

### Erase and replace

When you need to clear the sheet before filling it!

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Data accepts list of dict or dataframe
data = [{"name": "Jean", "email": "jean@appleseed.com"},
        {"name": "Bunny", "email": "bunny@appleseed.com"}]

naas_drivers.gsheet.connect(spreadsheet_id).send(
    sheet_name=sheet_name,
    data=data,
    append=False
)
```

## Delete

delete rows to the current sheet.

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Data accepts list of dict or dataframe
rows = [3, 4, 5]

naas_drivers.gsheet.connect(spreadsheet_id).delete(
    sheet_name=sheet_name,
    rows=rows
)
```

## Connect

{% hint style="warning" %}
You can also save your connection and don't repeat it for each method.
{% endhint %}

```python
import naas_drivers

gsheet = naas_drivers.gsheet.connect("spreadsheet_id")
```

## Official documentation

{% embed url="https://github.com/melalj/gsheet-api" caption="" %}

