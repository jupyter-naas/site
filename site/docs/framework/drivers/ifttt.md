---
sidebar_position: 1
---
# IFTTT

IFTTT, or "If This Then That," is a free web-based service that allows users to create chains of simple conditional statements, called "applets," which are triggered based on changes to other web services. IFTTT is an acronym for "If This, Then That," as in "If this happens (with one web service), then do that (with another)."

Visit the official [IFTTT website](https://ifttt.com) to get started. 

To connect to IFTTT using the `naas_drivers` library, you first need to go to the webhook page on the IFTTT website: [https://ifttt.com/maker_webhooks/](https://ifttt.com/maker_webhooks/).

Click on the "Documentation" button, and you will find your key on the first line.

## Webhook

The `naas_drivers` IFTTT driver allows you to trigger any action in IFTTT by sending web requests.

```python
import naas_drivers

# IFTTT parameters
event = "myevent"
key = "cl9U-VaeBu1**********"
data = { "value1": "Bryan", "value2": "Helmig", "value3": 27 }

# Connect and send request
result = naas_drivers.ifttt.connect(key).send(event, data)
```

### Example 1 - Post a Simple Tweet

First, you need to create an event in IFTTT. Then, you can use this formula to trigger the event and post a tweet.

```python
import naas_drivers

# Tweet content
twitter_post = """Hello world, this is my first automated post 
                with @JupyterNaas @IFTTT driver🔥
                """

# IFTTT parameters
event = "NAME_OF_YOUR_EVENT"
key = "**********"
data = { "value1": twitter_post }

# Connect and send request
result = naas_drivers.ifttt.connect(key).send(event, data)
```

For more information and usage guidelines, please refer to the [official IFTTT webhooks documentation](https://ifttt.com/maker_webhooks/).