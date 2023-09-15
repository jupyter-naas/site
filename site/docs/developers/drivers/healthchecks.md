---
sidebar_position: 1
---

# Healthchecks

[Healthchecks](https://healthchecks.io/) is a monitoring service for cron jobs, background services, and scheduled tasks. You can use it to keep track of when your jobs run and to notify you when they don't.

The Naas Drivers library allows you to integrate Healthchecks into your Python projects with ease.

## Prerequisites

For Naas.ai cloud users, this service is already set up. For others, you need to set `HC_API` as an environment variable. You should connect to the following Docker machine:

[Docker Machine](https://hub.docker.com/r/galexrt/healthchecks/)

## Sending Statuses

Healthchecks allows you to send different statuses including `start`, `done`, and `fail`.

### Start

This represents the beginning of a job.

```python
key = "123456-123456-12455"
naas_drivers.healthcheck.connect(key).send("start")
```

### Done

This indicates the successful completion of a job.

```python
key = "123456-123456-12455"
naas_drivers.healthcheck.connect(key).send()
```

### Fail

This denotes a job failure.

```python
key = "123456-123456-12455"
naas_drivers.healthcheck.connect(key).send("fail")
```

## Checking URL

You can use Healthchecks to monitor the availability of a URL.

```python
url = "https://google.com"
key = "123456-123456-12455"
naas_drivers.health_check.connect(key).check_up(url)
```

## Persistent Connection

You can establish a persistent connection to avoid connecting repeatedly for each method.

```python
key = "123456-123456-12455"
healthcheck = naas_drivers.healthcheck.connect(key)
healthcheck.send()
```

## Official Documentation

For further details, check the [official Healthchecks documentation](https://healthchecks.io/docs).

The Naas Drivers Healthchecks integration provides an easy way to monitor your cron jobs, background services, and scheduled tasks directly from your Python environment.