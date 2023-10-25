# Jobs

Naas jobs are low-code formulas that you can access through the Naas Python library. The library provides a variety of functions that allow you to perform various tasks.

## Types of Jobs

### Scheduler

The scheduler allows you to schedule notebooks to run on a regular basis using cron syntax.

```python
import naas
naas.scheduler.add(...)

```

### Assets

Naas assets allow you to serve files on the internet. You can use naas.assets.add to host a file from your JupyterLab instance, providing you with a unique, public URL.

```python
import naas
naas.assets.add(...)

```

### Webhooks

Webhooks transform a notebook into an HTTP endpoint that can be queried using GET or POST methods. You can send parameters with your queries and receive different formats of data in response.

```python
import naas
naas.webhook.add(...)

```

### Notifications

Notifications enable you to send emails from Naas. You can build an email in HTML and send it using naas.notification.send.

```python
import naas
naas.notification.send(...)

```

### Secrets

Naas secrets allow you to store sensitive information in your JupyterLab instance without having to hardcode any secrets in your notebooks.

```python
import naas
naas.secrets.add(...)

```

### Pipelines

Naas pipelines let you build complex graphs of execution. You can run multiple notebooks in parallel, wait for their successful completion, and then proceed to the next step.

```python
import naas
naas.pipeline.add(...)

```

## Installation

You can access these jobs after installing Naas. Each job has a consistent interface, which makes them easy to use. However, each job has its unique features, which you can check in the documentation.

```python
pip install naas

```

Please note that currently, Naas jobs only work on [app.naas.ai](http://app.naas.ai/). We are working on converting all of these jobs to API endpoints, which will allow you to install the Naas library anywhere and use our jobs from any location.