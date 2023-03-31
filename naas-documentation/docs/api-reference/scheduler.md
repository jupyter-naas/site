---
sidebar_position: 1
---

# Scheduler

{% embed url="https://www.youtube.com/watch?v=ONiILHFItzs&t=48s" %}

We use CRON tasks to schedule notebooks, find the syntax you need to on: [https://crontab.guru/](https://crontab.guru/)

{% embed url="https://crontab.guru" %}

{% hint style="info" %}
A job shouldn't last more than one hour, split your work :)
{% endhint %}

Important, by default the scheduler is set to the CET Timezone. If you are in another timezone, you would need to use the Timezone low-code formula to sync your server with your timezone.

Check how to set up in the section below:

{% content-ref url="../advanced/advanced-usecases.md" %}
[advanced-usecases.md](../advanced/advanced-usecases.md)
{% endcontent-ref %}

## Add

Send in production this notebook and run it, every day at 9:00 :

```python
naas.scheduler.add(cron="0 9 * * *")
```

### Other Notebook

You can also give a path to the function and that will deploy this file instead of the current one.

```python
naas.scheduler.add(path="path/to/my/super/notebook.ipynb", cron="0 9 * * *")
```

### Parameters

`notif_down` : Receive an email when the notebook run fails.

`notif_up` : Receive an email when the notebook runs well.

`next_url` : Url to call when the notebook success, it can be any service even if an Notebook API

```python
params = {"notif_down": "bob@naas.ai", "notif_up": "georges@naas.ai"}

naas.scheduler.add(cron="0 9 * * *", params=params)
```

### Debug

```python
naas.scheduler.add(cron="0 9 * * *", debug=True)
```

## Delete

You can remove any scheduler capability like that, it takes optionally a path:&#x20;

```python
naas.scheduler.delete()
```

### Other Notebook

```python
naas.scheduler.delete(path="path/to/my/super/notebook.ipynb")
```

### Debug

```python
naas.scheduler.delete(debug=True)
```



## List&#x20;

You can list all version of a file pushed into the production folder:

### Current file

```python
naas.scheduler.list()
```

### Other Notebook&#x20;

```python
naas.scheduler.list(path="path/to/my/super/notebook.ipynb")
```

## Get&#x20;

You can get a version of a file pushed into the production:

### Get the last one

```python
naas.scheduler.get()
```

### With a file path

```python
naas.scheduler.get(path="path/to/my/super/notebook.ipynb")
```

### With history id

```python
naas.scheduler.get(histo="20201008101221879662")
```

### Combined

```python
naas.scheduler.get(path="path/to/my/super/notebook.ipynb", histo="20201008101221879662")
```

## Clear

You can clear the previous version of a file pushed into the production:

### One

```python
naas.scheduler.clear(histo="20201008101221879662")
```

### Other Notebook

```python
naas.scheduler.clear(path="path/to/my/super/notebook.ipynb", histo="20201008101221879662")
```

### All

```python
naas.scheduler.clear()
```

### All for filepath

```python
naas.scheduler.clear(path="path/to/my/super/notebook.ipynb")
```

## Get output

You can get the output of the production file:

### Get the last one

```python
naas.scheduler.get_output()
```

### With a file path

```python
naas.scheduler.get_output(path="path/to/my/super/notebook.ipynb")
```

## Clear output

You can clear the previous output of a file pushed into the production:

### One

```python
naas.scheduler.clear_output()
```

### Other Notebook

```python
naas.scheduler.clear_output(path="path/to/my/super/notebook.ipynb")
```

## List Schedulers

You don't remember how many Scheduled notebooks you have?

### Simple

```python
naas.scheduler.currents()
```

### Raw result&#x20;

```python
naas.scheduler.currents(raw=True)
```
