---
sidebar_position: 1
---

# Markdown

The Markdown driver provides functionalities to convert Markdown text or files into HTML format and display Markdown content in a notebook.

## Convert

You can convert Markdown text or a Markdown file into HTML format using the `convert` method.

```python
html = naas_drivers.markdown.convert("# My title")
```

The `convert` method takes a Markdown string or the path to a Markdown file as input and returns the corresponding HTML content.

## Display

You can use the `display` method to directly render and display Markdown content in a notebook.

```python
naas_drivers.markdown.display("# My title")
```

The `display` method takes a Markdown string or the path to a Markdown file as input and renders the Markdown content in the notebook, allowing you to view the formatted Markdown output.

Please note that the Markdown driver assumes the input content follows the Markdown syntax. Ensure that your Markdown content is correctly formatted to obtain the desired HTML or display output.

