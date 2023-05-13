---
sidebar_position: 4
---

# Pipeline

## Naas API

The Naas API provides a set of functions that enable you to interact with the Naas platform, access its features, and manage your data products programmatically. The API is designed to be easy to use and integrate into your existing Jupyter Notebooks and Python scripts.

Key API functions include:

*   `naas.scheduler`: Schedule your notebooks to run automatically at specified intervals or times.
*   `naas.assets`: Manage assets, such as images, videos, and documents, used in your data products.
*   `naas.notifications`: Send notifications to your team members via email, Slack, or other supported channels.

## Using the API Functions

To use the Naas API functions in your Jupyter Notebook, you first need to import the Naas library:

pythonCopy code

`import naas`

Once you've imported the library, you can use the API functions to interact with the Naas platform. For example, to schedule your notebook to run every day at 9 AM, you would use the following code:

pythonCopy code

`naas.scheduler.add(cron="0 9 * * *")`

For more detailed information on using the Naas API functions, refer to the API Reference section of this documentation.