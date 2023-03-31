---
sidebar_position: 1
---

# PDF

{% hint style="warning" %}
In local install, you should set `SCREENSHOT_API`env var or `connect` first
{% endhint %}

## Get

```python
import naas_drivers

url = "https://google.com"
filename = "google.pdf"
naas_drivers.pdf.connect().get(url=url, filename=filename)
```

## Get from Html

```python
import naas_drivers
html = '<a src="https://google.com">test</a>'
filename = "google.pdf"
naas_drivers.pdf.connect().get(html=html, filename=filename)
```

## Connect

```python
import naas_drivers

pdf = naas_drivers.pdf.connect()

url = "https://google.com"
filename = "google.pdf"
pdf.get(url=url, filename=filename)
```

