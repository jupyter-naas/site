---
sidebar_position: 4
---

# Notification

Naas provides you with an easy way to send emails straight from your notebook. This is incredibly useful when you want to send data updates, reports, or any type of alert to your colleagues or yourself.

## Simple Text Notifications

To send an email, you can use the following code:

```python
import naas

naas.notification.send(
    email_to="our@planet.com", 
    subject="Hello world 👋🌏", 
    html="Naas is here for you"
)
```

This will send an email to `our@planet.com` with the subject "Hello world 👋🌏" and the content "Naas is here for you".

## Notifications with Attachments

If you need to include attachments, you can specify them as follows:

```python
import naas

naas.notification.send(
    email_to="elon@musk.com", 
    subject="The tesla action is going up", 
    html="check in the link the chart data made from fresh dataset : [LINK]",
    files=["path/to/my/super/data.csv"]
)
```

In this case, `data.csv` will be attached to the email.

## HTML Notifications

You can also use HTML content in your notifications, such as adding images:

```python
import naas

naas.notification.send(
    email_to="elon@musk.com", 
    subject="The tesla action is going up", 
    html="<h1>Check in the link the chart image below</h1><br/> <img src='path/to/my/super/data.png'/>"
)
```

## Custom Sender

By default, the emails will be sent from your Naas account email. However, you can specify a different sender:

```python
import naas

naas.notification.send(
    email_to="elon@musk.com", 
    subject="❤️ Check this email sent from Naas", 
    html="I made this in 1 min. It's so easy to send emails with naas.ai", 
    email_from="tony@stark.com"
)
```

## Listing Sent Notifications

You can list all the notifications you have sent using `naas.notification.list()`:

```python
import naas

naas.notification.list()
```

If you are an admin, you can list all notifications sent by users with `naas.notification.list_all()`:

```python
import naas

naas.notification.list_all()
```

This way, Naas allows you to keep track of all the notifications sent through your notebooks.