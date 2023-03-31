---
sidebar_position: 6
---

# Space

The API Reference provides a comprehensive list of all available Naas API functions, along with their descriptions, usage examples, and parameter details. To access the API Reference, visit the following link: [https://docs.naas.ai/api-reference](https://docs.naas.ai/api-reference)

By understanding and utilizing the various components, analytics and reporting tools, and integrations available in Naas v2, you can significantly enhance your data product development process and create sophisticated data products that drive value for your business.

## Scheduler
The naas.scheduler API allows you to schedule notebooks to run automatically at specified intervals or times.

Example usage:
```
import naas

# Schedule notebook to run every day at 9 AM
naas.scheduler.add(cron="0 9 * * *")
```

## Assets
The naas.assets API enables you to manage assets such as images, videos, and documents used in your data products.

Example usage:

```
import naas

# Add an image asset
image_path = "path/to/your/image.png"
naas.assets.add(image_path, "image.png")
```

## Notifications
The naas.notifications API allows you to send notifications to your team members via email, Slack, or other supported channels.

Example usage:

```
import naas

# Send an email notification
subject = "Daily Report"
body = "Here is the daily report..."
to = "email@example.com"
naas.notifications.email(to, subject, body)
```

## Dependencies
The naas.dependencies API helps you manage the dependencies of your notebooks, ensuring that all required packages and libraries are installed when your notebook runs.

Example usage:

```
import naas

# Add a package dependency
naas.dependencies.add("pandas")
```

## Drives
The naas.drives API allows you to connect to various file storage services, such as Google Drive, Dropbox, and Microsoft OneDrive, to access and manage files and folders.

Example usage:

```
import naas

# Connect to Google Drive
naas.drives.connect("google")
```

## Data Connectors
The naas.connectors API enables you to connect to various data sources, such as databases, APIs, and web scraping.

Example usage:

```
import naas
from naas.connectors import SQL

# Connect to a PostgreSQL database
user = "your_username"
password = "your_password"
host = "your_host"
database = "your_database"
sql_connector = SQL("postgresql", user, password, host, database)

# Run a SQL query
query = "SELECT * FROM your_table"
data = sql_connector.get(query)
```


