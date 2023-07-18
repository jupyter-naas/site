---
sidebar_position: 1
---

# Canny

[Canny](https://canny.io/) is a user-friendly customer feedback tool that helps businesses to collect and organize feature requests to better understand user needs and prioritize product development. It provides a centralized platform for your users to provide feedback and for your team to keep track of this feedback.

The Naas Drivers library allows you to connect to the Canny API, enabling the manipulation of user data programmatically from your Python environment. 

## User Management

With Canny, you can fetch, send, and delete user data. Here are examples of how to perform these operations:

### Retrieve User Data

```python
import naas_drivers

api_key = "api_key"

user_data = naas_drivers.canny.connect(api_key).users.get(uid="uid")
```

### Send User Data

```python
import naas_drivers

api_key = "api_key"

user_data = naas_drivers.canny.connect(api_key).users.send(email="bob@cashstory.com")
```

### Retrieve User Data by Email

```python
import naas_drivers

api_key = "api_key"

user_data = naas_drivers.canny.connect(api_key).users.get_by_email(email="bob@cashstory.com")
```

### Delete User Data

```python
import naas_drivers

api_key = "api_key"

user_data = naas_drivers.canny.connect(api_key).users.delete(uid="uid")
```

### Maintain Connection

To enhance efficiency, you can maintain a single connection for multiple operations:

```python
import naas_drivers

api_key = "api_key"

canny = naas_drivers.canny.connect(api_key)
data = canny.users.get()
```

## Official Documentation

For more comprehensive understanding and usage of Canny's API, refer to the [official API documentation](https://developers.canny.io/api-reference). This will provide you with detailed information about the available endpoints, request parameters, and response data structures.