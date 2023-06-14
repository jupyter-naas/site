---
sidebar_position: 1
---

# Qonto

{% embed url="https://qonto.com/" caption="" %}

## Connect

{% hint style="danger" %}
You must "Connect" before any other methods
{% endhint %}

```python
from naas_drivers import qonto

# Your credentials
user_id = 'YOUR_USER_ID'
api_key = 'YOUR_API_KEY'

# Connect to Qonto
qt = qonto.connect(user_id, api_key)
```

## Positions

Get your bank account positions

```python
# Get bank positions
df_positions = qt.positions.get()
df_positions
```

## Flows

Get all flows by bank accounts

```python
# Get all flows
df_flows = qt.flows.get_all()
df_flows
```

## Statements

Get your statements with flows and positions

### Aggregated by day

#### Get all flows

```python
# Get bank statement aggregated by day
df_statement = qt.statement.aggregated()
df_statement
```

#### Filtered by date

```python
# Get bank statement aggregated by day filtered by date
df_statement = qt.statement.aggregated(date_from="2020-10-01",
                                       date_to="2020-10-12")
df_statement
```

### Detailed

#### Get all flows

```python
# Get your statement detailed
df_statement = qt.statement.detailed()
df_statement
```

#### Filtered by date

```python
# Get your statement detailed filtered by date
df_statement = qt.statement.detailed(date_from="2020-10-01",
                                     date_to="2020-10-12")
df_statement
```

{% hint style="warning" %}
Parameters "date\_from" and "date\_to" must be in format "%Y-%m-%d"
{% endhint %}

[https://public.naas.ai/amVyZW15LTJFcmF2ZW5lbC00MGNhc2hzdG9yeS0yRWNvbQ==/asset/99244e374f50128c76de7a7d09209722ff109d8f3cb19a312fdd5b818e09](https://public.naas.ai/amVyZW15LTJFcmF2ZW5lbC00MGNhc2hzdG9yeS0yRWNvbQ==/asset/99244e374f50128c76de7a7d09209722ff109d8f3cb19a312fdd5b818e09)

