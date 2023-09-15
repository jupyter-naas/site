---
sidebar_position: 1
---

# Jupyter

Jupyter is an open-source project that supports interactive data science and scientific computing across all programming languages. JupyterHub brings the power of notebooks to groups of users. It gives users access to computational environments and resources without burdening the users with installation and maintenance tasks.

Check out their official [website](https://jupyter.org/hub) to get started.

## Connect

Before you start using the driver, you need to connect to the Jupyter instance. In the Naas cloud, you can connect without any argument as it will automatically find your token.

Get your token here: [Naas token](https://app.naas.ai/hub/token)

Connect to Jupyter instance:

```python
from naas_drivers import jupyter

# Your token
token = "*****"

# Connect to Jupyter
jp = jupyter.connect(token)
```

## Get Info

### Get My Profile

You can fetch your profile details using the following method:

```python
# Get profile details
me = jp.get_me()
```

## Admin Operations

Only Naas admin can perform the following operations.

### Get Users

Fetch all the users:

```python
# Get all users
users = jp.get_users()
```

### Get One User

Fetch a specific user:

```python
# User email
email = "bob@cashstory.com"

# Get the user
user = jp.get_user(email)
```

### Create User

Create a new user:

```python
# User details
email = "bob@cashstory.com"
password = "****"

# Create user
user = jp.create_user(email, password)
```

### Get Authorization

Get authorization for a user:

```python
# User email
email = "bob@cashstory.com"

# Get authorization
is_authorize = jp.get_authorize_user(email)
```

### Authorize User

Authorize a user:

```python
# User email
email = "bob@cashstory.com"
is_authorize = True

# Authorize user
user = jp.change_authorize_user(email, is_authorize)
```

### Check User Active

Check if a user has a running server:

```python
# User email
email = "bob@cashstory.com"

# Check user active
active = jp.is_user_active(email)
```

### Change Password

Change the password of a user:

```python
# User details
email = "bob@cashstory.com"
newPassword = "*****"

# Change password
user = jp.change_password_user(email, newPassword)
```

### Get Server Uptime

Get server uptime:

```python
# User email
email = "bob@cashstory.com"

# Get server uptime
uptime = jp.get_server_uptime(email)
```

### Stop User

Stop a user:

```python
# User email
email = "bob@cashstory.com"

# Stop user
jp.stop_user(email)
```

### Start User

Start a user:

```python
# User email
email = "bob@cashstory.com"

# Start user
jp.start_user(email)
```

### Restart User

Restart a user:

```python
# User email
email = "bob@cashstory.com"

# Restart user
jp.restart_user(email)
```

For more information about Jupyter and its API, you can refer to the [official Jupyter API documentation](https://jupyterhub.readthedocs.io/en/stable/reference/rest.html).