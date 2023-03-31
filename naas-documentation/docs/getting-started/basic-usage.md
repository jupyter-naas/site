---
sidebar_position: 4
---

# Basic Usage

## Creating Your First Notebook

To create your first data product in Naas v2, follow these steps:

1.  Open a terminal (or command prompt on Windows) and run the following command to launch Jupyter Notebook:

`jupyter notebook`

2.  In the Jupyter Notebook interface, click the "New" button and select "Python 3" to create a new Python notebook.
    
3.  Start developing your data product by writing code, adding markdown, and using Naas v2 features and templates.
    

## Connecting to the Naas Platform

Once you've developed your data product, you can connect it to the Naas platform to leverage additional features, such as scheduling, asset management, and notifications:

1.  In your Jupyter Notebook, import the Naas library:

pythonCopy code

`import naas`

2.  Use the Naas API functions to connect your notebook to the platform and enable various features. For example, to schedule your notebook to run every day at 9 AM, you would use the following code:

pythonCopy code

`naas.scheduler.add(cron="0 9 * * *")`

For more detailed information on using the Naas API functions, refer to the "APIs and Functions" section of this documentation.
