---
sidebar_position: 2
---

# Bubble

{% embed url="https://bubble.io" %}
Website
{% endembed %}

## Workflow

You can trigger workflow in bubble.

```python
import naas_drivers
url = "https://appname.bubbleapps.io/api/1.1/wf/endpoint_name"
data = { "first_name":"Bryan", "last_name":"Helmig", "age": 27 }
result = nass_drivers.bubble.send(url, data)
```

## Official documentation

{% embed url="https://bubble.io/reference#API.swagger_spec" %}
Documentation
{% endembed %}