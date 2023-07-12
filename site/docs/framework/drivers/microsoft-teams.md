---
sidebar_position: 1
---

# Microsoft Teams

Get your webhook url there:

{% embed url="https://teams.microsoft.com/l/app/203a1e2c-26cc-47ca-83ae-be98f960b6b2?source=store-copy-link" caption="" %}

Create a webwook for naas

Then you should see your webhook url

You can use it below to send message in your channel

## Send message

```python
import naas_drivers

webhook = "https://COMPANY.webhook.office.com/webhookb2/****/***"
message = "Hello friends"
result = naas_drivers.teams.connect(webhook).send(message)
```

### Image

Image be url only, if you need expose asset before sending it

```python
import naas_drivers

webhook = "https://COMPANY.webhook.office.com/webhookb2/****/***"
message = "Hello friends"
image = "http://i.imgur.com/c4jt321l.png")
result = naas_drivers.teams.connect(webhook).send(message, image=image)
```

