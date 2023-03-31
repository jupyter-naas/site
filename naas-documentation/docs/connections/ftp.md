---
sidebar_position: 1
---

# FTP

## Connect

{% hint style="danger" %}
You must Connect before any other methods
{% endhint %}

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
```

## Connect Secure \(FTPS\)

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd, port=990, secure=True)
```

## Connect and force Protocol

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd, secure=True, force_prot=True)
```

## Get file

```python
path = "/path/to/file/in/ftp"
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
ftp.get(path)
```

## Send file

```python
path = "/path/to/local/file"
dest_path = "/path/to/file/in/ftp"
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
ftp.send(path, dest_path)
```

## List file

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
ftp.list_directory()
```

