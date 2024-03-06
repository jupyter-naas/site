---
sidebar_position: 0
---

# Pipeline API
---

**Description**: The Pipeline API Endpoint provides a powerful tool for users to design and implement Directed Acyclic Graphs (DAGs). These graphs are crucial for organizing complex, multi-step processes as data products evolve.

**Why use DAGs?**

Well-known tools such as Apache Airflow and Argo Workflow utilize DAGs to manage task execution. DAGs provide a clear and efficient way to handle tasks that need to run concurrently or sequentially.

In addition, each task in a pipeline may have unique requirements. Some tasks might need multiple GPUs, while others could be more memory-intensive, requiring a significant amount of RAM. Other tasks might need minimal resources. With DAGs in Naas Pipelines, you can optimize your computing power, using resources only when strictly necessary, rather than for the entire pipeline execution.

**What can you do with the Pipeline API Endpoint?**

This API endpoint allows you to perform all CRUD (Create, Read, Update, Delete) operations. You can also access specific pipeline execution logs, view errors, and download execution archives for in-depth local analysis. Furthermore, these execution archives are conveniently accessible in your Naas Object Storage.

**How does it enhance your operational efficiency?**

By leveraging the Pipeline API Endpoint, you can streamline your processes, optimize resource usage, and gain a clear insight into your pipeline executions. This enhances your operational efficiency and facilitates more effective decision-making.

**License**: Close source

**Price**: TBD

**API Docs:** [https://api.naas.ai/redoc](https://api.naas.ai/redoc) 

**Features: **



* List pipelines
* Create new pipeline
* Get pipeline informations
* Update pipeline
* Delete pipeline
* Start pipeline execution
* List pipeline executions
* Get pipeline execution
