---
sidebar_position: 1
---

# Overview

Naas Framework upgrades notebooks with 3 low-code layers to get things done faster and deliver amazing data products.

- **Jobs** transform Jupyter in a production-ready environment with scheduling, asset sharing, and notifications, and more.
- **Drivers**  act as connectors to push and/or pull data from databases, APIs, Machine Learning algorithms, and more.
- **Templates** enable users to create automated data jobs and reports in minutes.

On of the 3 low-code layers, the Naas framework enforces a way to build data & AI products by structuing the repository a certain way much like any other framework.


## What can you build with Naas Framework?

With Naas Framework, you can quickly and easily create a wide variety of data-driven products and applications.

### Static Reports

Naas can be used to generate static reports such as PDFs, slides, and spreadsheets. You can create Jupyter notebooks to process and analyze data and then use a library like **`reportlab`** to generate a PDF report. Similarly, you can use **`pandas`** and **`openpyxl`** to generate Excel spreadsheets. Naas provides a simple way to schedule and automate the generation of these reports using the Naas Scheduler.

### Dynamic Reports and Dashboards

Naas can be used to create dynamic reports and dashboards using popular open-source libraries such as Plotly Dash, Panel, and Streamlit. You can build interactive web applications that allow users to interact with data and gain insights in real-time. Naas provides a simple way to deploy these applications to the web, so you can share them with your team or customers.

### Workflow Automation
Workflow automation in Naas Framework allows users to streamline repetitive tasks, boost productivity, and reduce error rates. Key features include task scheduling, event-driven automation with webhooks, and integration with external services.

### API
Naas can be used to build APIs using popular Python frameworks such as FastAPI and Flask. You can create Jupyter notebooks to process and analyze data and then use FastAPI or Flask to create a RESTful API. Naas provides a simple way to deploy these APIs to the cloud, so you can integrate them into your applications.

### Alerting Systems

Naas provides a simple way to create alerting systems that notify users via Slack, Teams, WhatsApp, or email. You can use Jupyter notebooks to monitor data and trigger alerts based on specific conditions. Naas provides integrations with popular messaging services, making it easy to send alerts to your team.

### AI Systems

Naas can be used to build AI systems such as search and conversational bots that use natural language processing (NLP) to understand and respond to user queries. You can use Jupyter notebooks to train and fine-tune large language models such as OpenAI's GPT or open source AI models on your company's data. Naas provides a simple way to deploy these models to the cloud, so you can integrate them into your applications.


:::tip
Contact Jeremy on [LinkedIn](https://www.linkedin.com/in/jeremyravenel/) or via email [jeremy@naas.ai](mailto:jeremy@naas.ai), if you need guidance in building those solutions for your organization. &#x20;
:::


## Start with Templates

The easiest way to go is simply to find the right templates for you using [Naas Search](https://workspace.naas.ai). Once you have found the templates that suits your needs (if you don't, feel free to [request new templates here](https://github.com/jupyter-naas/awesome-notebooks/issues/new?assignees=\&labels=\&template=template-request.md\&title=Tool+-+Action+of+the+notebook+)), you can start leveraging Naas Lab to build your solutions. But of course, you can also come with your own notebooks and scripts.

## Naas Lab

Naas Lab is the place where all data & AI products development happends, the fastest and easiest way to get you started is to use our cloud offering.
Try most of Naas's features for free using [Naas Lab](https://app.naas.ai/hub/login), without having to install anything.

The Naas Lab creates a dynamic production environment for your Notebooks. Each time you use the Naas Jobs functions in a notebook, it will be sent into the "\_\_production\_\_" folder on your Naas Lab for execution.

To get started, create a folder, open a notebook, and import Naas :

```python
import naas
```

### Schedule Notebooks

Send in production this notebook and run it, every day at 9:00am :

```python
naas.scheduler.add(cron="0 9 * * *")
```
### Add Dependencies

Send in production any file type like `test.csv` as a dependency:

```python
naas.dependency.add("test.csv")
```

### Add Secret Keys

Copy in production any secret key :

```python
naas.secret.add(name="API_NAME", secret="API_KEY")
```

Remove the previous line and get your secret key with :

```python
naas.secret.get(name="MY_API_KEY")
```

This allows you to push your notebook in production without sensitive data getting exposed.&#x20;

### Trigger Webhooks

Copy in production this notebook and allow to run it by calling the returned URL:

```python
naas.webhook.add()
```

Call the URL with your navigator you will get a message and see the notebook has run.

If you want to download the notebook result instead, add this line:&#x20;

```python
naas.webhook.respond_notebook()
```

### Expose Assets

Copy in production this asset ( file ) and allow to get it by calling the returned url:

```python
link = naas.asset.add("tesla-chart.html")
```
### Send Notifications

Send an email notification to anyone, to notify about data changes, alert on notebooks operations, etc...

```python
# Get link var from previous step
email = "elon@musk.com"
subject = "The tesla action is going up"
content = "check in the link the chart data maide from fresh dataset : " + link
naas.notification.send(email=email, subject=subject, content=content)
```

### Create Data Pipelines

Automate and schedule data workflows, streamlining your data processing and saving you time and effort using Notebooks.

Start with this simple dummy pipeline snippet and learn more on the dedicated docs page.&#x20;

```python
from naas.pipeline.pipeline import (Pipeline, DummyStep,End)

pipeline = Pipeline()

step1 = DummyStep("Notebook 1")
step2 = DummyStep("Notebook 2")
step3 = DummyStep("Notebook 3")

pipeline >> step1 >> step2 >> step3 >> End()
pipeline.run()
```

## Help & Support

### Open help chat

If at any time you are lost, you need help, or just want some info!

```python
import naas

naas.open_help()
```

That will open a chat box with us

### Close help chat

```python
import naas

naas.close_help()
```

### Access documentation

Show a button to quickly open this documentation from Jupyter

```python
import naas
naas.doc()
```

### Hire a Naas Expert

As the field of data & AI space continues to evolve, it's becoming increasingly clear that companies need experts who can not only build data products and models, but also deploy and maintain them at scale. By hiring a Naas expert, you can ensure that your data products are built to the highest standards, and that they are optimized for your specific business needs.

Whether you need to build a chatbot, extract insights from text data, or perform sentiment analysis at scale, a Naas expert can help you achieve your goals with greater speed and efficiency.

So if you're ready to take your data products to the next level, consider hiring a Naas expert today. Contact Jeremy on [LinkedIn](https://www.linkedin.com/in/jeremyravenel/) or via email [jeremy@naas.ai](mailto:jeremy@naas.ai) now to learn more!



## Community

### Contribute

We value all kinds of contributions - not just code. We are particularly motivated to support new contributors and people who are looking to learn and develop their skills.

Please read our [Contributing guidelines](../contributing/how-to-contribute) on how to get started.

### Reach out

You can reach out to us through the following channels:

* [Slack](https://join.slack.com/t/naas-club/shared\_invite/zt-1970s5rie-dXXkigAdEJYc\~LPdQIEaLA) (Live Chat)
* [GitHub Discussions](https://github.com/orgs/jupyter-naas/discussions) (Discussions on specific topics)
* [GitHub Issues](https://github.com/jupyter-naas/naas/issues/new) (Report Bugs)
* [Twitter](https://twitter.com/JupyterNaas) (Latest News)
* [YouTube](https://www.youtube.com/c/naas-ai) (Video Tutorials)
* [Community calls ](https://calendar.google.com/calendar/u/0/embed?src=c\_aultg6lanla9l39k8f5fm7d264@group.calendar.google.com\&ctz=Europe/Paris)(Video call discussions with the naas team & other contributors.)