// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "⚡️ The Universal Data & AI Platform",
  tagline:
    "Experience the future of AI and data with Naas, your gateway to accessible, intuitive data product building.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://site.naas.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jupypter-naas", // Usually your GitHub org/user name.
  projectName: "site", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/jupyter-naas/site",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/jupyter-naas/site",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      fontFamily: {
        sans: ['San Francisco', 'Arial', 'sans-serif']},
      // Replace with your project's social card
      image: "img/how-it-works.png",
      colorMode: {
        disableSwitch: true,
      },
      // announcementBar: {
      //   id: 'support_us',
       //  content:
        //   "<a target='_blank' rel='noopener noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSdJuyRdcQ7MlJGzDohRYx7IzvbmcvgIuilDLsLUi7voYiE3CA/viewform'>Get early access to Naas 2.0</a>, a redesigned Workspace with built-in Google Search and ChatGPT alternative to create your own data & AI products.",
        // backgroundColor: '#fafbfc',
        // textColor: '#091E42',
        // isCloseable: false,
      // },
      navbar: {
        style: "dark",
        title: "",
        // For the scrollbar to be sticky or hide while scrolled down
        // hideOnScroll: true,
        logo: {
          alt: "Naas",
          src: "https://landen.imgix.net/jtci2pxwjczr/assets/5ice39g4.png?w=186",
        },
        items: [
          {
            type: "dropdown",
            label: "Platform",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Overview",
                docId: "get-started/introduction",
              },
              {
                type: "doc",
                label: "Data & AI Templates Search",
                docId: "platform/search-catalog-template-library",
              },
              {
                type: "doc",
                label: "Universal Chat Interface",
                docId: "platform/aI-powered-chat",
              },
              {
                type: "doc",
                label: "Development Lab",
                docId: "platform/dev-environment",
              },
              {
                type: "doc",
                label: "Workflow Automation",
                docId: "platform/workflow-automation",
              },
              {
                type: "doc",
                label: "Analytics & Dashboarding",
                docId: "platform/analytics-dashboard-deployment",
              },
              {
                type: "doc",
                label: "Collaboration & Versionning",
                docId: "platform/collaboration-versionning",
              },
              {
                type: "doc",
                label: "Serverless computing",
                docId: "platform/scalable-computing",
              },
              {
                type: "doc",
                label: "Security Suite",
                docId: "platform/security-suite",
              },
              {
                type: "doc",
                label: "Admin Dashboard",
                docId: "platform/admin-dashboard",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Framework",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Overview",
                docId: "framework/overview",
              },
              {
                type: "doc",
                label: "Jobs",
                docId: "framework/jobs/scheduler",
              },
              {
                type: "doc",
                label: "Drivers",
                docId: "framework/drivers/airtable",
              },
              {
                type: "doc",
                label: "Templates",
                docId: "framework/templates",
              },
              {
                type: "doc",
                label: "Data Product Workflow",
                docId: "framework/delivery",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Solutions",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Overview",
                docId: "solutions/introduction",
              },
              {
                type: "doc",
                label: "Content Creation",
                docId: "solutions/content-engine",
              },
              {
                type: "doc",
                label: "Growth Marketing",
                docId: "solutions/growth-engine",
              },
              {
                type: "doc",
                label: "Sales Conversion",
                docId: "solutions/sales-engine",
              },
              {
                type: "doc",
                label: "Operations Efficiency",
                docId: "solutions/operations-engine",
              },
              {
                type: "doc",
                label: "Finance Management",
                docId: "solutions/finance-engine",
              },
              {
                type: "doc",
                label: "Open Data Intelligence",
                docId: "solutions/opendata-engine",
              },
              {
                type: "doc",
                label: "Expert Acceleration Program",
                docId: "solutions/expert-program",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Community",
            position: "left",
            items: [
              {
                href: "/blog/travis-and-naas",
                label: "Blog",
              },
              {
                type: "doc",
                label: "Contribute",
                docId: "contributing/how-to-contribute",
              },
              {
                label: "Guides & Tutorials",
                href: "https://www.youtube.com/c/naas-ai",
              },
              {
                label: "Join our Slack",
                href: "https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA",
              },
            ],
          },
          {
            href: "/pricing",
            label: "Pricing",
            position: "left",
          },
          {
            href: "https://calendly.com/jeremyravenel",
            position: "right",
            label: `Book a meeting`,
          },
          {
            href: "https://workspace.naas.ai/chat",
            position: "right",
            label: `MyChatGPT`,
          },
          {
            type: "html",
            position: "right",
            value: `<a href="https://workspace.naas.ai/" target="_blank"><button>Start for free</button><a>`,
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Universe',
            items: [
              {
                label: 'Overview',
                href: 'docs/get-started/introduction'
              },
              {
                label: 'Platform',
                href: 'docs/category/platform'
              },
              {
                label: 'Framework',
                href: 'docs/category/framework'
              },
              {
                label: 'Solutions',
                href: 'docs/category/solutions'
              },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join our Slack',
                href: 'https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-8udGv9TsAw9StcI8SB8eqw'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jupyter-naas'
              },
              {
                label: 'How to contribute?',
                href: 'docs/category/contributing'
              },
              {
                label: 'Roadmap',
                href: 'https://github.com/orgs/jupyter-naas/projects/10/views/13'
              },
            ]
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Teams',
                href: 'https://github.com/orgs/jupyter-naas/teams'
              },
              {
                label: 'Terms of Service',
                href: 'docs/policies/terms'
              },
              {
                label: 'Privacy',
                href: 'docs/policies/privacy'
              },
              {
                label: 'Contact support',
                href: 'https://form.typeform.com/to/aH1v5ync?typeform-source=www.naas.ai'
              },
              {
                label: 'Contact sales',
                href: 'https://form.typeform.com/to/GjbalQ7R'
              }
            ]
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/jupyter-naas'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/jupyternaas'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/naas-ai/'
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCKKG5hzjXXU_rRdHHWQ8JHQ'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="#" target="_blank" rel="noopener noreferrer">NaasAI</a>, Inc.`,
      },
      //   navbar: {
      //   items: [
      //     {
      //       type: 'html',
      //       position: 'right',
      //       value: `<a href="https://workspace.naas.ai/auth/login" target="_blank"><button>Sign in</button><a>`,
      //     },
      //   ],
      // },
      prism: {
        darkTheme: darkCodeTheme,
        defaultLanguage: 'python',
      },
    }),
};

module.exports = config;
