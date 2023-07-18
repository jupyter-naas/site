---
sidebar_position: 1
---

# HTML builder

The HTML Builder driver in Naas enables you to create HTML content in a flexible and easy-to-use manner. Here are the key functionalities:

## Title

### Solo

```python
email_content = naas_drivers.emailbuilder.title("My title")
```

### Subtitle

```python
email_content = naas_drivers.emailbuilder.title("My title", "My subtitle")
```

### Style

```python
email_content = naas_drivers.emailbuilder.title("My title", bold=False, underline=True, italic=True)
```

### Color

```python
email_content = naas_drivers.emailbuilder.title("My title", color='blue')
```

### Align

```python
email_content = naas_drivers.emailbuilder.title("My title", text_align='right')
```

### Font size

```python
email_content = naas_drivers.emailbuilder.title("My title", font_size=32)
```

## Heading

```python
email_content = naas_drivers.emailbuilder.heading("My heading")
```

### Font Style

```python
email_content = naas_drivers.emailbuilder.heading("My heading", bold=False, underline=True, italic=True)
```

### Color

```python
email_content = naas_drivers.emailbuilder.heading("My heading", color='blue')
```

### Align

```python
email_content = naas_drivers.emailbuilder.heading("My heading", text_align='left')
```

### Font size

```python
email_content = naas_drivers.emailbuilder.heading("My heading", font_size=28)
```

## Subheading

```python
email_content = naas_drivers.emailbuilder.subheading("My subheading")
```

### Style

```python
email_content = naas_drivers.emailbuilder.subheading("My subheading", bold=False, underline=True, italic=True)
```

### Color

```python
email_content = naas_drivers.emailbuilder.subheading("My subheading", color='blue')
```

### Align

```python
email_content = naas_drivers.emailbuilder.subheading("My subheading", text_align='left')
```

### Font size

```python
email_content = naas_drivers.emailbuilder.subheading("My subheading", font_size=28)
```

## Text

### Simple

```python
email_content = naas_drivers.emailbuilder.text("My text")
```

### Style

```python
email_content = naas_drivers.emailbuilder.text("My text", bold=True, underline=True, italic=True)
```

### Color

```python
email_content = naas_drivers.emailbuilder.text("My text", color='blue')
```

### Align

```python
email_content = naas_drivers.emailbuilder.text("My text", text_align='center')
```

### Font size

```python
email_content = naas_drivers.emailbuilder.text("My text", font_size=22)
```

## Link

### Simple

```python
link = "https://google.com"
email_content = naas_drivers.emailbuilder.link(link)
```

### Title

```python
link = "https://google.com"
email_content = naas_drivers.emailbuilder.link(link, title="My title")
```

### Style

```python
email_content = naas_drivers.emailbuilder.text("My text", bold=True, underline=True, italic=True)
```

### Color

```python
link = "https://google.com"
email_content = naas_drivers.emailbuilder.link(link, color="#F2F2F2")
```

### Align

```python
email_content = naas_drivers.emailbuilder.text("My text", text_align='center')
```

### Font size

```python
email_content = naas_drivers.emailbuilder.text("My text", font_size=22)
```

## Info

Create infobox

```python
text = naas_drivers.emailbuilder.text("My text")
email_content = naas_drivers.emailbuilder.info(text)
```

## Space

Add a empty line

```text
email_content = naas_drivers.emailbuilder.space()
```

## Separator

Add a line separator

```text
email_content = naas_drivers.emailbuilder.separator()
```

## Button

### Link

```python
email_content = naas_drivers.emailbuilder.button("https://www.google.com")
```

### Title

```python
url = "https://www.google.com"
email_content = naas_drivers.emailbuilder.button(url, title="Open me")
```

### Size

```python
url = "https://www.google.com"
email_content = naas_drivers.emailbuilder.button(url, width="300px")
```

### Colors

```python
url = "https://www.google.com"
email_content = naas_drivers.emailbuilder.button(url, color="blue", background_color="white")
```

## Address

```python
email_content = naas_drivers.emailbuilder.address("My title", "My content")
```

## List

```python
list_ = ["First element",
         "Second element",
         "Third element"]

email_content = naas_drivers.emailbuilder.list(list_)
```

## Table

### Simple

```python
data = [["😁 Happier subscribers!", "👌 Touchable interface!", "❤️ No more frustration!"],["💌 Semantic email markup!", "🦻 Screenreader friendly!", "💬 Commented for easy use!"]]
email_content = naas_drivers.emailbuilder.table(data)
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
email_content = naas_drivers.emailbuilder.table(data)
```

### Header

```python
email_content = naas_drivers.emailbuilder.table(data,
    header=True,             # Add a header to the table
    header_bg_color="black", # Set the background color of the header
    header_ft_color="white") # Set the font color of the header
```

### Border

```python
email_content = naas_drivers.emailbuilder.table(data,
    border=True,          # Add a border to the table
    border_color="black") # Set the color of the border
```

### Align

```python
align = {
    0: "left",
    1: "center",
    2: "righ"
}

email_content = naas_drivers.emailbuilder.table(data, col_align=align)
```

### Column size

```python
size = {
    0: "50%",
    1: "10em",
    2: "30px"
}

email_content = naas_drivers.emailbuilder.table(data, col_size=size)
```

## Image

### Simple

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
email_content = naas_drivers.emailbuilder.image(url)
```

### Link

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
link = "https://google.com"
email_content = naas_drivers.emailbuilder.image(url, link=link)
```

### Name

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
name = "Image name"
email_content = naas_drivers.emailbuilder.image(url, name=name)
```

### Align

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
align = "right" # can be right left or center
email_content = naas_drivers.emailbuilder.image(url, align=align)
```

### Size

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
width="90%"
height="80%"
email_content = naas_drivers.emailbuilder.image(url, width=width, height=height)
```

## Logo

### Simple

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
email_content = naas_drivers.emailbuilder.image(url)
```

### Link

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
link = "https://google.com"
email_content = naas_drivers.emailbuilder.image(url, link=link)
```

### Name

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
name = "Image name"
email_content = naas_drivers.emailbuilder.image(url, name=name)
```

### Align

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
align = "right" # can be right left or center
email_content = naas_drivers.emailbuilder.image(url, align=align)
```

### Size

```python
url = "https://raw.githubusercontent.com/jupyter-naas/naas/main/images/naas_logo.svg"
size="90px"
email_content = naas_drivers.emailbuilder.image(url, size=size)
```

## Header

```python
elems = [naas_drivers.html().text("My text")]
email_content = naas_drivers.emailbuilder.header(elems)
```

## Footer

```python
elem = naas_drivers.html().title("My title")
elems = [naas_drivers.html().text("My text")]
email_content = naas_drivers.emailbuilder.footer("My title", elem, elems)
```

## Comapny Footer

### Social networks icons

```python
networks = [{
    'img_src': 'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg',
    'href': 'https://twitter.com/'
}]

naas_drivers.emailbuilder.footer_company(networks=networks)
naas_drivers.emailbuilder.footer_company(networks=networks,
                                        logo_width='5%',
                                        logo_padding='5px',
                                        logo_margin='0px 15px')
```

### Company informations

```python
company = ["Naas: Notebooks-as-a-service",
    "https://www.naas.ai/"]

naas_drivers.emailbuilder.footer_company(company=company)
```

### Legal informations

```python
legal = ["Powered by CASHSTORY © 2021",
    "CashStory SAS, 5 rue Hermel, 75018 Paris, France"]

naas_drivers.emailbuilder.footer_company(legal=legal)
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
email_content = naas_drivers.emailbuilder.generate(
        title=title,
        heading=heading,
        content=content,
        button_Explore_300px=url_html,
        display=display
)
```

## Export

```python
email_content = ""
filenames = "myfile.html" # can be .html .png .pdf or .jpeg file
# can be a list too
filenames = ["myfile.html", "myfile.pdf"]
css = ".class{ color: white;}" # allow css injection
naas_drivers.emailbuilder.export(email_content, filenames, css)
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
naas_drivers.emailbuilder.convert(data, input_type="markdown")
```

