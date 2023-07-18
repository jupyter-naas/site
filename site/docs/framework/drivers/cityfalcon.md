---
sidebar_position: 1
---

# CityFalcon

[CityFalcon](https://www.cityfalcon.com/) is a comprehensive news aggregation service that uses natural language processing and AI algorithms to analyze the global financial news landscape. This provides investors with curated and personalized financial news that allows for more informed decision-making.

With the Naas Drivers library, you can access CityFalcon's API to fetch financial news based on various parameters such as ticker symbols, fields, country, and more. 

## Fetching News Data

Here's an example of how to retrieve financial news data using CityFalcon's API:

### Get Data for Specific Ticker

```python
import naas_drivers

api_key = "YOUR_API_KEY"

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA")
```

### Customize Retrieved Fields

```python
fields = ["image", "title"]

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", fields=fields)
```

### Specify Country

```python
country = "US"

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", country=country)
```

### Limit the Number of Results

```python
limit = 5

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", limit=limit)
```

### Specify Minimum Score

```python
min_score = 30

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", min_score=min_score)
```

### Include Articles Behind Paywalls

```python
paywall = True

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", paywall=paywall)
```

### Set Identifier Type

```python
identifier_type = "full_tickers"

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", identifier_type=identifier_type)
```

### Set Time Filter

```python
time_filter = "d21"

data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", time_filter=time_filter)
```

### Specify Language

```python
data = naas_drivers.cityfalcon.connect(api_key).get("TSLA", languages="en")
```

### Maintain Connection

To enhance efficiency, you can maintain a single connection for multiple operations:

```python
cityfalcon = naas_drivers.cityfalcon.connect(api_key)

appl = cityfalcon.get("AAPL")
tsla = cityfalcon.get("TSLA")
```

## Official Documentation

For a more comprehensive understanding of CityFalcon's API, refer to the [official API documentation](https://dev.cityfalcon.com/doc/api/v0.2). This guide will provide you with detailed information about the full range of functionality offered by CityFalcon's API.