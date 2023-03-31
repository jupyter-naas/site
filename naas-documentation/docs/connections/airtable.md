---
sidebar_position: 1
---

# Airtable

{% embed url="https://airtable.com/" %}
Website
{% endembed %}

`apikey` should be generated in your account :

{% embed url="https://airtable.com/account" %}

You should find it there:

Then go to :

{% embed url="https://airtable.com/api" %}

and choose the workspace you wanna connect and on the Authentication section, you should see :

`database_key` is the value between `v0/` and `/`

`table_name` is the value after the last `/`

## Get

```python
from naas_drivers import airtable
api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" # the name of your view in airtable
data = airtable.connect(api_key, db_key, table).get(view=view, maxRecords=20)
```

## Send

```python
from naas_drivers import airtable
api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" # the name of your view in airtable
data = airtable.connect(api_key, db_key, table).send({'Name': 'Brian'})
```

## Search

```python
from naas_drivers import airtable
api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" # the name of your view in airtable
data = airtable.connect(api_key, db_key, table).search('Name', 'Tom')
```

## Update

```python
from naas_drivers import airtable
api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" # the name of your view in airtable
data = airtable.connect(api_key, db_key, table).update_by_field('Name', 'Tom', {'Phone': '1234-4445'})
```

## Delete

```python
from naas_drivers import airtable
api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" # the name of your view in airtable
data = airtable.connect(api_key, db_key, table).delete_by_field('Name', 'Tom')
```

## Connect

{% hint style="warning" %}
You can also save your connection and don't repeat it for each method.
{% endhint %}

```python
from naas_drivers import airtable
api_key = "******"
db_key = "appuBFPzX94pEqXUJ"
table = "Opportunities"
view = "MyView" # the name of your view in airtable
data = airtable.connect(api_key, db_key, table)
data = at.get(view='MyView', maxRecords=20)
```

## Official documentation

{% embed url="https://airtable.com/api" %}
Documentation
{% endembed %}
