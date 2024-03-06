---
sidebar_position: 3
---

# Asset 

This guide will help you understand how to create and manage assets with Naas shareable assets job. 


<iframe width="100%" height="550" src="https://www.youtube.com/embed/z8sTjIiZphM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Adding Assets

You can add any current file you are working on as an asset, which will be copied to your production folder and made available via a generated URL.

```python
naas.asset.add()
```

Upon executing the above code, a URL will be returned that expose your current file.

To add a different file as an asset, provide a file path:

```python
naas.asset.add("path/to/my/super/data.csv")
```

You can use the `inline` parameter to get a response in your web browser instead of downloading the file:

```python
params = {"inline": True}
naas.asset.add(params=params)
```

To debug the process, use the `debug` parameter:

```python
naas.asset.add(debug=True)
```

## Finding Assets

Retrieve the URL of a file pushed into production using:

```python
url = naas.asset.find()
```

To find a specific file, provide the file path:

```python
url = naas.asset.find(path="path/to/my/super/notebook.ipynb")
```

## Listing Assets

List all versions of a file that have been pushed into production:

```python
naas.asset.list()
```

To list all versions of a specific file, provide the file path:

```python
naas.asset.list(path="path/to/my/super/data.csv")
```

## Retrieving Assets

Retrieve the latest version of a file that has been pushed into production:

```python
naas.asset.get()
```

You can specify the file path or the history ID:

```python
naas.asset.get(path="path/to/my/super/data.csv")
naas.asset.get(histo="20201008101221879662")
```

Or you can use both:

```python
naas.asset.get(path="path/to/my/super/data.csv", histo="20201008101221879662")
```

## Clearing Assets

Clear a specific version of a file that has been pushed into production:

```python
naas.asset.clear(histo="20201008101221879662")
```

Clear a specific version of a specific file:

```python
naas.asset.clear(path="path/to/my/super/data.csv", histo="20201008101221879662")
```

Clear all versions of the current file or a specific file:

```python
naas.asset.clear()
naas.asset.clear(path="path/to/my/super/data.csv")
```

## Deleting Assets

Remove the current file or a specific file:

```python
naas.asset.delete()
naas.asset.delete(path="path/to/my/super/data.csv")
```

For debugging, use the `debug` parameter:

```python
naas.asset.delete(debug=True)
```

## Listing All Assets

If you need to check how many assets you have, use:

```python
naas.asset.currents()
```

For a raw result, use the `raw` parameter:

```python
naas.asset.currents(raw=True)
```