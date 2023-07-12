---
sidebar_position: 1
---

# MongoDB

{% embed url="https://www.mongodb.com/" %}
Website
{% endembed %}

## Connect

{% hint style="danger" %}
You must Connect before any other methods
{% endhint %}

```python
 user = "my user"
 passwd = "my passwd"
 host = "url"
 port = 9090
 ftp = naas_drivers.mongo.connect(host, port, user, passwd)
```

## Get data

```python
collection_name = "col"
db_name = "db_name"
naas_drivers.mongo.get(collection_name, db_name)
```

## Send data

```python
collection_name = "col"
db_name = "db_name"
data = # a dataframe
naas_drivers.mongo.send(data, collection_name, db_name)
```

## Official documentation

{% embed url="https://docs.mongodb.com/" %}
