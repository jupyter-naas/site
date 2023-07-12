---
sidebar_position: 1
---

# Scheduler

This guide will help you understand how to use the Naas scheduler to automate your notebook tasks.

[![Scheduler Overview](https://img.youtube.com/vi/ONiILHFItzs/0.jpg)](https://www.youtube.com/watch?v=ONiILHFItzs&t=48s)

## Cron Tasks

We utilize CRON tasks to schedule notebooks. To understand the syntax of CRON tasks, please visit [Crontab Guru](https://crontab.guru/).

[![Crontab Guru](https://crontab.guru/favicon.ico)](https://crontab.guru)

> **Note:** A single job should not exceed one hour. If it does, consider splitting your work into smaller tasks.

## Timezone Information

By default, the scheduler operates in the Central European Time (CET) timezone. If you are in a different timezone, please use the Timezone low-code formula to synchronize your server with your local timezone.

> **TODO:** Add a section explaining how to change the timezone.

## Scheduling a Notebook

To schedule a notebook, use the `add` function. For example, to run a notebook every day at 9:00:

```python
naas.scheduler.add(cron="0 9 * * *")
```

You can also specify a different notebook by providing a path:

```python
naas.scheduler.add(path="path/to/your/notebook.ipynb", cron="0 9 * * *")
```

### Notification Parameters

- `notif_down`: Receive an email when the notebook run fails.
- `notif_up`: Receive an email when the notebook runs successfully.
- `next_url`: A URL to be called when the notebook runs successfully. This can be any service, even a Notebook API.

```python
params = {"notif_down": "bob@naas.ai", "notif_up": "georges@naas.ai"}

naas.scheduler.add(cron="0 9 * * *", params=params)
```

For debugging purposes, you can use the `debug` parameter:

```python
naas.scheduler.add(cron="0 9 * * *", debug=True)
```

## Removing a Schedule

To delete a schedule, use the `delete` function:

```python
naas.scheduler.delete()
```

To delete a schedule for a specific notebook:

```python
naas.scheduler.delete(path="path/to/your/notebook.ipynb")
```

For debugging:

```python
naas.scheduler.delete(debug=True)
```

## Listing Schedules

To see all versions of a notebook that have been scheduled, use the `list` function:

```python
naas.scheduler.list()
```

To list versions of a specific notebook:

```python
naas.scheduler.list(path="path/to/your/notebook.ipynb")
```

## Retrieving a Schedule

To get the latest version of a scheduled notebook:

```python
naas.scheduler.get()
```

To get a specific version of a notebook:

```python
naas.scheduler.get(path="path/to/your/notebook.ipynb")
```

To get a specific version by its history ID:

```python
naas.scheduler.get(histo="20201008101221879662")
```

## Clearing Schedules

To clear a specific version of a scheduled notebook:

```python
naas.scheduler.clear(histo="20201008101221879662")
```

To clear a specific version of a specific notebook:

```python
naas.scheduler.clear(path="path/to/your/notebook.ipynb", histo="202010081012
```

## Accessing Output

You can fetch the output of the most recent execution of your notebook:

```python
naas.scheduler.get_output()
```

To fetch the output of a specific notebook:

```python
naas.scheduler.get_output(path="path/to/your/notebook.ipynb")
```

## Clearing Output

To clear the output from the latest execution of your notebook:

```python
naas.scheduler.clear_output()
```

To clear the output from a specific notebook:

```python
naas.scheduler.clear_output(path="path/to/your/notebook.ipynb")
```

## Viewing Your Schedules

If you need a quick overview of all your scheduled notebooks, you can use the `currents()` function:

```python
naas.scheduler.currents()
```

For a more detailed, raw view of your scheduled notebooks, you can set the `raw` parameter to `True`:

```python
naas.scheduler.currents(raw=True)
```

This information provides a comprehensive view of your scheduled tasks, helping you manage your automated notebook tasks effectively.