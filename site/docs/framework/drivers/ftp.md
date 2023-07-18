---
sidebar_position: 1
---

# FTP

The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files between a client and server on a computer network. FTP is built on a client-server model architecture using separate control and data connections between the client and the server.

The Naas Drivers library offers a suite of methods to connect to an FTP server, retrieve (get) and send (put) files, and list the contents of directories on the server. 

## Connecting to an FTP Server

Before any other operation, you must first establish a connection to an FTP server. 

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
```

## Connecting to an FTPS Server

FTPS (FTP Secure) is an extension to the commonly used File Transfer Protocol (FTP) that adds support for the Transport Layer Security (TLS) and the Secure Sockets Layer (SSL) cryptographic protocols.

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd, port=990, secure=True)
```

## Force FTPS Protocol

You can also enforce the secure protocol on all commands.

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd, secure=True, force_prot=True)
```

## Retrieving a File from the Server

To get a file from the server, specify the path to the file on the server.

```python
path = "/path/to/file/in/ftp"
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
ftp.get(path)
```

## Sending a File to the Server

To send a file to the server, specify the local path to the file and the destination path on the server.

```python
path = "/path/to/local/file"
dest_path = "/path/to/file/in/ftp"
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
ftp.send(path, dest_path)
```

## Listing Files in a Directory

To list the contents of a directory on the server, use the `list_directory` method.

```python
user = "my user"
passwd = "my passwd"
ftp = naas_drivers.ftp.connect(user, passwd)
ftp.list_directory()
```

FTP and FTPS protocols, despite being somewhat old, are still widely used for file transfer tasks, especially in enterprise contexts. The Naas Drivers library provides a simple and effective way to use these protocols within your Python environment.