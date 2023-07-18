---
sidebar_position: 1
---

# Airtable

Airtable is a powerful and flexible cloud-based platform that allows you to create, organize, and collaborate on data in the form of tables. With the Naas Drivers library, you can easily interact with the Airtable API and incorporate its functionality into your Data & AI Products.

Airtable's website can be found at https://airtable.com/. 

## Pre-requisites

Before starting with Airtable Naas Driver, you need to generate an API key. This key can be obtained by accessing your account at https://airtable.com/account. Once there, your API key will be displayed. 

After generating the API key, navigate to https://airtable.com/api and select the workspace you intend to connect with. The Authentication section of your selected workspace will show your `database_key` and `table_name`.

The `database_key` is located between `v0/` and `/`, and the `table_name` is the value found after the last `/`.

## Low-code Functions

### Retrieve Data
Retrieve data from your Airtable base using the `.get()` method, specifying the view and maximum number of records to return:

```python
from naas_drivers import airtable

api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" 

data = airtable.connect(api_key, db_key, table).get(view=view, maxRecords=20)
```

### Send Data
Send data to your Airtable base with the `.send()` method:

```python
from naas_drivers import airtable

api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"

data = airtable.connect(api_key, db_key, table).send({'Name': 'Brian'})
```

### Search Data
Search for specific data in your Airtable base using the `.search()` method:

```python
from naas_drivers import airtable

api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"

data = airtable.connect(api_key, db_key, table).search('Name', 'Tom')
```

### Update Data
Update existing data in your Airtable base with the `.update_by_field()` method:

```python
from naas_drivers import airtable

api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"

data = airtable.connect(api_key, db_key, table).update_by_field('Name', 'Tom', {'Phone': '1234-4445'})
```

### Delete Data
Remove specific data from your Airtable base using the `.delete_by_field()` method:

```python
from naas_drivers import airtable

api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"

data = airtable.connect(api_key, db_key, table).delete_by_field('Name', 'Tom')
```

### Maintain Connection
You have the option to save your connection details to avoid re-establishing the connection for each method. This is highly useful when you are frequently interacting with your Airtable base:

```python
from naas_drivers import airtable

api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"

at = airtable.connect(api_key, db_key, table)
data = at.get(view='MyView', maxRecords=20)
```

## Official Documentation
For a comprehensive understanding of the Airtable API, refer to the official documentation available at https://airtable.com/api. Here you will find detailed information about the full range of functionality offered by the Airtable API.