---
sidebar_position: 1
---

# Google Sheets

[Google Sheets](https://www.google.com/sheets/about/) is a web-based application that allows users to create, update, and modify spreadsheets and share the data live online. It's part of the Google Workspace suite.

The Naas Drivers library provides a simple way to interface with Google Sheets from your Python environment, allowing you to read and write data.

## Prerequisites

To use the Google Sheets driver, you need to share your Google Sheet with the Naas service account. 

Share with: `naas-share@naas-gsheets.iam.gserviceaccount.com`

You will also need the `spreadsheetId` from your Google Sheets URL.

## Reading Data

To fetch data from a Google Sheet and convert it into a pandas DataFrame, use the `get` method:

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Dataframe is returned
df = naas_drivers.gsheet.connect(spreadsheet_id).get(sheet_name=sheet_name)
```

## Writing Data

You can append data to a Google Sheet or erase and replace the existing data.

### Append Data

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Data accepts list of dict or dataframe
data = [{"name": "Jean", "email": "jean@appleseed.com"},
        {"name": "Bunny", "email": "bunny@appleseed.com"}]

naas_drivers.gsheet.connect(spreadsheet_id).send(sheet_name=sheet_name, data=data)
```

### Erase and Replace Data

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Data accepts list of dict or dataframe
data = [{"name": "Jean", "email": "jean@appleseed.com"},
        {"name": "Bunny", "email": "bunny@appleseed.com"}]

naas_drivers.gsheet.connect(spreadsheet_id).send(sheet_name=sheet_name, data=data, append=False)
```

## Deleting Rows

To delete rows from a Google Sheet, use the `delete` method:

```python
import naas_drivers

spreadsheet_id = "idd"
sheet_name = "sheet_name"

# Data accepts list of dict or dataframe
rows = [3, 4, 5]

naas_drivers.gsheet.connect(spreadsheet_id).delete(sheet_name=sheet_name, rows=rows)
```

## Persistent Connections

If you're using multiple methods, you can establish a persistent connection:

```python
import naas_drivers

gsheet = naas_drivers.gsheet.connect("spreadsheet_id")
```

## Official Documentation

For further details, check the [official documentation](https://github.com/melalj/gsheet-api).

The Naas Drivers Google Sheets integration makes it simple to use this popular tool within your Python environment, whether you're reading data from a sheet into a pandas DataFrame or updating a sheet with new data.