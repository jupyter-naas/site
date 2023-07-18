---
sidebar_position: 1
---

# HubSpot

HubSpot is a leading Customer Relationship Management (CRM) platform that provides software and support to help businesses grow. HubSpot's CRM platform includes marketing, sales, service, and website management products that start free and scale to meet the customers' needs at any stage of their business growth.

One of the key features of HubSpot is the ability to integrate with other services, which can be done through the HubSpot API. This allows developers to create custom applications or scripts that interact with the HubSpot data programmatically, providing increased flexibility and control.

With the `naas_drivers` Python library, you can connect to and interact with the HubSpot API to perform a variety of operations, including:

1. **Contacts Management**: The library allows for the retrieval, creation, updating, and deletion of contacts stored in your HubSpot account.

2. **Deals Management**: You can interact with deals associated with your account. This includes retrieving all deals, getting information on a specific deal, creating new deals, updating existing ones, or deleting them.

3. **Associations**: HubSpot also allows creating and managing associations between different entities (like a deal and a contact).

4. **Pipelines and Deal Stages**: The library provides interfaces for working with pipelines and deal stages, essential components of a sales process.

With Naas HubSpot driver, you can automate and streamline many of your business operations, leading to increased productivity and growth.

### Connect

It's essential to connect before calling any other methods:

```python
from naas_drivers import hubspot

# Enter your credentials
auth_token = "YOUR_AUTH_TOKEN"

# Connect to hubspot
hs = hubspot.connect(auth_token)
```
Note: No errors will be raised as per the philosophy of the driver.

## Contacts

You can manage contacts with the following operations:

### Get
Get all users:

```python
# Get all contacts
df_contact = hs.contacts.get_all()
```

Get a single user:

```python
# Get single contact
contact_id = "1"
hs.contacts.get(contact_id)
```

### Create

Create a contact (Basic):

```python
# Contact parameters
email = "test@cashstory.com"

# With create method
contact_id = hs.contacts.create(email)
```

Create a contact (Advanced):

```python
# Contact parameters
email = "test@cashstory.com"
firstname = "Test"
lastname ='CASHSTORY'
phone = "+33600000000"
jobtitle = "Consultant"
website = "www.cashstory.com"
company = 'CASHSTORY'
hubspot_owner_id = 1

# With create method
contact_id = hs.contacts.create(email,
                                firstname,
                                lastname,
                                phone,
                                jobtitle,
                                website,
                                company,
                                hubspot_owner_id)
```

Create a contact with JSON:

```python
# Contact parameters
email = "test@cashstory.com"
firstname = "Test"
lastname ='CASHSTORY'
phone = "+33600000000"
jobtitle = "Consultant"
website = "www.cashstory.com"
company = 'CASHSTORY'
hubspot_owner_id = 1

# With send method
create_contact = {"properties": 
                  {
                    "email": email,
                    "firstname": firstname,
                    "lastname": lastname,
                    "phone": phone,
                    "jobtitle": jobtitle,
                    "website": website,
                    "company": company,
                    "hubspot_owner_id": hubspot_owner_id,
                  }
                 }

contact_id = hs.contacts.send(create_contact)
```

### Update

Update contact (Basic):

```python
# Contact parameters
contact_id = "1"
email = "test@cashstory.com"

# With update method
hs.contacts.update(contact_id, email)
```

Update contact (Advanced):

```python
# Contact parameters
contact_id = "1"
email = "test@cashstory.com"
firstname = "Test"
lastname ='CASHSTORY'
phone = "+33600000000"
jobtitle = "Consultant"
website = "www.cashstory.com"
company = 'CASHSTORY'
hubspot_owner_id = 1

# With update method
hs.contacts.update(contact_id,
                   email,
                   firstname,
                   lastname,
                   phone,
                   jobtitle,
                   website,
                   company,
                   hubspot_owner_id)
```

Update contact with JSON:

```python
# With patch method
update_contact = {"properties": 
                  {
                    "email": email,
                    "firstname": firstname,
                    "lastname": lastname,
                    "phone": phone,
                    "jobtitle": jobtitle,
                    "website": website,
                    "company": company,
                    "hubspot_owner_id": hubspot_owner_id,
                  }
                 }

hs.contacts.patch(contact_id, update_contact)
```

### Delete

```python
# Delete contact
contact_id = "1"
hs.contacts.delete(contact_id)
```

## Deals

Deals can also be managed via get, create, update, and delete operations, similar to contacts.

## Associate

Associations can be made and retrieved:

### Get

```python
# Get association
object = 'deal'
object_id = '1'
association = 'contact'

hs.associations.get(object,
                    object_id,
                    association)
```

### Create

```python
# Create association
object = 'deal'
object_id = '1'
associate = 'contact'
associate_id = '1'

hs.associations.create(object,
                       object_id,
                       associate,
                       associate_id)
```

## Pipelines

Get all pipelines:

```python
# Get all pipelines
hs.pipelines.get_all()
```

## Deal stages

Get all deal stages:

```python
# Get all dealstages
hs.dealstages.get_all()
```

For further details, you can refer to the [official Hubspot API documentation](https://developers.hubspot.com/docs/api/overview).