---
sidebar_position: 0
---

## What are Naas Drivers?

Naas Drivers is a robust Python library offering a collection of low-code formulas. These formulas enable you to conveniently connect to various tools and data sources swiftly and effortlessly.

Whether your needs involve connecting to APIs, extracting data from databases, or interacting with popular platforms, Naas Drivers simplifies the process. This allows you to focus on crafting your Data & AI Products.

## Why Use Naas Drivers?

Naas Drivers standardizes interactions with third-party tools and reduces code.

We initiate with the tool's name followed by a connection, encapsulating the required token(s). This could involve one or multiple elements.

```python
from naas_drivers import tool
tool.connect()

```

Then, we incorporate some classes depending on the tool to ensure the formula is easy to locate. We generally refer to API documentation and user interfaces to create these formulas.

For instance, we created this simple formula to retrieve contacts, deals, or companies from HubSpot. It refers to the endpoint in the documentation and webpage, making it easy for business users to understand.

```python
from naas_drivers import hubspot
hubspot.connect().contacts.get_all()
hubspot.connect().deals.get_all()
hubspot.connect().companies.get_all()
```