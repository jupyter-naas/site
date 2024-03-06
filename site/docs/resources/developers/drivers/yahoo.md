---
sidebar_position: 1
---

# Yahoo Finance

Yahoo Finance is a website that provides financial news, data, and insights on various financial instruments, including stocks. The Yahoo Finance driver in Naas allows you to retrieve stock data from Yahoo Finance.

## Get Stock Data

To get stock data from Yahoo Finance, use the `yahoofinance.get()` method. Here are some examples:

### Basic

```python
import naas_drivers

stock_data = naas_drivers.yahoofinance.get("TSLA")
```

This retrieves the stock data for Tesla (TSLA). The result is a Pandas DataFrame containing the stock data.

### Date Range

```python
import naas_drivers

date_from = "2022-01-01"
date_to = "2022-12-31"

stock_data = naas_drivers.yahoofinance.get("TSLA", date_from=date_from, date_to=date_to)
```

This retrieves the stock data for Tesla (TSLA) within the specified date range. The `date_from` and `date_to` parameters can be specified as strings in the format "YYYY-MM-DD".

### Interval

```python
import naas_drivers

interval = "1d"

stock_data = naas_drivers.yahoofinance.get("TSLA", interval=interval)
```

This retrieves the stock data for Tesla (TSLA) with a specific interval. The `interval` parameter specifies the frequency of data points and can be set to "1d" for daily, "1wk" for weekly, or "1mo" for monthly.

### Moving Averages

```python
import naas_drivers

moving_averages = [20, 50]

stock_data = naas_drivers.yahoofinance.get("TSLA", moving_averages=moving_averages)
```

This retrieves the stock data for Tesla (TSLA) and calculates the moving averages for the specified periods. The `moving_averages` parameter accepts a list of integers representing the periods for the moving averages.

The result of the `yahoofinance.get()` method is a Pandas DataFrame containing the stock data, including columns such as Date, Open, High, Low, Close, Volume, and Adjusted Close.

## Official Documentation

For more information about the Yahoo Finance API used by the driver, you can refer to the [official documentation](https://rapidapi.com/apidojo/api/yahoo-finance1).

The Yahoo Finance driver in Naas enables you to access stock data from Yahoo Finance easily, allowing you to perform various analyses and manipulations on the data for your financial projects.