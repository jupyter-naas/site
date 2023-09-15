---
sidebar_position: 1
---

# NewsAPI

NewsAPI is a popular platform that provides access to a wide range of news articles from various sources worldwide. It offers a simple and convenient way to fetch news data programmatically.

The NewsAPI driver in Naas allows you to connect to the NewsAPI service, retrieve news articles based on different parameters, and fetch top news and news sources.

## Connect

To use the NewsAPI driver, you need to connect to the NewsAPI service by providing your API key. You can obtain your API key from the NewsAPI website.

```python
naas_drivers.newsapi.connect("YOUR_API_KEY")
```

Alternatively, you can use our default API key for testing purposes. Please note that the default API key has limited usage for all Naas users.

```python
naas_drivers.newsapi.connect()
```

By connecting to the NewsAPI service, you establish a connection that allows you to make requests and retrieve news articles.

## Get News

You can retrieve news articles based on different parameters using the `get()` function.

### Basic

To get news articles based on a specific query, you can use the `q` parameter.

```python
naas_drivers.newsapi.get(q="TSLA")
```

This retrieves news articles related to the query "TSLA".

### Fields

You can choose specific fields to include in the results. Available fields include:

- title
- image
- link
- description
- source

```python
fields = ["image", "title"]
naas_drivers.newsapi.get(q="TSLA", fields=fields)
```

This retrieves news articles related to the query "TSLA" with only the "image" and "title" fields included in the results.

### Language

You can specify the language of the news articles using the `language` parameter.

```python
country = "en"
data = naas_drivers.newsapi.get(q="TSLA", language=country)
```

This retrieves news articles related to the query "TSLA" in English.

### Limit

You can limit the number of news articles returned using the `limit` parameter.

```python
limit = 5
data = naas_drivers.newsapi.get(q="TSLA", limit=limit)
```

This retrieves a maximum of 5 news articles related to the query "TSLA".

## Get Top News

You can fetch the top news articles using the `get_top()` function.

```python
data = naas_drivers.newsapi.get_top(sources='bbc-news')
```

This retrieves the top news articles from the specified news source, in this case, "bbc-news".

## Get News Sources

You can get a list of available news sources using the `get_sources()` function.

```python
sources = naas_drivers.newsapi.get_sources()
```

This retrieves a list of available news sources.

## Official Documentation

For further details and advanced usage of the NewsAPI, you can refer to the [official NewsAPI documentation](https://newsapi.org/docs/endpoints). It provides comprehensive information on how to use the NewsAPI, including available endpoints, request parameters, and response structures.