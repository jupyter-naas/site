---
sidebar_position: 5
---

# ⚡️ Sales Conversion
---

## Purpose
Manage and facilitate the sales process from lead generation to deal closure.

## Scope
- Convert Sales Qualified Leads into deals applying ICP filters
- Track newly created opportunities daily
- Initiate follow-up activities for deal pipeline management
- Monitor weekly follow-up activities by type (Connect, First Meeting, Second Meeting, Closing)

## Responsibilities
- **Chief Revenue Officer (CRO):** Follow opportunities and sales pipeline.
- **Sales Teams:** Leverage interactions data to engage with Sales Qualified Leads and generate new opportunities.
- **CRM Managers:** Ensure accurate data flow and integration within sales tools and platforms.
- **Data Analysts:** Analyze sales data to provide insights for improving sales strategies.

## Metrics
- **Response Rate to First Message:** Percentage of initial sales messages that receive a reply, indicating the effectiveness of the initial contact approach.
- **Interest Rate After First Message Reply:** Percentage of replies that express interest in proceeding further, assessing the quality and engagement level of the initial interaction.
- **Sales conversion rate:** Percentage of opportunities that convert into actual sales, reflecting the efficiency of the sales process.
- **Sales cycle lengths:** Average time taken to complete a sales process from first contact to closing the deal, showing the overall efficiency of the sales operations.

## Inputs
- Sequence of tasks from Opportunity to Closing with associated pace
  - First contact: 26/02/2024
  - Meeting 1: +10 days
  - Meeting 2: +10 days
  - Meeting 3: +10 days
  - Closing date: First contact + 30 days
- Emails: List of email addresses to received daily notifications
- People seniority, People Department, Organization Staff Range, etc.: List of columns from CONTACTS table to apply filter on. It could be to include or exclude values

## Outputs
- **DEALS table:** Manage sales opportunities.
- **ACTIVITIES table:** Manage follow-up activities link to deals.
- **Sales Assistant Report:** Use the tables to calculate metrics and generate assets like charts and files for ad-hoc analytics (csv, png, html).
- **Sales Assistant Plugin:** Use the report assets and integrate them into the chat and the search engine for end-user consumption.

## Workflows
### Sales Opportunity Creation
- **Create opportunity:** Trigger deals based on ICP filters from CONTACTS table and create deals.
- **CRM Integration (Custom):** Integrate new deals into your CRM system. Available for HubSpot and Pipedrive.
### Task and Follow-up Coordination
- **Automated Task Creation:** Automatically generate tasks for each stage of the sales process (e.g., follow-up calls, meeting scheduling) upon the creation of a new opportunity. Use AI or rules-based triggers based on interactions data and sales stage progress.
- **Dynamic Task Prioritization:** Use interactions score for prioritizing tasks based on urgency and potential impact on the sales pipeline. This system should allow sales teams to focus on high-value activities and opportunities.
- **Personalized Follow-up Strategies:** Develop personalized follow-up strategies for different segments of Sales Qualified Leads, based on data insights. Tailor communication style, content, and timing to increase engagement rates.

## Customization
- CRM Deal creation
- CRM Activities/tasks creation with first connection message
- Add LinkedIn conversations to CRM

## Roadmap
- March 2024 - Add HubSpot integration to abi core model
- March 2024 - Add Pipedrive integration to abi core model
- April 2024 - Synchronize conversations on LinkedIn to HubSpot
- April 2024 - Synchronize conversations on LinkedIn to Pipedrive
- June 2024 - Integrated minutes of meetings to deal notes in HubSpot and Pipedrive from Operation Assistant.
