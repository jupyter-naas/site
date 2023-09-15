---
sidebar_position: 1
---

# Qonto

Qonto is a modern online banking platform for businesses. The Qonto driver in Naas allows you to connect to your Qonto account and retrieve various information such as bank positions, flows, and statements.

## Connect

Before using any other methods, you need to connect to your Qonto account using your user ID and API key.

```python
from naas_drivers import qonto

# Your credentials
user_id = 'YOUR_USER_ID'
api_key = 'YOUR_API_KEY'

# Connect to Qonto
qt = qonto.connect(user_id, api_key)
```

## Positions

Retrieve your bank account positions.

```python
# Get bank positions
df_positions = qt.positions.get()
df_positions
```

This will return a DataFrame with your bank account positions.

## Flows

Retrieve all flows by bank accounts.

```python
# Get all flows
df_flows = qt.flows.get_all()
df_flows
```

This will return a DataFrame with all flows from your bank accounts.

## Statements

Retrieve your statements with flows and positions.

### Aggregated by Day

#### Get All Flows

```python
# Get bank statement aggregated by day
df_statement = qt.statement.aggregated()
df_statement
```

This will return a DataFrame with your bank statement aggregated by day.

#### Filtered by Date

```python
# Get bank statement aggregated by day filtered by date
df_statement = qt.statement.aggregated(date_from="2020-10-01", date_to="2020-10-12")
df_statement
```

This will return a DataFrame with your bank statement aggregated by day, filtered by the specified date range.

### Detailed

#### Get All Flows

```python
# Get your statement detailed
df_statement = qt.statement.detailed()
df_statement
```

This will return a DataFrame with your detailed bank statement.

#### Filtered by Date

```python
# Get your statement detailed filtered by date
df_statement = qt.statement.detailed(date_from="2020-10-01", date_to="2020-10-12")
df_statement
```

This will return a DataFrame with your detailed bank statement, filtered by the specified date range.

Note: The `date_from` and `date_to` parameters must be in the format "%Y-%m-%d".

By using the Qonto driver in Naas, you can easily retrieve your Qonto account information and perform various analyses on your banking data.

