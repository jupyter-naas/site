---
sidebar_position: 1
---

# CityFalcon

{% embed url="https://www.cityfalcon.com/" %}
Website
{% endembed %}

## Get

### Action

{% hint style="info" %}
You can request only tickers on Cityfalcon free plan
{% endhint %}

```python
import naas_drivers
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA")
```

### Fields

Choose fields you want to get in result, list available below:

* title
* image
* link
* description
* score
* sentiment
* source
* source\_logo
* image

```python
fields = ["image", "title"]
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", fields=fields)
```

### Country

Country of the stock exchange

```python
country = "US"
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", country=country)
```

### Limit

Limit the number of results

```python
limit = 5
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", limit=limit)
```

### Minimum Score

minimum Score of Cityfalcon

```python
min_score = 30
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", min_score=min_score)
```

### Paywall

Show article with a paywall

```python
paywall = True
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", paywall=paywall)
```

### Identifier\_type

```python
identifier_type = "full_tickers"
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", identifier_type=identifier_type)
```

### Time\_filter

```python
time_filter = "d21"
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", time_filter=time_filter)
```

### Language

```python
naas_drivers.cityfalcon.connect("YOUR_API_KEY").get("TSLA", languages="en")
```

## Connect

{% hint style="warning" %}
You can also save your connection and don't repeat it for each method.
{% endhint %}

```python
naas_drivers.cityfalcon.connect("YOUR_API_KEY")
# You can use our default apikey limited to 200/hours request for all users

cityfalcon = naas_drivers.cityfalcon.connect()
appl = cityfalcon.get("AAPL")
tsla = cityfalcon.get("TSLA")
```

## Official documentation

{% embed url="https://dev.cityfalcon.com/doc/api/v0.2" %}
