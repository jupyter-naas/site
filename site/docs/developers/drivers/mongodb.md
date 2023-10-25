---
sidebar_position: 1
---

# MongoDB

MongoDB is a popular document-oriented NoSQL database that provides high performance, scalability, and flexibility for managing data. It offers a flexible schema and a rich set of features for querying and manipulating data.

The MongoDB driver in Naas allows you to connect to a MongoDB database, retrieve data from a collection, and send data to a collection. This enables you to interact with MongoDB databases seamlessly within your workflows.

## Connect

To connect to a MongoDB database, you need to provide the necessary connection details, such as the host, port, username, and password.

```python
user = "myuser"
passwd = "mypassword"
host = "mongodb.example.com"
port = 27017

mongo = naas_drivers.mongo.connect(host, port, user, passwd)
```

By connecting to MongoDB using the provided connection details, you establish a connection that allows you to interact with the database.

## Get Data

Once you have connected to MongoDB, you can use the `get()` function to retrieve data from a specified collection in a database.

```python
collection_name = "mycollection"
db_name = "mydatabase"

data = mongo.get(collection_name, db_name)
```

This code snippet retrieves data from the specified `collection_name` in the `db_name` database. The returned `data` will depend on the structure and content of the collection.

## Send Data

To send data to a MongoDB collection, you can use the `send()` function and provide the data as a DataFrame.

```python
collection_name = "mycollection"
db_name = "mydatabase"
data = # your DataFrame

mongo.send(data, collection_name, db_name)
```

This code snippet sends the provided `data` DataFrame to the specified `collection_name` in the `db_name` database. The data will be inserted into the collection in MongoDB.

It's important to note that the structure and format of the data should match the schema of the MongoDB collection you are sending the data to.

## Official Documentation

For further details and advanced usage of MongoDB, you can refer to the [official MongoDB documentation](https://docs.mongodb.com/). It provides comprehensive information on how to work with MongoDB, including query operations, data manipulation, indexes, and more.