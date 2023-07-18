---
sidebar_position: 1
---
# Mailbox

The Mailbox driver allows you to send and receive emails using various email providers. It provides a simple and intuitive interface to connect to your email account, send emails, retrieve emails from your mailbox, manage folders, and perform other email-related operations.

## Connect

To get started, you need to establish a connection to your email account using your login credentials and email server settings. You can save this connection for subsequent operations.

```python
username = "USERNAME"
password = "PASSWORD"
email_from = "bob@cashstory.com",
smtp_server = "smtp.sendgrid.net",
smtp_port = 465,
smtp_type = "SSL"

emails = naas_drivers.email.connect(username, password, email_from, smtp_server, smtp_port, smtp_type)
```

## Send

You can use the Mailbox driver to send emails. Here are different methods for sending emails:

### Text

Send a plain text email to anyone:

```python
email = "elon@musk.com"
subject = "The Tesla action is going up"
content = "Check the link below for the chart data made from fresh dataset: [LINK]"

emails.send(email_to=email, subject=subject, html=content)
```

### File

Send an email with an attachment:

```python
email = "elon@musk.com"
subject = "The Tesla action is going up"
content = "Check the link below for the chart data made from fresh dataset: [LINK]"
files = ["path/to/my/super/data.csv"]

emails.send(email_to=email, subject=subject, html=content, files=files)
```

### HTML

Send an email with HTML content:

```python
email = "elon@musk.com"
subject = "The Tesla action is going up"
image_path = "path/to/my/super/data.png"
html = f"<h1>Check the link below for the chart image:</h1><br/> <img src='{image_path}'/>"

emails.send(email_to=email, subject=subject, html=html)
```

## Get

You can retrieve emails from your mailbox using the Mailbox driver.

```python
email_df = emails.get()
```

### Get from folder

Specify a folder to retrieve emails from:

```python
box = "INBOX"  # Check the list of folders you have with get_mailbox
email_df = emails.get(box)
```

## Get mailbox list

Get a list of available mailboxes (folders) in your email account:

```python
mailboxes = emails.get_mailbox()
```

### Subfolder

Specify a main folder to retrieve subfolders:

```python
main_folder = "INBOX"
subfolders = emails.get_mailbox(main_folder)
```

## Folder

### List

List the emails in a specific folder:

```python
folder = "ALL"
emails_in_folder = emails.get_mailbox(folder)
```

### Status

Get the status of an email in a specific folder:

```python
uid = "4460"
folder = "INBOX"
status = emails.status(uid, folder)
```

## Seen

Mark an email as seen or unseen:

```python
uid = "4460"
emails.set_seen(uid, True)
```

## Flags

Set flags for an email:

```python
uid = "4460"
flag = "ANSWERED"
# Possible values for flag:
# flag = 'SEEN'
# flag = 'ANSWERED'
# flag = 'FLAGGED'
# flag = 'DELETED'
# flag = 'DRAFT'
# flag = 'RECENT'
attachments = emails.set_flag(uid, flag, True)
```

Please note that the Mailbox driver supports various email providers, and the specific methods and parameters may vary depending on your provider. Make sure to refer to the documentation or specific examples for your email provider to ensure correct usage.