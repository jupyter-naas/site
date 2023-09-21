---
sidebar_position: 2
---

# Growth Marketing
---
Unlock the power of growth marketing to generate a steady stream of qualified contacts.
:::tip

We're in the early alpha stage, this page is constantly evolving, book a call with us to learn more.

:::

![Growth](./img/growth.png)


## Context 
The Growth Engine aggregates all interactions, from individuals or companies, related to your company's content or any signal pertinent to your business. It aids in identifying your ideal customers by utilizing AI-powered summarization of your interactions for increased accuracy. 

Furthermore, it ensures that your content strategy is not only efficient in terms of quantitative metrics but also effectively targets your audience on a qualitative level.

## Demo

Experience the capabilities of the Growth Engine with our self-service demo. Go to your Naas account, click on the launchpad next to your profile picture, and hit the "Growth Engine" button to explore its features and get a feel for its use. The engine is still in its early stages but as we use it for ourselves, we continuously add new features and enhancements to further empower your growth marketing process.

## Benefits

### Social Media Listening and Analytics
Monitor social media platforms for mentions, trends, and conversations relevant to your industry, helping you identify potential leads and influencers.

### AI-Powered Lead Scoring
Utilize AI algorithms to score and prioritize leads, ensuring that your sales team focuses on the most promising opportunities.

### Network Expansion Strategies
Receive AI-driven recommendations for expanding your network and increasing your total addressable market through targeted outreach and engagement.
Use AI to analyze various data points and provide recommendations on how to expand your network and increase your total addressable market. This include recommendations on who to connect with, what type of outreach to do, and what kind of engagement strategies to use.

## Features
### Chat with Your Growth Agent

You can interact with your growth agent to interact with your network and leads. This agent can assist you in crafting a series of messages and action items, fostering new connections between you and individuals within your network.

### Receive Automated Email Reports

You will receive an email report detailing your daily or weekly network growth. This report, featuring performance graphs and lead analysis will help you understand how well you have performed over the month. You can customize this report and add other insights to meet your specific needs.

### Extract Interactions from LinkedIn Content

This feature enables you to consistently gather interactions, such as comments, likes, and shares, from a list of posts. This allows you to build a comprehensive database of potential leads. Note: You need to feed the list of post URLs into the LinkedIn post extractor.

### Identify Targets from LinkedIn Interactions and Sync to CRM

Designed to identify potential targets from those who have interacted with you based on your Ideal Customer Profile (ICP), this feature then sends these targets to your CRM.

### Transfer LinkedIn Interactions to CRM Notes

This feature is designed to record LinkedIn interactions within your CRM notes.

### Sync LinkedIn Conversations with CRM

This feature retrieves and synchronizes all conversations with potential targets on LinkedIn and transfers them to your CRM.

### Enrich Leads with LinkedIn Data

Utilize this feature to deepen your understanding of your leads by supplementing their profiles with information from LinkedIn. This includes details about the lead's identity, network, contact information, and all direct and indirect interactions you've had with them.

### Perform Data & AI Lead Scoring

This feature conducts lead scoring based on all available information in your CRM.

### Create Action Items to Maximize Opportunities

Based on scoring and lead activity (emails, meetings, interactions, messages on LinkedIn, etc.), this feature allows you to create action items to effectively plan your next steps.

### Add Targets to CRM (Coming Soon)

Use the command from Naas Chat to add your target, specifying the necessary details.

### Sync LinkedIn Profile Connections with CRM (Coming Soon)

This upcoming feature will allow you to extract your profile connections, identify potential leads, and synchronize them with your CRM.

### Sync LinkedIn Company Followers with CRM (Coming Soon)

This forthcoming feature will enable you to extract and synchronize your company's LinkedIn followers with your CRM.

## Data Model

**SOCIAL_MEDIA_LISTENING**

Dataset

| MONITOR ID | KEYWORD | PLATFORM | AUTHOR | DATE | TIME | POST CONTENT | LIKES | COMMENTS | SHARES | AUTHOR FOLLOWERS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | #FY2023 | Twitter | User1 | 5/24/2023 | 6:00 | "Excited for the #FY2023 strategy" | 20 | 5 | 2 | 2000 |
| 2 | #Strategy | LinkedIn | User2 | 5/24/2023 | 7:00 | "Implementing our #Strategy for FY2023" | 30 | 10 | 5 | 1500 |
| 3 | #Launch | Facebook | User3 | 5/24/2023 | 8:00 | "Looking forward to the #Launch of the new product" | 100 | 20 | 10 | 5000 |
| 4 | #NewProduct | Instagram | User4 | 5/24/2023 | 9:00 | "Can't wait for the #NewProduct launch!" | 200 | 50 | 20 | 10000 |

Schema

```jsx
{
  "type": "object",
  "properties": {
    "MONITOR ID": {
      "type": "integer",
      "description": "A unique identifier for the monitored post."
    },
    "KEYWORD": {
      "type": "string",
      "description": "The keyword that the post was found under."
    },
    "PLATFORM": {
      "type": "string",
      "description": "The social media platform where the post was found."
    },
    "AUTHOR": {
      "type": "string",
      "description": "The author of the post."
    },
    "DATE": {
      "type": "string",
      "description": "The date when the post was made."
    },
    "TIME": {
      "type": "string",
      "description": "The time when the post was made."
    },
    "POST CONTENT": {
      "type": "string",
      "description": "The content of the post."
    },
    "LIKES": {
      "type": "integer",
      "description": "The number of likes the post received."
    },
    "COMMENTS": {
      "type": "integer",
      "description": "The number of comments the post received."
    },
    "SHARES": {
      "type": "integer",
      "description": "The number of shares the post received."
    },
    "AUTHOR FOLLOWERS": {
      "type": "integer",
      "description": "The number of followers the author has."
    }
  },
  "required": ["MONITOR ID", "KEYWORD", "PLATFORM", "AUTHOR", "DATE", "TIME", "POST CONTENT"]
}
```


**LEAD_SCORING**

Dataset

| STRATEGY ID | TARGET AUDIENCE | POTENTIAL CONTACTS | RECOMMENDED OUTREACH | EXPECTED IMPACT | SUCCESS METRIC |
| --- | --- | --- | --- | --- | --- |
| 1 | Business Leaders | John Doe (CEO, Company A), Jane Smith (CFO, Company B) | LinkedIn connection request followed by personalized message | Increase in B2B partnerships | Number of new partnerships |
| 2 | General Public | Facebook users interested in #NewProduct | Sponsored Facebook post promoting #NewProduct | Increase in product awareness | Number of product enquiries |
| 3 | Customers | Email subscribers who have purchased in the last 6 months | Email campaign about new service update | Increase in service usage | Number of users of the new service |
| 4 | Sustainability Advocates | Twitter users who frequently post about #Sustainability | Twitter engagement (likes, comments, retweets) on #Sustainability posts | Increase in brand reputation | Increase in positive brand mentions |

Schema

```jsx
{
  "type": "object",
  "properties": {
    "STRATEGY ID": {
      "type": "integer",
      "description": "A unique identifier for the strategy."
    },
    "TARGET AUDIENCE": {
      "type": "string",
      "description": "The audience that the strategy targets."
    },
    "POTENTIAL CONTACTS": {
      "type": "string",
      "description": "Potential contacts for the outreach."
    },
    "RECOMMENDED OUTREACH": {
      "type": "string",
      "description": "The recommended outreach method."
    },
    "EXPECTED IMPACT": {
      "type": "string",
      "description": "The expected impact of the strategy."
    },
    "SUCCESS METRIC": {
      "type": "string",
      "description": "The metric to measure the success of the strategy."
    }
  },
  "required": ["STRATEGY ID", "TARGET AUDIENCE", "POTENTIAL CONTACTS", "RECOMMENDED OUTREACH", "EXPECTED IMPACT", "SUCCESS METRIC"]
}
```

**NETWORK_EXPANSION**

Dataset

| LEAD ID | NAME | COMPANY | POSITION | INTERACTION HISTORY | PURCHASE HISTORY | WEB ACTIVITY | LEAD SCORE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | John Doe | Company A | CEO | Attended webinar, Downloaded eBook | Previous purchase of Product X | Visited pricing page 3 times in the past week | 85 |
| 2 | Jane Smith | Company B | CFO | Email exchange with sales rep, Attended product demo | No previous purchases | Visited blog posts related to Product Y | 70 |
| 3 | Bob Johnson | Company C | CTO | Follows company on LinkedIn, Liked several company posts | Previous purchase of Product Z | Regularly visits company blog | 65 |
| 4 | Mary Davis | Company D | COO | Downloaded whitepaper, Attended webinar | No previous purchases | Visited FAQ page multiple times | 60 |

Schema

```jsx
{
  "type": "object",
  "properties": {
    "LEAD ID": {
      "type": "integer",
      "description": "A unique identifier for the lead."
    },
    "NAME": {
      "type": "string",
      "description": "The name of the lead."
    },
    "COMPANY": {
      "type": "string",
      "description": "The company that the lead is associated with."
    },
    "POSITION": {
      "type": "string",
      "description": "The position that the lead holds at their company."
    },
    "INTERACTION HISTORY": {
      "type": "string",
      "description": "The history of interactions between the lead and your company."
    },
    "PURCHASE HISTORY": {
      "type": "string",
      "description": "The lead's history of purchases from your company."
    },
    "WEB ACTIVITY": {
      "type": "string",
      "description": "The lead's activity on your company's website."
    },
    "LEAD SCORE": {
      "type": "integer",
      "description": "The score assigned to the lead by the AI algorithm."
    }
  },
  "required": ["LEAD ID", "NAME", "COMPANY", "POSITION", "INTERACTION HISTORY", "PURCHASE HISTORY", "WEB ACTIVITY", "LEAD SCORE"]
}
```
## How to Contribute?

**Collaborate with Us on our Public GitHub Repo**

Accelerate development by working with us on issues in our public GitHub repository: https://github.com/jupyter-naas/engine-growth

**Submit Your Ideas and Improvements**

[Create GitHub Issues](https://github.com/jupyter-naas/engine-growth/issues/new) or Participate in GitHub discussions with fellow community members. Your ideas and suggestions for improvements are always welcome.

**Talk About Naas On Social Media**

If you like what we are doing, share your story and case studies on social platforms to inspire others in the community. Your experiences can provide valuable insights for others.