---
sidebar_position: 1
---

# Healthcheks

`HC_API` : this should be set as env vars.

this should connect to this docker machine :

{% embed url="https://hub.docker.com/r/galexrt/healthchecks/" %}

## Official documentation here:

{% embed url="https://healthchecks.io/docs" %}

## Start

```python
key = "123456-123456-12455"
naas_drivers.health_check.start(key)
```

## Done

```python
key = "123456-123456-12455"
naas_drivers.health_check.done(key)
```

## fail

```python
key = "123456-123456-12455"
naas_drivers.health_check.fail(key)
```

## Check url

```python
url = "https://google.com"
key = "123456-123456-12455"
naas_drivers.health_check.check_up(url, key)
```

