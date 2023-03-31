---
sidebar_position: 1
---

# Hubspot

{% embed url="http://hubspot.com" %}
Website
{% endembed %}

## Connect

{% hint style="danger" %}
You must "Connect" before any other methods
{% endhint %}

```python
from naas_drivers import hubspot

# Enter your credentials
auth_token = "YOUR_AUTH_TOKEN"

# Connect to hubspot
hs = hubspot.connect(auth_token)
```

{% hint style="warning" %}
In the drivers philosophy, we did not raise errors.
{% endhint %}

## Contacts

### Get

#### All users

```python
# Get all contacts
df_contact = hs.contacts.get_all()
df_contact
```

#### Single user

```python
# Get single contact
contact_id = "1"
hs.contacts.get(contact_id)
```

### Create

#### Basic

```python
# Contact parameters
email = "test@cashstory.com"

# With create method
contact_id = hs.contacts.create(email)
```

#### Advanced

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

#### With json

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

#### Basic

```python
# Contact parameters
contact_id = "1"
email = "test@cashstory.com"

# With update method
hs.contacts.update(contact_id, email)
```

#### Advanced

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

#### With json

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
# Delete deals
contact_id = "1"
hs.contacts.delete(contact_id)
```

## Deals

### Get

#### All deals

```python
# Get all deals
hs.deals.get_all()
```

#### Single deal

```python
# Get single deal
get_deal = '1'
hs.deals.get(get_deal)
```

### Create

#### Basic

```python
# Deal parameters
dealname = "NEW DEAL"
dealstage = '1'

# With create method
deal_id = hs.deals.create(dealname,
                          dealstage)
```

#### Advanced

```python
# Deal parameters
dealname = "NEW DEAL"
dealstage = "1"
closedate = "01/01/2021"
amount = 1000.00
hubspot_owner_id = 1

# With create method
deal_id = hs.deals.create(dealname,
                          dealstage)
```

#### With json

```python
# Deal parameters
dealname = "NEW DEAL"
dealstage = "1"
closedate = "01/01/2021"
amount = 1000.00
hubspot_owner_id = 1

# With send method
send_deal = {"properties": 
             {
                 "dealstage": dealstage,
                 "dealname": dealname,
                 "amount": amount,
                 "closedate": closedate,
                 "hubspot_owner_id": hubspot_owner_id,
              }
             }

deal_id = hs.deals.send(send_deal)
```

### Update

#### Basic

```python
# Deal parameters
deal_id = "1"
dealname = "NEW DEAL"

# With update method
hs.deals.update(deal_id,
                dealname)
```

#### Advanced

```python
# Deal parameters
deal_id = "1"
dealname = "NEW DEAL"
dealstage = "1"
closedate = "01/01/2021"
amount = 1000.00
hubspot_owner_id = 1

# With update method
hs.deals.update(deal_id,
                dealname,
                dealstage,
                closedate,
                amount,
                hubspot_owner_id)
```

#### With json

```python
# Deal parameters
deal_id = "1"
dealname = "NEW DEAL"
dealstage = "1"
closedate = "01/01/2021"
amount = 1000.00
hubspot_owner_id = 1

# With patch method
update_deal = {"properties":
               {
                   "dealstage": dealstage,
                   "dealname": dealname,
                   "amount": amount,
                   "closedate": closedate,
                   "hubspot_owner_id": hubspot_owner_id,
               }
              }

hs.deals.patch(deal_id, update_deal)
```

### Delete

```python
# Delete deals
deal_id = "1"
hs.deals.delete(deal_id)
```

## Associate

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

#### Get all pipelines

```python
# Get all pipelines
hs.pipelines.get_all()
```

## Deal stages

#### Get all dealstages

```python
# Get all dealstages
hs.dealstages.get_all()
```

## Official documentation

{% embed url="https://developers.hubspot.com/docs/api/overview" %}
