---
sidebar_position: 1
---

# Toucan

{% embed url="https://toucantoco.com/en/" %}
Website
{% endembed %}

## Connect

{% hint style="danger" %}
You must Connect before any other methods
{% endhint %}

```python
import naas_drivers
url = "http://toucan.bobapp.ai/"
username = "bob@cashstory.com" 
password = "test"
naas_drivers.toucan.connect(url, username, password)
```

## Version

get the current version of app

```python
naas_drivers.toucan.get_version()
```

## Screenshots

### App

```python
app_name = "test"
naas_drivers.toucan.screenshots_app(app_name)
```

### All App

```python
naas_drivers.toucan.screenshots_app_all()
```

## Users

### Analytics

```python
analytic = naas_drivers.toucan.get_users_analytics()
```

### Get all

```python
analytic = naas_drivers.toucan.get_users()
```

## Small Apps

### Report

```python
app_name = "test"
report = naas_drivers.toucan.get_app_reports(app_name)
```

### Report Ids

```python
app_name = "test"
report_ids = naas_drivers.toucan.get_app_reports_ids(app_name)
```

### Report by name

```python
app_name = "test"
report = naas_drivers.toucan.get_report_by_name(app_name)
```

### Metadata

```python
app_name = "test"
stage="staging"
metadata = naas_drivers.toucan.get_metadata(app_name, stage)
```

### Data domain

```python
app_name = "test"
domain = "101"
stage="staging"
data = naas_drivers.toucan.get_data(app_name, domain, stage)
```

### Data

```python
app_name = "test"
data = naas_drivers.toucan.get_data(app_name)
```

### Config

```python
app_name = "test"
config = naas_drivers.toucan.get_app_config(app_name)
```

### Download Config

```python
app_name = "test"
format_file = "front_config"
# format_file can be :
# etl_config
# report
# dashboard-Group
# augment.py
# preprocess_validation
# permissions.py
# permissions_config
# notifications_handlers.py
stage = "staging"
naas_drivers.toucan.download_app_config(app_name, format_file, stage)
```

### Load config

```python
app_name = "test"
stage = "staging"
config = naas_drivers.toucan.load_conf(app_name, stage)
```

### Load Operations

```python
app_name = "test"
stage = "staging"
notification = False,
operations = [
    "preprocess_data_sources",
    "populate_basemaps",
    "populate_reports",
    "populate_dashboards",
    "populate_permissions",
]
config = naas_drivers.toucan.load_conf(app_name, stage, notification, operations)
```

### Create small app

```python
app_name = "test"
app_id = "test"
config = naas_drivers.toucan.create_small_app(app_name, app_id)
```

### Send config

```python
app_name = "test"
file_upload = "/path/to/my/file"
stage = "staging"
format_file = "front_config"
# format_file can be :
# etl_config
# report
# dashboard-Group
# augment.py
# preprocess_validation
# permissions.py
# permissions_config
# notifications_handlers.py
naas_drivers.toucan.send_app_config(
        app_name,
        file_upload, 
        format_file=format_file, 
        stage=stage
        )
```

### Release config

```python
app_name = "test"
stage = "staging"
naas_drivers.toucan.release_conf(app_name, stage)
```

### Deploy app

```python
app_name = "test"
stage = "staging"
operations=[
    "preprocess_data_sources",
    "populate_reports",
    "populate_dashboards",
    "release_design",
]
force=True
naas_drivers.toucan.deploy_app(app_name, stage, operations, force)
```

## Embed

```python
small_app = "test"
slide = "101"
hosts=None # can be specific for security
mode="webcomponent" #can be iframe or webcomponent
height="800px"
naas_drivers.toucan.embed(small_app, slide, hosts, mode, height)
```

## Craft token

```python
username = "bob@cashstory.com"
access = ("test", "viewer")
naas_drivers.toucan.craft_token(username, access)
```

## Official documentation

{% embed url="https://docs.toucantoco.com/" %}
Documentation
{% endembed %}
