---
sidebar_position: 1
---

# FAQ

### The Basics

#### What is Naas?

Naas, standing for "Notebook as a Service," is an open-source data product development platform project managed by NaasAI Inc. It empowers users to use Jupyter notebooks templates to create data & AI products. 
 
Naas is made of 5 layers: 
- Templates: a catalog of notebook templates to be used as building blocks to create data & AI products
- Drivers: a Python low-code function library to simplify the connection and interactions to third-party tools
- Jobs: a Python low-code function library to simplifiy all the devops related tasks when it comes to build data & AI products
- Data Product Workflow: a procedure to ship data products to production 
- Workspace: a webapp to search for templates and distribute data & AI products in a ChatGPT-like interface, made for business use.

### Using Naas 

#### What sets Jupyter apart from Naas?

[Jupyter](https://jupyter.org/) is the open-source project that serves as the foundation for Naas. Naas enhances the Jupyter experience by allowing users to use and share Jupyter notebooks without needing to download, install, or run anything. Naas adds micro-services to Jupyter notebooks/Lab instances, such as:

- Scheduling
- Asset sharing
- Webhooks
- Notifications
- Secret keys

Naas also simplifies Python scripting with low-code drivers through a Python library called [Naas drivers](https://pypi.org/project/naas-drivers/), available on Pypi.org. For those with little or no Python knowledge, Naas provides a starting point for data projects with templates from the [Naas awesome-notebooks](https://github.com/jupyter-naas/awesome-notebooks) library, which is fully open-source and accessible on Github.

### Resource Limits 

#### Is Naas free to use?

Yes, Naas offers a Free Plan that provides all users with 100 credits per month.

#### How does the credit system work?

Naas resources are not unlimited. To provide free resources for product trials or hobbyist use, Naas offers [credit plans](https://www.naas.ai/pricing) for computing power requirements that exceed 100 credits per month.

#### How can I use my credits?

Naas provides access to jobs divided into 6 categories:

- **LLM chats**: Number of tokens sent to a language model inside the Naas Chat
- **Notebook uptime**: Time spent on "open" Notebooks (notebooks connected to a kernel)
- **Scheduler runtime**: Time a scheduler spends to run your notebook when you are not around
- **Asset sharing**: When you expose an asset to the public, a credit is debited every time someone accesses it
- **Webhook/API calls**: When you connect a webhook to a third-party service that will then update your Naas notebooks
- **Notifications**: Number of messages sent per recipient

#### If I leave my Notebook open, will I use my credits?

No, if your Notebook is inactive for more than 15 minutes, we will shut it down for you, and you will not use more credits.

#### Will my Naas Jobs be interrupted with the Naas Free plan?

Yes, under the Naas Free plan, your Naas scheduler and other jobs will be halted every 72 hours. This means you'll need to reset them or consider upgrading to the Naas Professional plan for uninterrupted service.

#### How can I check my credit balance?

You can access this information in you Naas Account section.
If you have been using Naas during the current month, you will receive a daily email summarizing your actions, your credit consumption, and your remaining balance. Detailed information is also provided in an attached file.

#### What happens when I run out of credits?

We will notify you when you reach 80% of your credit limit. Once you exhaust your credits, your actions will be saved but frozen. To resume them, you will need to acquire more credits.

#### How can I get more credits?

Visit [https://www.naas.ai/pricing](https://www.naas.ai/pricing) and choose the plan that best fits your needs. For assistance, feel free to contact us:

- Email: [support@naas.ai](mailto:hello@naas.ai)
- Call: +33 6 85 25 69 97

### Additional Questions

#### What browsers are supported?

Naas is compatible with most major browsers and is thoroughly tested with the latest versions of Chrome, Firefox, and Safari.

#### Does Naas support other programming languages?

Naas primarily supports Python and its ecosystem of third-party tools. We're aware of the interest in support for other Jupyter kernels (e.g., R or Scala) and aim to accommodate these in the future. Please email us at [support@naas.ai](mailto:support@naas.ai) if you have such requirements.

#### Who do I contact if I find a bug or have a question?

Open a notebook in Naas Labs, then run a cell with 'naas.open_help()'.
#### I'm interested in Naas but don't know how to use Notebooks. What should I do?

No problem! We've created a training program tailored to your level and goals. We'll tackle your data project together. To discuss it, please fill out this [Project Form](https://form.typeform.com/to/GjbalQ7R) form and we will come back to you.

#### Can Naas be used in a company?

Absolutely! Naas can become your best ally to scale your data &AI operations and maintain costs at an acceptable level. This is why we created this tool. Be sure that Naas will support initiatives or launch of any ambitious data-driven strategy, simply [Book a meeting](https://calendly.com/jeremyravenel) and let's talk. 