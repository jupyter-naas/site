---
sidebar_position: 0
---

# Webhook API
---

**Description**: The Webhook API is a key feature of the NAAS platform that allows you to transform your Jupyter Notebooks into fully functional web applications. This feature enables you to trigger your notebook via an HTTPS request, providing you with a unique URL for your application.

The payload of the HTTP request is directly injected into your notebook, enabling you to perform specific actions based on the incoming data. This means you can respond to the HTTP call directly from your notebook in a way that suits your needs. Whether it's sending back a JSON message, an image, HTML content, or anything else, the Webhook API gives you the flexibility to choose.

The Webhook API is designed to be less complex than a "Naas Space". Instead of having to supply a built Docker container, you simply provide your notebook and the platform handles the rest. This makes it an incredibly effective tool for quickly building and publishing your logic, without the need for complex technical knowledge or resources.

By leveraging the Webhook API, you can streamline your workflow, increase productivity, and enhance the functionality of your Jupyter Notebooks.

**License**: Close source

**Price**: TBD

**API Docs:** [https://api.naas.ai/redoc](https://api.naas.ai/redoc) 

**Features**: 
* List webhook
* Create webhook
* Get webhook
* Update webhook
* Delete webhook
