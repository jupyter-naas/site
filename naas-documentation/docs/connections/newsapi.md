---
sidebar_position: 1
---

# NewsAPI

{% embed url="https://newsapi.org/" %}
Website
{% endembed %}

## Connect

{% hint style="danger" %}
You must Connect before any other methods
{% endhint %}

```python
naas_drivers.newsapi.connect("YOUR_API_KEY")

# OR You can use our default apikey to test
# Limited to 200/hours request for all naas users 
naas_drivers.newsapi.connect()
```

## Get

### Basic

```python
naas_drivers.newsapi.get(q="TSLA")
```

### Fields

Choose fields you want to get in result, list available below:

* title
* image
* link
* description
* source
* image

```python
fields = ["image", "title"]
naas_drivers.newsapi.get(q="TSLA", fields=fields)
```

### Language

Language of news

```python
country = "en"
data = naas_drivers.newsapi.get(q="TSLA", language=country)
```

### Limit

Limit the number of results

```python
limit = 5
data = naas_drivers.newsapi.get(q="TSLA", limit=limit)
```

## Get top news

```python
data = naas_drivers.newsapi.get_top(sources='bbc-news')
```

## Get sources news

```python
sources = naas_drivers.newsapi.get_sources()
```

## Official documentation

{% embed url="https://newsapi.org/docs/endpoints" %}
