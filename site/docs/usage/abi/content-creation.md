---
sidebar_position: 3
---

# 📲 Content Creation
---

## Purpose
Streamline the generation and distribution of content that aligns with the user's or business's brand voice and audience engagement goals.

## Scope
- Extract saved posts and articles from a personal page to generate ideas.
- Extract LinkedIn posts performance from company and personal page.
- Track reach of posts daily

## Responsibilities
- **Chief Marketing Officer (CMO):** Use content performance data to understand how well the content aligns with the company's branding and marketing strategy.
- **Marketing Teams:** Manage the content lifecycle and optimize strategies based on analytics.
- **Content Creators:** Craft and refine ideas into engaging content.
- **Data Analysts:** Analyze content performance to inform future strategies.

## Inputs
- **LinkedIn:** Profile or Company page URL, for data collection and idea generation 
- **Buffer:** Account for scheduling and distributing content across multiple social media platforms
- **Email System:** List of recipients for distributing daily reports to stakeholders are informed of content performance metrics and insights.


## Outputs
- **[IDEAS](https://docs.google.com/spreadsheets/d/1wuG6t4fzVKra0pTm6NzE1RsiT_NOIPPjwRN3niBQ2lY/edit#gid=1020690952) table:** Capture ideas from various sources like LinkedIn posts, voice memos or any notes.
- **[POSTS](https://docs.google.com/spreadsheets/d/1wuG6t4fzVKra0pTm6NzE1RsiT_NOIPPjwRN3niBQ2lY/edit#gid=1319953511) table:** Tracks and understands the content published on social media.
- **Content Assistant Report:** use the tables to calculate metrics and generate assets like charts and files for ad-hoc analytics (csv, png, html)
- **Content Assistant Plugin:** use the report assets and integrate them into the chat and the search engine for end-user consumption.


## Workflows

### Generate and Manage Ideas
- **Capture:** Save Posts on LinkedIn to feed the content IDEAS table.
- **Brainstorm:** Engage with your content assistant to brainstorm and refine ideas and generate posts draft.

### Convert Ideas into Actionable Content
- **Transition from Ideas to Post:** Use slash commands “Buffer_Send_text_to_idea” for sending an idea to Buffer, this idea can be then used inside Buffer to create different posts depending on the platform. 
- **Repurpose Posts on multiple platforms:** Buffer can also be used to reuse the idea to create posts on different social media platforms.

### Analyze Content Published	
- **Work with the POSTS Table:** Analyze content metrics in the POST table, including reach, interactions, engagement scores, key topics, tone, sentiment, targets.
- **Leverage Content Insights:** Use daily notifications and content assistant for strategic adjustments based on content performance analytics.

## Customization
- Follow posts from a given LinkedIn profile to generate ideas.
- Search relevant posts from keywords on LinkedIn to generate ideas.
- Generate ideas from OpenData tracker.
- Automatically repurpose successful posts 
- Send ideas and posts to Notion
- Create weekly/monthly performance reports in slides and email notifications. 

## Roadmap
- [x] January 2024 - Get LinekdIn posts stats from Profile and Company page in POSTS table
- [ ] February 2024 - Add tones, topics, sentiment, CTA to POSTS table
- [ ] March 2024 - Get saved posts and articles to generate ideas 
- [ ] April 2024 - Get voice memos from iCloud to generate ideas
- [ ] May 2024 - Get YouTube videos transcript to generate ideas / Follow YouTube publications stats 
- [ ] June to September 2024 - Get content from Facebook, Instagram, TikTok 
