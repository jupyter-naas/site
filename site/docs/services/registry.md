---
sidebar_position: 0
---

# Registry API
---

**Description**: The Registry API provides a comprehensive set of endpoints for managing Docker container registries within the platform. This API allows for the creation, listing, retrieval, and deletion of registries, as well as access to registry credentials for secure interactions. Here's a succinct overview of the available endpoints:

The Container Registry API is a powerful tool that provides you with a secure and convenient place to store Docker containers. This API allows you to create, list, delete, and retrieve storage locations for these containers, giving you full control over what you want to run within our infrastructure.

Why is this important? Finding a secure place to store built Docker containers can be complex. Many easy solutions make these containers publicly accessible, which is not ideal for security reasons. Our Container Registry API ensures that your containers are stored securely and are only accessible to you.

How does it work? With a single line of code, you can create a container registry. You can then request temporary credentials for this specific registry, allowing you to push your container into the NAAS infrastructure securely.

Once your containers are stored in the registry, you can reference them in our various services, including Space, Pipeline, and Scheduler. This feature is particularly useful for integrating with your CI/CD (Continuous Integration/Continuous Deployment) processes.

In summary, the Container Registry API provides a secure, flexible, and efficient way to manage Docker containers within our infrastructure. It's an essential tool for ensuring optimal performance and security in your application development process.

**License**: Close source

**Price**: TBD

**API Docs:** [https://api.naas.ai/redoc](https://api.naas.ai/redoc) 

**Features**:
* List registries
* Create registry
* Get registry
* Delete registry
* Get registry credentials

