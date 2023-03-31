---
sidebar_position: 1
---

# Canny

{% embed url="https://developers.canny.io/api-reference" %}
Website
{% endembed %}

## Users

### Get

```python
import naas_drivers
api_key = "api_key"
naas_drivers.canny.connect(api_key).users.get(
    uid="uid"
)
```

### Send

```python
import naas_drivers
api_key = "api_key"
naas_drivers.canny.connect(api_key).send(
    email="bob@cashstory.com"
)
```

### Get by email

```python
import naas_drivers
api_key = "api_key"
naas_drivers.canny.connect(api_key).users.get_by_email(
    email="bob@cashstory.com"
)
```

### Delete

```python
import naas_drivers
api_key = "api_key"
naas_drivers.canny.connect(api_key).users.delete(
    uid="uid"
)
```

## Connect

{% hint style="info" %}
You can also save your connection and don't repeat it for each method.
{% endhint %}

```python
import naas_drivers
api_key = "api_key"
canny = nass_drivers.canny.connect(api_key)
data = canny.users.get()
```

## Official documentation

{% embed url="https://canny.io/" %}
Doc api
{% endembed %}
