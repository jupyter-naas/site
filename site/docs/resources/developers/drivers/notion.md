---
sidebar_position: 1
---

# Notion

Notion is an all-in-one workspace that allows users to create, organize, and collaborate on various types of content, including documents, databases, and more. The Notion driver in Naas provides functionalities to interact with Notion and perform actions such as connecting to your account, retrieving and creating pages and databases, updating page properties, creating blocks within a page, and more.

## Connect

To use the Notion driver, you need to connect to your Notion account by providing your integration token. Here's how you can connect:

```python
from naas_drivers import notion

token = "YOUR_INTEGRATION_TOKEN"
notion.connect(token)
```

## Get Database

You can retrieve a Notion database by specifying its URL using the `get()` function.

```python
from naas_drivers import notion

token = "YOUR_INTEGRATION_TOKEN"
database_url = "https://www.notion.so/naas-official/8910d64de001479c8494fbecbf52b525?v=4911d8baa8a5494a86f6215a6b0c95fe"

database = notion.connect(token).database.get(database_url)
database
```

This retrieves the database based on the provided URL and returns the database object.

## Create a Blank Page Inside a Database

You can create a blank page within a Notion database using the `create()` function.

```python
from naas_drivers import notion

token = "YOUR_INTEGRATION_TOKEN"
database_url = "https://www.notion.so/naas-official/8910d64de001479c8494fbecbf52b525?v=4911d8baa8a5494a86f6215a6b0c95fe"

page = notion.connect(token).page.create(database_id=database_url, title="Page title")
page
```

This creates a blank page within the specified database and returns the page object.

## Update a Page Inside a Database with Properties

You can update a page inside a Notion database by specifying its properties.

```python
from naas_drivers import notion

token = "YOUR_INTEGRATION_TOKEN"
page_url = "https://www.notion.so/naas-official/Daily-meeting-04-10-2021-2187d1d0f228491c8ef32de65dea8b1c"

page = notion.connect(token).page.get(page_url)

page.title("Name", "Page title")
page.rich_text("Text", "Ceci est toto")
page.number("Number", 42)
page.select("Select", "Value1")
page.multi_select("Muti Select", ["Value1", "Value2", "Value3"])
page.date("Date", "2021-10-03T17:01:26")  # Follow ISO 8601 format
page.people("People", ["d40e767c-d7af-4b18-a86d-55c61f1e39a4"])  # list of IDs of users
page.checkbox("Checkbox", True)
page.email("Email", "jeremy@naas.ai")
page.phone_number("Phone number", "+33 6 21 83 11 12")

page.update()
```

This updates the specified page in the Notion database with the provided properties.

## Create a Block Inside a Page

You can create different types of blocks within a Notion page using the respective methods.

```python
from naas_drivers import notion

token = "YOUR_INTEGRATION_TOKEN"
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

page.update()
```

This creates blocks of different types within the specified Notion page.

## Get the List of Users

You can retrieve a list of users in your Notion workspace using the `users.list()` method.

```python
from naas_drivers import notion

token = "YOUR_INTEGRATION_TOKEN"

users = notion.connect(token).users.list()
users
```

This retrieves a list of users in your Notion workspace.

## Official Documentation

For more details and advanced usage of the Notion API, you can refer to the [official Notion documentation](https://developers.notion.com/reference/intro). It provides comprehensive information on how to use the Notion API, including available endpoints, request parameters, and response structures.