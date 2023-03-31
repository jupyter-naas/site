---
sidebar_position: 1
---

# Mailbox

Don't feel like reading the doc 😅 ? Get started with this 3min video.

{% embed url="https://www.youtube.com/watch?v=G0pWBIiFH7U&t=3s" caption="" %}

## Connect

{% hint style="success" %}
You can save your connection and don't repeat it for each method.
{% endhint %}

```python
username = "USERNAME"
password = "PASSWORD"
email_from = "bob@cashstory.com",
smtp_server = "smtp.sendgrid.net",
smtp_port = 465,
smtp_type = "SSL",

emails = naas_drivers.email.connect(username, 
        password, 
        email_from, 
        smtp_server, 
        smtp_port,
        smtp_type)
```

## Send

### Text

Send an email to anyone, notify about data changes, alert on notebooks operations, etc...

```python
email = "elon@musk.com"
subject = "The tesla action is going up"
content = "check in the link the chart data maide from fresh dataset : [LINK]"

emails.send(email_to=email, subject=subject, html=content)
```

### File

```python
email = "elon@musk.com"
subject = "The tesla action is going up"
content = "check in the link the chart data maide from fresh dataset : [LINK]"'
files = ["path/to/my/super/data.csv"]

emails.send(email_to=email, subject=subject, html=content, files=files)
```

### HTML

```python
email = "elon@musk.com"
subject = "The tesla action is going up"
image_path = "path/to/my/super/data.png"
html = f"<h1>Check in the link the chart image below</h1><br/> <img src="{image_path}"/>"

emails.send(email_to=email, subject=subject, html=content)
```

## Get

```python
email_df = emails.get()
```

### Get from folder

```python
box = "INBOX" # check the list you have with get_mailbox
email_df = emails.get(box)
```

## Get mailbox list

```python
mailboxs = emails.get_mailbox()
```

### Subfolder

```python
main_folder = "INBOX"
mailboxs = emails.get_mailbox(main_folder)
```

## Folder

### List

```python
uid = "4460"
box = "ALL"
folders = emails.get_mailbox(box)
```

### Status

```python
uid = "4460"
box = "INBOX"
status = emails.status(box)
```

## Seen

```python
uid = "4460"
emails.set_seen(uid, True)
```

## Flags

```python
uid = "4460"
flag = "ANSWERED"
# possible value for flag:
# flag = 'SEEN'
# flag = 'ANSWERED'
# flag = 'FLAGGED'
# flag = 'DELETED'
# flag = 'DRAFT'
# flag = 'RECENT'
attachments = emails.set_flag(uid, flag, True)
```

