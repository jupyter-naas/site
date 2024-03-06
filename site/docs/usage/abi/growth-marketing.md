---
sidebar_position: 4
---

# 🚀 Growth Marketing
---

## Purpose
Analyze content engagement, identifying potential leads through social media engagement, scoring interactions, and enriching profiles for targeted sales outreach.

## Scope
- Extract people who liked or commented on your LinkedIn posts
- Track engagement by cohorts to see how many people engage with your content over weeks
- Enrich people with organization, seniority level and department with AI prompt or LinkedIn profile page information
- Enrich organization with LinkedIn company page information
- Gather interactions by people and create interaction score
- Connect with marketing qualified leads with personalized messaging

## Responsibilities
- **Chief Marketing Officer (CMO):** Use growth data to understand if the audience aligns with the company's branding and marketing strategy.
- **Chief Revenue Officer (CRO):** Use growth data to understand if the audience aligns with the company's targets and sales strategy.
- **Marketing Teams:** Analyze growth patterns, and segment audience profiles.
- **Sales Teams:** Utilize enriched data for lead generation and sales strategy development.
- **Data Analysts:** Support data analysis and insights generation for targeted marketing efforts.

## Metrics
- **Growth Rate:** People continuing to interact with your content across weeks.
- **Retention Rates:** Measures sustained user engagement over weeks (Cohorts analysis)
- **Interaction Scores:** Totals interactions including likes and comments.
- **Seniority Distribution:** Indicates seniority distribution across contacts.
- **Department Distribution:** Indicates business departments distribution across contacts.
- **Organization Industry Distribution:** Indicates industry distribution across organizations.
- **Organization Staff Range Ratio:** Reflects staff distribution across organizations.
- **Organization Location:** Identifies geographical distribution of organizations.
- **MQL & SQL Evolution:** Monitors progression of Marketing and Sales Qualified Leads.
- **Time from MQL to SQL:** Calculates duration for a lead to progress from Marketing to Sales Qualified.

## Inputs
- **Posts URL:** List of posts URLs extracted from POSTS table
- **Email System:** List of recipients for distributing daily reports to stakeholders are informed of content performance metrics and insights.
- **Prompt sales messagings:** Guidelines for creating initial message options based on customer interactions.

## Outputs
- **INTERACTIONS table:** Logs audience interactions with content.
- **GROWTH table:** Tracks audience growth and behavior patterns across weeks.
- **PEOPLE table:** Profiles individual audience members.
- **ORGANIZATIONS table:** Organizations extracted from people.
- **CONTACTS table:** Gather PEOPLE and ORGANIZATIONS table and create messaging options to engage with Marketing Qualified Leads.
- **Growth Assistant Report:** Use the tables to calculate metrics and generate assets like charts and files for ad-hoc analytics (csv, png, html).
- **Growth Assistant Plugin:** Use the report assets and integrate them into the chat and the search engine for end-user consumption.

## Workflows
### Extraction, Scoring, and Growth
- **Interaction Extraction and Logging:** Capture and log interactions from social media content, including likes, and comments.
- **Scoring Mechanism:** Assign points to different types of interactions (likes: 1, comment: 3).
- **Growth Analysis:** Tracks audience growth and behavior patterns across weeks.

### Data Enrichment and Contact Management
- **People Enrichment:** Enrich contact profiles with additional details such as seniority, department, and company information, inferred from social media profiles and detailed interaction logs.
- **Organization Enrichment:** Enrich organizations with additional details such as industry, country, staff range, followers count, website URL, tagline, business description and more extracted from LinkedIn platform.
- **Contact Referential:** Aggregate PEOPLE and ORGANIZATION tables and identifies contact status: “Leads”, “Marketing Qualified Leads”, “Sales Qualified Leads”.

### Strategic Engagement and Personalization
- **Trigger-Based Outreach:** Set up triggers based on engagement scores to initiate personalized outreach to potential leads (interaction > 3 and company identified).
- **Personalized Messaging:** Utilize enriched profile data to craft personalized messages for sales outreach, addressing specific interests and engagement history.

## Customization
- CRM Person creation and enrichment
- CRM Organization creation and enrichment
- CRM Notes creation with interactions details linked to person

## Roadmap
- [x] January 2024: Get people who likes and comment your content on LinkedIn to the INTERACTIONS table.
- [ ] March 2024: Generate recommendation to improve audience and sales qualified leads based on content features.
- [ ] April 2024: Get people who share your content on LinkedIn to the INTERACTIONS table.
- [ ] May 2024: Extract interactions from YouTube videos.
- [ ] June to September 2024: Extract interactions on publications from Facebook, Instagram, TikTok.
