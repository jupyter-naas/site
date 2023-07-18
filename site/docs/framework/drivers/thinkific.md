---
sidebar_position: 1
---

# Thinkific

Thinkific is an online course platform that allows you to create, market, and sell online courses. The Thinkific driver in Naas provides functionality to interact with the Thinkific API and perform operations on users and enrollments.


## Connect

You can also save your connection to Thinkific and reuse it for multiple operations. Here's an example:

```python
import naas_drivers

api_key = "YOUR_API_KEY"

thinkific = naas_drivers.thinkific.connect(api_key)
users = thinkific.users.get()
```

Replace `"YOUR_API_KEY"` with your Thinkific API key. The `thinkific.connect()` method creates a connection to Thinkific using your API key, and you can use this connection object (`thinkific`) to call different methods on the Thinkific driver.

## Users

### Get User

To get user information from Thinkific, use the following code:

```python
import naas_drivers

api_key = "YOUR_API_KEY"
uid = "USER_ID"

thinkific = naas_drivers.thinkific.connect(api_key)
user = thinkific.users.get(uid=uid)
```

Replace `"YOUR_API_KEY"` with your Thinkific API key and `"USER_ID"` with the ID of the user you want to retrieve information for. The `users.get()` method returns a dictionary containing the user's information.

### Send User

To send a user to Thinkific, use the following code:

```python
import naas_drivers

api_key = "YOUR_API_KEY"
email = "user@example.com"

thinkific = naas_drivers.thinkific.connect(api_key)
response = thinkific.users.send(email=email)
```

Replace `"YOUR_API_KEY"` with your Thinkific API key and `"user@example.com"` with the email of the user you want to send to Thinkific. The `users.send()` method sends the user information to Thinkific and returns the API response.

### Delete User

To delete a user from Thinkific, use the following code:

```python
import naas_drivers

api_key = "YOUR_API_KEY"
uid = "USER_ID"

thinkific = naas_drivers.thinkific.connect(api_key)
response = thinkific.users.delete(uid=uid)
```

Replace `"YOUR_API_KEY"` with your Thinkific API key and `"USER_ID"` with the ID of the user you want to delete. The `users.delete()` method deletes the user from Thinkific and returns the API response.

## Enrollments

### Get Enrollment

To get enrollment information from Thinkific, use the following code:

```python
import naas_drivers

api_key = "YOUR_API_KEY"
uid = "ENROLLMENT_ID"

thinkific = naas_drivers.thinkific.connect(api_key)
enrollment = thinkific.enrollments.get(uid=uid)
```

Replace `"YOUR_API_KEY"` with your Thinkific API key and `"ENROLLMENT_ID"` with the ID of the enrollment you want to retrieve information for. The `enrollments.get()` method returns a dictionary containing the enrollment information.

### Send Enrollment

To send an enrollment to Thinkific, use the following code:

```python
import naas_drivers

api_key = "YOUR_API_KEY"
email = "user@example.com"

thinkific = naas_drivers.thinkific.connect(api_key)
response = thinkific.enrollments.send(email=email)
```

Replace `"YOUR_API_KEY"` with your Thinkific API key and `"user@example.com"` with the email of the user you want to enroll. The `enrollments.send()` method enrolls the user in a course in Thinkific and returns the API response.

### Delete Enrollment

To delete an enrollment from Thinkific, use the following code:

```python
import naas_drivers

api_key = "YOUR_API_KEY"
uid = "ENROLLMENT_ID"

thinkific = naas_drivers.thinkific.connect(api_key)
response = thinkific.enrollments.delete(uid=uid)
```

Replace `"YOUR_API_KEY"` with your Thinkific API key and `"ENROLLMENT_ID"` with the ID of the enrollment you want to delete. The `enrollments.delete()` method deletes the enrollment from Thinkific and returns the API response.



The Thinkific driver in Naas allows you to interact with user and enrollment data in Thinkific, making it easier to manage your online courses and users programmatically. For more information about the Thinkific API, refer to the [official documentation](https://developers.thinkific.com/api/api-documentation/#/).