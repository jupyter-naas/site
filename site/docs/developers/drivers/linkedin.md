---
sidebar_position: 1
---

# LinkedIn

LinkedIn is a professional social networking platform that allows users to connect with colleagues, business partners, and potential employers. The Naas LinkedIn driver enables you to access and interact with LinkedIn data programmatically using your LinkedIn cookies.

Before you can use the LinkedIn driver, you need to obtain your LinkedIn cookies. Follow the tutorial provided to learn how to get your cookies: [How to get your LinkedIn cookies?](../../troubleshooting/how-to/get-linkedin-cookies)

## Get Profile

You can retrieve profile information using the following method:

```python
from naas_drivers import linkedin

# Enter your LinkedIn cookies
LI_AT = 'YOUR_COOKIE_LI_AT'  # Example: AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = 'YOUR_COOKIE_JSESSIONID'  # Example: ajax:8379907400220387585

# Enter the LinkedIn ID or LinkedIn URL
url = "LINKEDIN_ID" or "LINKEDIN_URL"

# Get profile information as a DataFrame
df = linkedin.connect(LI_AT, JSESSIONID).get_profile(url)
df
```

The result will include the following profile information:

- FIRSTNAME: First name
- LASTNAME: Last name
- BIRTHDATE_DAY: Day of birth in format DD
- BIRTHDATE_MONTH: Month of birth in format MM
- BIRTHDATE_YEAR: Year of birth in format YYYY
- BIRTHDATE: Birthdate in format DD, MM - YYYY
- COUNTRY: Country name
- ADDRESS: Address
- LK_HEADLINE: Job description (headline)
- LK_SECTOR: Work industry
- LK_FOLLOWERS: Number of followers
- LK_PHONE: Phone number
- LK_EMAIL: Email
- LK_TWITTER: Twitter account

## Get Messages

You can fetch the last 20 messages using the following method:

```python
from naas_drivers import linkedin

# Enter your LinkedIn cookies
LI_AT = "YOUR_COOKIE_LI_AT"  # Example: AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = "YOUR_COOKIE_JSESSIONID"  # Example: ajax:8379907400220387585

# Get messages as a DataFrame
df = linkedin.connect(LI_AT, JSESSIONID).get_messages()
df
```

The result will include the following message details:

- FIRSTNAME: First name
- LASTNAME: Last name
- OCCUPATION: Job description (headline)
- PROFILE_PUBLIC_ID: LinkedIn ID
- LAST_ACTIVITY: Last activity in format YYYY-MM-DD HH:MM:SS
- LAST_READ_AT: Last message read at in format YYYY-MM-DD HH:MM:SS
- MESSAGE_TEXT: Message content
- MESSAGE_TYPE: Message type

## Get Post Data

You can retrieve data from a LinkedIn post using its URL:

```python
from naas_drivers import linkedin

# Enter your LinkedIn cookies
LI_AT = "YOUR_COOKIE_LI_AT"  # Example: AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = "YOUR_COOKIE_JSESSIONID"  # Example: ajax:8379907400220387585

# Enter the post URL
url = "YOUR_POST_URL"

# Get post data as a DataFrame
df = linkedin.connect(LI_AT, JSESSIONID).get_post_data(url)
df
```

The result will include the following post details:

- URL: Post URL
- TITLE: Post text before the first break
- DATE: Time since post publication
- VIEWS: Number of views
- COMMENTS: Number of comments
- LIKES: Number of likes
- LIKES_LIKE: Number of likes of type "like"
- LIKES_PRAISE: Number of likes of type "praise"
- LIKES_INTEREST: Number of likes of type "interest"
- LIKES_APPRECIATION: Number of likes of type "appreciation"
- LIKES_EMPATHY: Number of likes of type "empathy"

## Advanced Usage

You can connect to LinkedIn first and then use the connected object in your formulas:

```python
from naas_drivers import linkedin

# Enter your LinkedIn cookies
LI_AT = "YOUR_COOKIE_LI_AT"  # Example: AQFAzQN_PLPR4wAAAXc-FCKmgiMit5FLdY1af3-2
JSESSIONID = "YOUR_COOKIE_JSESSIONID"  # Example: ajax:8379907400220387585

# Connect to LinkedIn
LK = linkedin.connect(LI_AT, JSESSIONID)

# Get the last 20 messages
df = LK.get_messages()
```

For more information, updates, and the latest improvements to the LinkedIn driver, please refer to the [Awesome Notebooks GitHub page](https://github.com/jupyter-naas/awesome-notebooks/tree/master/LinkedIn).

