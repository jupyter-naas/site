---
sidebar_position: 7
---

# Space

:::info
This feature is not yet accessible in Naas Lab for Community tier. Please book a meeting with us if you are interested to try it out. 
:::
Naas Space is a service that enables Naas users to deploy data products and services in dedicated serverless containers from Naas Lab. This specification outlines the technical details and requirements of the Naas Space service.

### Shiping Data & AI Products in Serverless Containers 

The purpose of this service is to enable Naas users to deploy their own data products/services outside of their JupyterLab environment. This service plays a crucial role in facilitating deployment for several reasons:

- **Scalability**: Deploying a data product/service outside of JupyterLab allows users to leverage the full potential of cloud resources for scaling their applications. This ensures that their solutions can accommodate larger datasets and increased user traffic without being limited by the constraints of their local JupyterLab environment.

- **Flexibility**: Building a serverless container service provides users with the flexibility to choose their preferred technology stack (such as Docker, Plotly-Dash, React application, or FastAPI) for deploying their data products/services. This empowers users to select the best tools for their specific use case and requirements.

- **Version Control and Collaboration**: Integrating the project with GitHub enables users to take advantage of version control and collaboration features. This not only helps in tracking changes and maintaining a history of code revisions but also allows multiple team members to work on the project simultaneously.

- **Automated Deployment**: By generating continuous integration (CI) configurations (e.g., using GitHub Actions), the serverless container service simplifies the deployment process. This allows users to automatically build, test, and deploy their data products/services upon pushing changes to the GitHub repository, reducing the risk of human error and streamlining the development workflow.

- **Professionalism and Accessibility**: Deploying a data product/service outside of JupyterLab provides a more professional presentation of the user's work. This allows stakeholders, clients, or other users to access the data product/service through a dedicated URL without the need for JupyterLab, making it more accessible and easier to share.

### Hosting/Domain Definition

Users can access the Naas Space feature under the same namespace: [dashboard].**[space.naas.ai](http://space.naas.ai/)**. If a user is in Enterprise mode, they can define their own domain, such as [dashboard].client.com or create a specified subdomain [dashboard].[client].space.naas.ai to be isolated. The advantage of using Enterprise mode is to have a secure namespace and be able to name data products as desired.

### Supported Data Products

The Naas Space Job supports various data products and services, including:

- Dashboards (first iteration focus on Plotly)
- Docker containers
- Static websites
- APIs
- Models
- Alerting systems
- Services (to be discussed)

### API

The Naas Space service will provide a generic way to handle the deployment of data products and services using Knative. On top of this API, different low-code formulas can be created based on the nature of the data products. These low-code formulas will provide an easy-to-use interface for users to deploy their data products.

### Low-Code Function

Naas Space will provide a low-code formula for deploying dashboards for example:

**`naas.space.dashboard.add(path, dependencies, name, requirements, users)`**

- **`path`** is the path to the notebook file hosting the code of the dashboard
- **`dependencies`** are the list of files required by the notebook to run the dashboard
- **`name`** is the target value showed in the deployed URL followed by .live.naas.ai (e.g. **https://dashboard-linkedin.live.naas.ai/**)
- **`requirements`** are the list of Python packages to be installed
    
    ```json
    requirements=[
            "pandas==1.2.3",
            "plotly==2.3.4",
            "pydash",]`
    ```
    
- **`users`** are the list of users and passwords that will be allowed to access the dashboard
    
    ```json
    users=[
            "jeremy@naas.ai:12345",
            "florent@naas.ai:12345",
            "maxime@naas.ai:12345",],
    ```
    

The low-code formula will also include other data products and services, such as static websites, APIs, and AI/ML engines.

The formula is yet to be finalized.

### Authentication

Naas Space supports basic authentication in its first iteration. Advanced authentication using OAuth2 providers will be implemented for Enterprise users to share data products securely.

### Deployment

Service deployment will be automated using Knative. Users can upload their data products to Naas Space by providing an archive containing their code and dependencies. Naas Space will then handle the deployment and management of the containerized data product.

### Conclusion

Naas Space provides a simple and efficient way for Naas users to deploy their data products and services. The service supports various data products and services, including dashboards, static websites, APIs, models, and alerting systems. Naas Space will automate the deployment process and provide an easy-to-use interface for users to deploy their data products.