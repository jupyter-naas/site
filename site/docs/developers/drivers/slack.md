---
sidebar_position: 1
---

# Slack

Slack is a communication and collaboration platform. The Slack driver in Naas allows you to send messages to channels or users on Slack using a bot token.

To get your bot token, follow these steps:

1. Create an app in Slack by visiting [https://api.slack.com/apps](https://api.slack.com/apps).
2. Go to the "OAuth & Permissions" section of your app.
3. Add the necessary scope to your app to allow the bot to send messages. The required scope is `chat:write.public`. Make sure to save the changes.
4. Reload your app, and Slack will provide you with the "Bot user OAuth Access Token". Copy this token.

## Send Message

To send a message using the Slack driver, use the following code:

```python
import naas_drivers

token = "xoxb-***-***-****"
message = "Hello friends"
result = naas_drivers.slack.connect(token).send(message)
```

Replace `"xoxb-***-***-****"` with your actual bot token. The `send` method takes the `message` as a parameter and sends it to the default channel of your bot.

### Send Message with Image

If you want to send a message with an image, you can provide the image URL as an additional parameter:

```python
import naas_drivers

token = "xoxb-***-***-****"
message = "Hello friends"
image = "http://i.imgur.com/c4jt321l.png"
result = naas_drivers.slack.connect(token).send(message, image=image)
```

In this example, the `image` parameter is set to the URL of the image you want to send along with the message.

By using the Slack driver in Naas, you can easily send messages to Slack channels or users, enhancing your communication and collaboration with your team.