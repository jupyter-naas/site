---
sidebar_position: 1
---

# Notion

{% hint style="warning" %}
This driver is in beta. Contact us on [Slack](https://join.slack.com/t/naas-club/shared\_invite/zt-r187or6p-CwaKutBTxVeIIw6zJ0DHkw) on #04\_question channel if you need help.
{% endhint %}

If you are not familiar with Notion, check out their website. It's pretty amazing all-in-workspace.

Find below is their website👇

{% embed url="https://www.notion.so/login" %}
Login link
{% endembed %}

Before anything, you have to connect to your account in Notion, create your integration and make sure it has access to your page or your database.

#### Step 1: Create an integration.

* Go to [https://www.notion.com/my-integrations](https://www.notion.com/my-integrations).
* Click the "+ New integration" button.
* Give your integration a name - I chose "Vacation Planner".
* Select the workspace where you want to install this integration.
* Click "Submit" to create the integration.
* Copy the "Internal Integration Token" on the next page and save it somewhere secure, e.g. a password manager.

![](https://files.readme.io/2ec137d-093ad49-create-integration.gif)



#### Step 2: Share a database with your integration

Integrations don't have access to any pages (or databases) in the workspace at first. **A user must share specific pages with an integration in order for those pages to be accessed using the API.** This helps keep you and your team's information in Notion secure.

Start from a new or existing page in your workspace. Insert a new database by typing `/table` and selecting a full page table. Give it a title. I've called mine "Weekend getaway destinations". Click on the `Share` button and use the selector to find your integration by its name, then click `Invite`.

![](https://files.readme.io/0a267dd-share-database-with-integration.gif)

## Connect

```python
from naas_drivers import notion 

token = "*********" 
notion.connect(token)
```

## Get database &#x20;

```python
from naas_drivers import notion 

token = "*********"
database_url = "https://www.notion.so/naas-official/8910d64de001479c8494fbecbf52b525?v=4911d8baa8a5494a86f6215a6b0c95fe"
database = notion.connect(token).database.get(database_url)
database
```

## Create a blank page inside a database

```python
from naas_drivers import notion 

token = "*********"
database_url = "https://www.notion.so/naas-official/8910d64de001479c8494fbecbf52b525?v=4911d8baa8a5494a86f6215a6b0c95fe"

page = notion.connect(token).page.create(database_id=database_url, title="Page title")
page
```

## Create a blank page inside a page&#x20;

{% hint style="warning" %}
This feature is yet supported. Contact us on [Slack](https://join.slack.com/t/naas-club/shared\_invite/zt-r187or6p-CwaKutBTxVeIIw6zJ0DHkw) on #04\_question channel if you need it.
{% endhint %}

```python
from naas_drivers import notion 

token = "*********"
page_url = "https://www.notion.so/naas-official/8910d64de001479c8494fbecbf52b525?v=4911d8baa8a5494a86f6215a6b0c95fe"

page = notion.connect(token).page.create(page_id=page_url, title="Page title")
page
```

## Update a page inside a database with properties

Properties are associated with the database. If you put a page type that is not currently present, it will create it.

The types of properties available are listed below (".type")

The first paramater into the parenthesis is the name of the field, the second is the value to update.

```python
from naas_drivers import notion 

token = "*********"
page_url = "https://www.notion.so/naas-official/Daily-meeting-04-10-2021-2187d1d0f228491c8ef32de65dea8b1c"

page = notion.connect(token).page.get(page_url)

page.title("Name","Page title")
page.rich_text("Text","Ceci est toto")
page.number("Number", 42)
page.select("Select","Value1")
page.multi_select("Muti Select",["Value1","Value2","Value3"])
page.date("Date","2021-10-03T17:01:26") #Follow ISO 8601 format
page.people("People", ["d40e767c-d7af-4b18-a86d-55c61f1e39a4"]) #list of ID of users
page.checkbox("Checkbox", True)
page.email("Email","jeremy@naas.ai")
page.phone_number("Phone number","+33 6 21 83 11 12")

page.update()


#Not yet supported
#page.url("URL","www.naas.ai")
#page.properties.formula()
#page.properties.relation()
#page.properties.rollup()
#page.properties.files()
```

### Add "Updated at" property

Know when the page has last been updated.

```python
database.add_property("Updated at","last_edited_time")
database.update()
```

## Create Block inside a page

```python
from naas_drivers import notion 

token = "*********"
page_url = "https://www.notion.so/naas-official/Daily-meeting-04-10-2021-2187d1d0f228491c8ef32de65dea8b1c"

page = notion.connect(token).page.get(page_url)

page.heading_1("Heading 1")
page.heading_2("Heading 2")
page.heading_3("Heading 3")
page.paragraph("Paragraph")
page.numbered_list_item("This is first")
page.to_do("Need this to be done")
page.embed("https://docs.google.com/spreadsheets/*************")
page.video("https://www.youtube.com/watch?v=8AsMAc4VFJs")
page.image("https://landen.imgix.net/jtci2pxwjczr/assets/5ice39g4.png")
page.code("pip install naas")
page.equation("e=mc2")

#The order in parathesis will define the order of the block creation. 
page.update()

#Not yet supported 
#page.pdf("https://bitcoin.org/bitcoin.pdf") #not working
#page.bookmark("https://en.wikipedia.org/wiki/Project_Jupyter")  #do create a bookmark but do not add the link
#page.toggle("Oh") #Should be getting a child block 
#page.child_page()
#page.child_database()
#page.properties.formula()
#page.properties.relation()
#page.properties.rollup()
#page.properties.files()
```

The embed blocks are not yet supported. See [changelog](https://developers.notion.com/changelog/validation-on-embed-block-urls).

## Get the list of users

```python
from naas_drivers import notion 

token = "*********"

users = notion.connect(token).users.list()
users
```

Discover more usage of the API with Notion official documentation:

{% embed url="https://developers.notion.com/reference/intro" %}

