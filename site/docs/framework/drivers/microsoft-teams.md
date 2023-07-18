---
sidebar_position: 1
---

# Microsoft Teams

Microsoft Teams is a collaboration platform that brings together chat, meetings, file sharing, and other productivity tools to help teams work together more effectively. It provides a centralized workspace where team members can communicate, share information, and collaborate on projects in real time.

The Microsoft Teams driver allows you to integrate your workflows with Microsoft Teams by sending messages to channels using a webhook URL. This enables you to automate notifications, alerts, and updates directly within your Teams channels.

To get started, follow these steps:

1. Go to the [Microsoft Teams webhook page](https://teams.microsoft.com/l/app/203a1e2c-26cc-47ca-83ae-be98f960b6b2?source=store-copy-link).
2. Create a webhook for Naas.
3. Copy the generated webhook URL.

## Send Message

You can use the webhook URL to send a message to your Microsoft Teams channel.

```python
import naas_drivers

webhook = "https://COMPANY.webhook.office.com/webhookb2/****/***"
message = "Hello friends"
result = naas_drivers.teams.connect(webhook).send(message)
```

This code snippet sends a simple text message to the Teams channel specified by the webhook URL.

## Send Message with Image

If you want to include an image in your message, provide the image URL in the `image` parameter.

```python
import naas_drivers

webhook = "https://COMPANY.webhook.office.com/webhookb2/****/***"
message = "Hello friends"
image = "http://i.imgur.com/c4jt321l.png"
result = naas_drivers.teams.connect(webhook).send(message, image=image)
```

The `image` parameter should contain the URL of the image you want to include in the message. The image will be displayed within the Teams channel along with the message.

Note: Ensure that the image URL is accessible and publicly available for it to be displayed correctly in the Teams channel.