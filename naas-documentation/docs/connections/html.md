---
sidebar_position: 1
---

# HTML

## Title

### Solo

```python
naas_drivers.html.title("My title")
```

### Subtitle

```python
naas_drivers.html.title("My title", "My subtitle")
```

## Heading

```python
naas_drivers.html.heading("My heading")
```

## Subheading

```python
naas_drivers.html.subheading("My subheading")
```

## Text

### Simple

```python
naas_drivers.html.text("My text")
```

### Font Size

```python
naas_drivers.html.text("My text", font_size="42px")
```

## Info

Create info box

```python
text = naas_drivers.html.text("My text")
naas_drivers.html.info(text)
```

## Space

Add a empty line 

```text
naas_drivers.html.space()
```

## Separator

Add a line separator

```text
naas_drivers.html.separator()
```

## Button

### Link

```python
naas_drivers.html.button("https://www.google.com")
```

### Title

```python
url = "https://www.google.com"
naas_drivers.html.button(url, title="Open me")
```

### Size

```python
url = "https://www.google.com"
naas_drivers.html.button(url, width="300px")
```

### Colors

```python
url = "https://www.google.com"
naas_drivers.html.button(url, color="blue", background_color="white")
```

## Address

```python
naas_drivers.html.address("My title", "My content")
```

## Link

### Simple

```python
link = "https://google.com"
naas_drivers.html.link(link)
```

### Title

```python
link = "https://google.com"
naas_drivers.html.link(link, title="My title")
```

### Color

```python
link = "https://google.com"
naas_drivers.html.link(link, color="#F2F2F2")
```



## Table

### Simple

```python
data = [["😁 Happier subscribers!", "👌 Touchable interface!", "❤️ No more frustration!"],["💌 Semantic email markup!", "🦻 Screenreader friendly!", "💬 Commented for easy use!"]]
naas_drivers.html.table(data)
```

### Dataframe

{% hint style="info" %}
The drivers will try to transform all your column with they column title
{% endhint %}

{% hint style="success" %}
you can pass parameters with`_ exemple: text_14px link_Read`
{% endhint %}



\`\`

```python
data = pandas.DataFrame()
# each column title will be tranform in any html type
naas_drivers.html.table(data)
```

## Image

### Simple

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
naas_drivers.html.image(url)
```

### Link

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
link = "https://google.com"
naas_drivers.html.image(url, link=link)
```

### Name

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
name = "Image name"
naas_drivers.html.image(url, name=name)
```

### Align

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
align = "right" # can be right left or center
naas_drivers.html.image(url, align=align)
```

### Size

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
width="90%"
height="80%"
naas_drivers.html.image(url, width=width, height=height)
```

## Logo

### Simple

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
naas_drivers.html.image(url)
```

### Link

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
link = "https://google.com"
naas_drivers.html.image(url, link=link)
```

### Name

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
name = "Image name"
naas_drivers.html.image(url, name=name)
```

### Align

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
align = "right" # can be right left or center
naas_drivers.html.image(url, align=align)
```

### Size

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
size="90px"
naas_drivers.html.image(url, size=size)
```

## Header

```python
elems = [naas_drivers.html().text("My text")]
naas_drivers.html.header(elems)
```

## Footer

```python
elem = naas_drivers.html().title("My title")
elems = [naas_drivers.html().text("My text")]
naas_drivers.html.footer("My title", elem, elems)
```

## Generate

```python
stock="TSLA"

title=f'Evolution of {stock} stock'
heading="👉 Analyze daily performance over time."
content:"""
        🚀 Explore the data, zoom, and get deeply insights over the 100 last days Below. 
        Picture are nice but dynamic chart below are way more fun  :
"""
display = 'iframe' # can be iframe, embed or False ( for display in notebook)
email_content = naas_drivers.html.generate(
        title=title,
        heading=heading,
        content=content,
        button_Explore_300px=url_html,
        display=display
)
```

## Export

```python
html = email_content
filenames = "myfile.html" # can be .html .png .pdf or .jpeg file
# can be a list too
filenames = ["myfile.html", "myfile.pdf"]
css = ".class{ color: white;}" # allow css injection
naas_drivers.html.export(html, filenames, css)
```

## Convert

{% hint style="info" %}
only support markdown to html for now
{% endhint %}

```python
data = """
# Welcome Title

text here
"""
naas_drivers.html.convert(data, input_type="markdown")
```

