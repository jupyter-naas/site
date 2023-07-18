---
sidebar_position: 1
---

# Awesome-notebooks

Naas has a rich library of ready-to-use Jupyter notebooks called "Awesome-notebooks." These templates cover a wide range of tools and can serve as a valuable starting point for your projects. The Awesome-notebooks library is publicly available on Github, and you can explore the collection [here](https://github.com/jupyter-naas/awesome-notebooks) and on [Naas Search](https://workspace.naas.ai)

## Retrieve Notebook Templates List

You can retrieve the list of available notebook templates organized by tools directly from Github. To download a notebook, click on the corresponding link, which will download the notebook to your root folder. 

Here's how to fetch the list using the Naas Drivers library:

```python
import naas_drivers

naas_drivers.templates.get()
```

## Generate a Badge for Your Notebook

You can also create a badge for your Github-hosted notebook template. This badge, when clicked, allows anyone to download your notebook directly to their root folder, promoting easy sharing and reusability.

To create a badge for your notebook, provide the file URL as shown below:

```python
import naas_drivers

file_url = "https://github.com/jupyter-naas/awesome-notebooks/blob/master/Airtable/Airtable_connect.ipynb"
naas_drivers.templates.badge(file_url)
```

In summary, the Awesome-notebooks catalog is a practical library of templates that not only reduces the time and effort required to initiate new projects but also promotes code reusability and collaboration.