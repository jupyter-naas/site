---
sidebar_position: 1
---
# Plotly

Plotly is a powerful data visualization library that allows you to create interactive charts and graphs. The Plotly driver in Naas enables you to create various types of plots using Plotly's features.

## Stock Chart

The stock chart allows you to create stock charts from a DataFrame. You can use the Yahoo driver to retrieve the stock data and pass it to the stock chart function. The DataFrame should have the following columns: `Date`, `Open`, `High`, `Low`, `Close`, `Adj Close`, `Volume`, and `Company`.

### Basic

```python
import naas_drivers

df = naas_drivers.yahoo.stock("TSLA")
chart = naas_drivers.plot.stock(df)
```

This will generate a basic stock chart for the given stock symbol.

### Chart Type

You can specify the chart type by setting the `kind` parameter. The available options are `linechart`, `linechart_open`, `linechart_close`, or `candlestick`.

```python
kind = "linechart"
naas_drivers.plot.stock("TSLA", kind=kind)
```

This will generate a stock chart of the specified type.

### Filter

You can enable a filter on the stock chart by setting the `filter` parameter to `True`. You can also customize the filter title using the `filter_title` parameter.

```python
naas_drivers.plot.stock("TSLA", filter=True, filter_title="Stock")
```

This will add a filter to the stock chart.

## Line Chart

The line chart allows you to create line charts from a DataFrame.

### Basic

```python
import naas_drivers

df = naas_drivers.yahoo.stock("TSLA")
chart = naas_drivers.plot.linechart(df, label_x="Date", label_y=["Close"])
```

This will generate a basic line chart using the "Date" column as the x-axis and the "Close" column as the y-axis.

## Candlestick Chart

The candlestick chart allows you to create candlestick charts from a DataFrame.

### Basic

```python
import naas_drivers

df = naas_drivers.yahoo.stock("TSLA")
chart = naas_drivers.plot.candlestick(df, 
                label_x="Date", 
                label_open="Open", 
                label_high="High",
                label_low="Low",
                label_close="Close"
                )
```

This will generate a basic candlestick chart using the specified columns for the x-axis and the open, high, low, and close values.

## Export

You can export the generated chart as an image or HTML file using the `export()` function.

### Simple

```python
chart = naas_drivers.plot.stock("TSLA")
filename = "Tesla.png"  # can be png, jpeg, or html
naas_drivers.plot.export(chart, "Tesla.png", css=None)
```

This will export the chart as a PNG image with the specified filename.

### Custom CSS

```python
chart = naas_drivers.plot.stock("TSLA")
filename = "Tesla.png"  # can be png or html
css = ".custom_css {color: white}"
naas_drivers.plot.export(chart, "Tesla.png", css=css)
```

This will export the chart as a PNG image with custom CSS applied.

## Official Documentation

For more information on using Plotly, you can refer to the official Plotly documentation:

[Plotly Python Getting Started](https://plotly.com/python/getting-started/)