---
sidebar_position: 0
---

# Space API
---
**Description**: The Space API provides a suite of endpoints to manage and interact with your spaces within the platform, enabling a seamless integration of custom applications, workflows, and services. 

It is a powerful tool designed to streamline the deployment of APIs, making it accessible even to those without an extensive technical background. It leverages the concept of serverless applications, which are not only cost-effective but also highly scalable and adaptable to varying traffic levels.

The Space API operates by taking a Docker container, a name, and some environment variables, along with CPU/memory specifications, and prepares it for deployment. The result is an API that can be accessed by a wide range of tools, including AI Agents, data products, third-party tools, and web/mobile applications.

One of the key advantages of the Space API is its serverless nature. When there's no traffic to your application, the API isn't running, which helps save costs. Moreover, it automatically scales in response to increases in traffic, ensuring optimal performance at all times.

The Space API also supports the creation of multiple 'Spaces'. This flexibility allows you to run multiple versions of an API simultaneously, which can be particularly useful for testing and development purposes. But you can also simply run multiple applications at the same time.

Currently, the Space API mainly exposes your containers through HTTPS. However, we're working on expanding its capabilities to include event-driven applications. This means you'll soon be able to integrate a Space into an event-driven project, further enhancing its versatility.

Finally, the Space API allows you to specify your own domain, enabling you to serve your space under the URL of your choice. This feature adds a level of customization that can help align your API with your brand identity and strategic needs.

In summary, the Space API is a user-friendly, cost-effective, and flexible solution for deploying APIs. Its serverless nature, auto-scaling capabilities, and support for multiple 'Spaces' make it a valuable tool for any business seeking to optimize its API deployment processes. 

**License**: Close source

**Price**: TBD

**API Docs:** [https://api.naas.ai/redoc](https://api.naas.ai/redoc) 

**Features:**
* List spaces
* Get space
* Create space
* Update space
* Delete space


### Templates Catalog 

**Description**: Naas offers an open-source catalog of notebook templates, built by a collaborative community, which serve as essential pre-built components for creating Data & AI products. These templates cover a wide range of use cases, from automation to data visualization or machine learning algorithms, providing a customizable and efficient starting point for projects. This approach not only speeds up the development process by offering standardized tools and functionalities but also ensures that users are working with the latest data science and AI methodologies.

The pre-built components in these templates include data connectors, transformation tools, analytics functions, and machine learning algorithms. By utilizing these components, users can significantly reduce the time and effort required to develop their Data & AI products, allowing them to focus more on innovation and value creation. This setup also facilitates easier collaboration within teams and with the global community, enhancing the learning experience and contributing to the continuous improvement of the catalog.

Naas's framework and its open-source catalog exemplify a powerful resource for anyone looking to build data products efficiently. It democratizes access to advanced data processing and AI capabilities, making it simpler for both beginners and experts to bring their data-driven projects to life.

**Version: **0.1

**License**: Apache OpenSource

**Cost**: Free

**Repository**: [https://github.com/jupyter-naas/awesome-notebooks](https://github.com/jupyter-naas/awesome-notebooks) 

**Features**: 



* 


### Template API

Take a script and transform it to an IMO Templates (notebook components for Data Products) 

**License**: Close Source

**Cost**: Free

**Repository**: [https://github.com/jupyter-naas/data-product-framework](https://github.com/jupyter-naas/data-product-framework) 

**Features:**



* From Python to IMO Template
* From Notebook to IMO Template
* From Prompt to IMO Template
* From IMO Template to Validation


### Vector Database API

**Description**:** **Our Vector Database Service is a powerful tool for managing and utilizing Language Model (LLM) embeddings. These embeddings are a critical component in many machine learning applications, including Retrieval-Augmented Generation (RAG) which combines the benefits of retrieval-based and generative AI models for better output.

The use of a vector database significantly enhances the efficiency of machine learning models. It allows these models to 'remember' previous inputs by converting them into embeddings and storing them. This stored information can then be quickly retrieved to inform future outputs, enhancing the model's speed and accuracy.

This functionality is particularly useful in various use-cases such as powering search functions, generating recommendations, and driving text generation tasks. By storing and managing embeddings in our Vector Database, these processes can be made more efficient, resulting in faster and more accurate results.

Whether you're leveraging our Vector Database Service or using your existing vector database, the ability to effectively manage and utilize LLM embeddings is a powerful tool in the application of machine learning models.

**License**: Close source

**Price**: 20.93$ (1,000⚡) / month 

**API Docs:** [https://api.naas.ai/docs#/](https://api.naas.ai/docs#/space)vector-db


### Webhook API

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


### Workspace API 

**Description**: The Workspace API is a key feature of the NAAS platform, designed to provide administrators with effective management tools for their workspace. This includes managing users, billing, groups, and permissions.

Shared Ownership: In the NAAS environment, resources are tied to a workspace rather than individual users. This unique approach ensures that resources are retained even when a user leaves the company or discontinues using NAAS. It promotes collaboration and prevents loss of valuable data or work.

Credit Sharing: The Workspace API promotes efficiency by allowing shared credit usage within a workspace. As a result, a single subscription can benefit multiple users, making the platform cost-effective for teams and organizations.

Group Management: The Workspace API empowers administrators to create groups for streamlined permission management. This ensures that specific sets of resources can be accessed by designated groups, enhancing security and organization. Administrators, on the other hand, have full access to all resources.

The Workspace API is a powerful tool for administrators, offering comprehensive management capabilities. It fosters collaboration and efficiency by allowing shared resource ownership and credit usage. Its robust group management features ensure a secure and organized workspace, making it an invaluable asset for any NAAS platform user.

**License**: Close source

**Cost**: 0$/ min 

**API Docs:** [https://api.naas.ai/docs](https://api.naas.ai/docs#)

**Features**:



* List workspaces
* Create a new workspace
* Get workspace information
* Update workspace
* Delete workspace
* Update user in a workspace
* Invite user to join workspace
* Remove user from workspace
* Accept workspace invitation
* Decline workspace invitation
* Create group
* Delete group