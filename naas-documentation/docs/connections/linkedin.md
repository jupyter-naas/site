---
sidebar_position: 1
---

# LinkedIn

{% embed url="https://www.linkedin.com" caption="" %}

{% hint style="danger" %}
As of June 2021, we are starting a refactoring of the LinkedIn driver, please refer to the [awesome-notebook Github page](https://github.com/jupyter-naas/awesome-notebooks/tree/master/LinkedIn) to get the latest updates.
{% endhint %}

## Get your cookies

To access your LinkedIn data, you need to learn how to get your cookies.

{% hint style="info" %}
To get your cookies, please follow this [tutorial.](https://www.notion.so/LinkedIn-driver-Get-your-cookies-d20a8e7e508e42af8a5b52e33f3dba75)
{% endhint %}

## Get

### Profile

#### Formula

```python
from naas_drivers import linkedin

# Enter cookies information
LI_AT = 'YOUR_COOKIE_LI_AT'  # EXAMPLE : AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = 'YOUR_COOKIE_JSESSIONID'  # EXAMPLE : ajax:8379907400220387585

# Enter the linkedin id or linkedin url
url = "LINKEDIN_ID" or "LINKEDIN_URL"

# Get dataframe as result
df = linkedin.connect(LI_AT, JSESSIONID).get_profil(url)
df
```

#### Result

* FIRSTNAME : First name
* LASTNAME : Last name
* BIRTHDATE\_DAY : Day of birth in format DD
* BIRTHDATE\_MONTH : Month of birth in format MM
* BIRTHDATE\_YEAR : Year of birth in format YYYY
* BIRTHDATE : Birthdate in format DD, MM - YYYY 
* COUNTRY : Country name
* ADDRESS : Address
* LK\_HEADLINE : Job description \(headline\)
* LK\_SECTOR : Work industry
* LK\_FOLLOWERS : Number of followers
* LK\_PHONE : Phone number
* LK\_EMAIL : Email
* LK\_TWITER : Twitter account

### Messages \(last 20\)

#### Formula

```python
from naas_drivers import linkedin

# Enter cookies information
LI_AT = "YOUR_COOKIE_LI_AT"  # EXAMPLE AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = "YOUR_COOKIE_JSESSIONID"  # EXAMPLE ajax:8379907400220387585

# Get dataframe as result
df = linkedin.connect(LI_AT, JSESSIONID).get_messages()
df
```

#### Result

* FIRSTNAME : First name
* LASTNAME : Last name
* OCCUPATION : Job description \(headline\)
* PROFILE\_PUBLIC\_ID : LinkedIn ID
* LAST\_ACTIVITY : Last activity in format YYYY-MM-DD HH:MM:SS
* LAST\_READ\_AT : Last message read at in format YYYY-MM-DD HH:MM:SS
* MESSAGE\_TEXT : Message content
* MESSAGE\_TYPE : Message type

### Post data

#### Formula

```python
from naas_drivers import linkedin

# Enter cookies information
LI_AT = "YOUR_COOKIE_LI_AT"  # EXAMPLE AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = "YOUR_COOKIE_JSESSIONID"  # EXAMPLE ajax:8379907400220387585

# Enter post url
url = "YOUR_POST_URL"

# Get dataframe as result
df = linkedin.connect(LI_AT, JSESSIONID).get_post_data(url)
df
```

#### Result

* URL : Post url
* TITLE : Post text before first break
* DATE : Time since post publication
* VIEWS : Numbers of views
* COMMENTS : Numbers of comments
* LIKES : Numbers of likes
* LIKES\_LIKE : Numbers of likes type "like"
* LIKES\_PRAISE : Numbers of likes type "praise"
* LIKES\_INTEREST : Numbers of likes type "interest"
* LIKES\_APPRECIATION : Numbers of likes type "appreciation"
* LIKES\_EMPATHY : Numbers of likes type "empathy"

## Advanced

{% hint style="warning" %}
You can "connect" before any other methods and use your object in your formulas
{% endhint %}

```python
from naas_drivers import linkedin

# Enter cookies information
LI_AT = "YOUR_COOKIE_LI_AT"  # EXAMPLE AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = "YOUR_COOKIE_JSESSIONID"  # EXAMPLE ajax:8379907400220387585

# Connect to Linkedin
LK = linkedin.connect(LI_AT, JSESSIONID)

# Get last 20 messages
df = LK.get_messages()
```

