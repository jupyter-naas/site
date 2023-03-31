---
sidebar_position: 1
---

# IFTTT

{% embed url="https://ifttt.com" %}
Website
{% endembed %}

Connect to IFTTT and first go to the webhook page: [https://ifttt.com/maker\_webhooks/](https://ifttt.com/maker\_webhooks/)

Hit the documentation button, your key appears on the first line:

## Webhook

The driver enables you to create any action inside

```python
import naas_drivers
event = "myevent"
key = "cl9U-VaeBu1**********"
data = { "value1": "Bryan", "value2": "Helmig", "value3": 27 }
result = naas_drivers.ifttt.connect(key).send(event, data)
```

### Example 1 - Post a simple Twitt

First, you need to create an event in IFTTT, then you can just copy paste this formula.

```python
import naas_drivers
twitter_post = """Hello world, this is my first automated post 
                with @JupyterNaas @IFTTT driver🔥
                """
event = "NAME_OF_YOUR_EVENT"
key = "**********"
data = { "value1": twitter_post }
result = naas_drivers.ifttt.connect(key).send(event, data)
```

## Official documentation

{% embed url="https://ifttt.com/maker_webhooks/" %}
Documentation
{% endembed %}
