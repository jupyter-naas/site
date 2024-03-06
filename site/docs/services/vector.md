---
sidebar_position: 0
---

# Vector Database API
---

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