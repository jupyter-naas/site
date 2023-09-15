---
sidebar_position: 1
---

# Bubble

[Bubble.io](https://bubble.io) is a powerful no-code platform that enables you to build and customize web applications without writing a single line of code. The platform offers a drag-and-drop interface for designing your app and a workflow-based approach for defining the app's functionality. With Bubble.io, you can rapidly develop and deploy scalable, production-ready applications.

## Triggering Workflows

One of Bubble.io's key features is its ability to create and manage workflows — sequences of events defined by the application logic. With the Naas Drivers library, you can programmatically trigger these workflows from your Python environment.

Here's an example of how to send data to a Bubble.io workflow:

```python
import naas_drivers

url = "https://appname.bubbleapps.io/api/1.1/wf/endpoint_name"
data = { "first_name":"Bryan", "last_name":"Helmig", "age": 27 }

result = naas_drivers.bubble.send(url, data)
```

In this example, `url` refers to the workflow endpoint URL, and `data` is the JSON object containing the data you wish to send to the workflow. 

## Official Documentation

For more in-depth information about Bubble.io's features, capabilities, and how to use the platform's API, refer to the [official Bubble.io API documentation](https://bubble.io/reference#API.swagger_spec). This comprehensive guide will provide you with a better understanding of the platform and its extensive functionalities. 

Bubble.io's ability to build complex web applications without the need for traditional programming makes it an innovative and powerful tool for rapid application development. Combined with the Naas Drivers library, you can seamlessly integrate Bubble.io workflows with your data & AI products, creating a highly flexible and efficient development ecosystem.