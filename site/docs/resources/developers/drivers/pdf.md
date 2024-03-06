---
sidebar_position: 1
---

# PDF

The PDF driver in Naas allows you to generate PDF files from web pages or HTML content. You can use the `get()` method to generate a PDF from a URL or HTML.

## Get from URL

To generate a PDF from a web page, provide the URL of the page along with the desired filename. Use the `get()` method to generate the PDF.

```python
import naas_drivers

url = "https://google.com"
filename = "google.pdf"
naas_drivers.pdf.connect().get(url=url, filename=filename)
```

This will generate a PDF file from the specified URL and save it with the provided filename.

## Get from HTML

If you have HTML content that you want to convert to a PDF, provide the HTML string instead of a URL. Again, use the `get()` method to generate the PDF.

```python
import naas_drivers

html = '<a src="https://google.com">test</a>'
filename = "google.pdf"
naas_drivers.pdf.connect().get(html=html, filename=filename)
```

This will generate a PDF file from the HTML content and save it with the provided filename.

## Connect

You can also create a PDF object by connecting to the PDF driver. This allows you to reuse the object to generate multiple PDFs.

```python
import naas_drivers

pdf = naas_drivers.pdf.connect()

url = "https://google.com"
filename = "google.pdf"
pdf.get(url=url, filename=filename)
```

By connecting to the PDF driver, you create a PDF object that can be used to generate PDFs multiple times.
Please note that when running Naas locally, you may need to set the `SCREENSHOT_API` environment variable or connect to the PDF driver first.