---
sidebar_position: 1
---

# Thinkific

{% embed url="https://www.thinkific.com" %}
Website
{% endembed %}

## Users

### Get

```python
import nass_drivers
api_key = "api_key"
naas_drivers.thinkific.connect(api_key).users.get(
    uid="uid"
)
```

### Send

```python
import nass_drivers
api_key = "api_key"
naas_drivers.thinkific.connect(api_key).users.send(
    email="bob@cashstory.com"
)
```

### Delete

```python
import nass_drivers
api_key = "api_key"
naas_drivers.thinkific.connect(api_key).users.delete(
    uid="uid"
)
```

## Enrollments

### Get

```python
import nass_drivers
api_key = "api_key"
naas_drivers.thinkific.connect(api_key).enrollments.get(
    uid="uid"
)
```

### Send

```python
import nass_drivers
api_key = "api_key"
naas_drivers.thinkific.connect(api_key).enrollments.send(
    email="bob@cashstory.com"
)
```

### Delete

```python
import nass_drivers
api_key = "api_key"
naas_drivers.thinkific.connect(api_key).users.delete(
    uid="uid"
)
```

## Connect

{% hint style="warning" %}
You can also save your connection and don't repeat it for each method.
{% endhint %}

```python
import nass_drivers
api_key = "api_key"
canny = nass_drivers.thinkific.connect(api_key)
data = thinkific.users.get()
```

## Official documentation

{% embed url="https://developers.thinkific.com/api/api-documentation/#/" %}
Doc api
{% endembed %}
