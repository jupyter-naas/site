---
sidebar_position: 1
---

# Zapier

{% embed url="http://zappier.com/" %}
Website
{% endembed %}

## Webhook

{% hint style="info" %}
This webhook feature is Premium in Zapier, but you can still test it :)
{% endhint %}

Create a new Zap with Webhook as a trigger and choose "Catch Hook". Paste it in `url` and you are good.

```python
import naas_drivers

url = "https://hooks.zapier.com/hooks/catch/*****/op7a4m1"
data = { "first_name":"Bryan", "last_name":"Helmig", "age": 27 }
result = naas_drivers.zapier.connect(url).send(data)
```

## Official documentation

{% embed url="https://zapier.com/help/doc/how-get-started-webhooks-zapier" %}
Documentation
{% endembed %}
