// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "️️⚡ The AI System  power your everyday business",
  tagline:
    "Naas is an open alternative to ChatGPT and its plugins store that you can customize to your own needs. It integrates analytics, automation an AI into your workflows thanks to low-code templates and the best generative AI models.",
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
  onBrokenMarkdownLinks: "ignore",

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
          // Remove this to remove the "sedit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jupyter-naas/site",
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
        sans: ["San Francisco", "Arial", "sans-serif"],
      },
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
// {
//   type: "dropdown",
//   label: "Platform",
//   position: "left",
//   items: [
//     {
//       type: "doc",
//       label: "Overview",
//       docId: "get-started/introduction",
//     },
//     {
//       type: "doc",
//       label: "Universal Chat Interface",
//       docId: "platform/aI-powered-chat",
//     },
//     ...
//   ],
// },
// {
//   type: "dropdown",
//   label: "Solutions",
//   position: "left",
//   items: [
//     {
//       type: "doc",
//       label: "Artificial Business Intelligence",
//       docId: "solutions/introduction",
//     },
//     ...
//   ],
// },
// {
//   type: "dropdown",
//   label: "Developers",
//   position: "left",
//   items: [
//     {
//       type: "doc",
//       label: "Quickstart",
//       docId: "developers/overview",
//     },
//     ...
//   ],
// },
// {
//   type: "dropdown",
//   label: "Resources",
//   position: "left",
//   items: [
//     {
//       href: "https://leandata.substack.com/",
//       label: "Blog",
//     },
//     ...
//   ],
// },
// {
//   href: "/pricing",
//   label: "Pricing",
//   position: "left",
// },
          {
            to: "https://naas.ai/search",
            position: "right",
            label: `Search`,
          },
          {
            to: "https://site.naas.ai/docs/get-started/introduction",
            position: "right",
            label: `Docs`,
          },
          {
            to: "https://calendly.com/jeremyravenel",
            label: `Book a call`,
            position: "right",
          },
          {
            to: "https://naas.ai/auth/signin",
            position: "right",
            label: `Sign in`,
          },
          {
            type: "html",
            position: "right",
            value: `<a href="https://bit.ly/3CFSumN" target="_blank"><button>Start for free</button><a>`,
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Overview",
            items: [
              {
                label: "Why Naas?",
                href: "docs/get-started/introduction",
              },
              {
                label: "Basic level",
                href: "docs/get-started/basic",
              },
              {
                label: "Intermediate level",
                href: "docs/get-started/intermediate",
              },
              {
                label: "Advanced level",
                href: "docs/get-started/advanced",
              },
              {
                label: "Pricing",
                href: "/pricing",
              },
            ],
          },
          {
            title: "Platform",
            items: [
              {
                label: "Overview",
                href: "docs/get-started/introduction",
              },
              {
                label: "Universal Chat Interface",
                href: "docs/platform/aI-powered-chat",
              },
              {
                label: "Data & AI Catalog Search",
                href: "docs/platform/search-catalog-template-library",
              },
              {
                label: "Chrome Extension",
                href: "docs/platform/chrome-extension",
              },
              {
                label: "Development Lab",
                href: "docs/platform/dev-environment",
              },
              {
                label: "Workflow Automation",
                href: "docs/platform/workflow-automation",
              },
              {
                label: "Analytics & Dashboarding",               
                href: "docs/platform/analytics-dashboard-deployment",
              },
              {
                label: "Collaboration & Versioning",               
                href: "docs/platform/collaboration-versioning",
              },
              {
                label: "Serverless Deployment",               
                href: "docs/platform/scalable-computing",
              },
              {
                label: "Security Suite",               
                href: "docs/platform/security-suite",
              },
              {
                label: "Account Administration",               
                href: "docs/platform/admin-dashboard",
              },
            ],
          },
          {
            title: "Solutions",
            items: [
              {
                label: "AI Character Building",
                href: "docs/solutions/introduction",
              },
              {
                label: "Artificial Business Intelligence",
                href: "docs/solutions/introduction",
              },
              {
                label: "Content Creation",
                href: "docs/solutions/content-engine",
              },
              {
                label: "Growth Marketing",
                href: "docs/solutions/growth-engine",
              },
              {
                label: "Sales Conversion",
                href: "docs/solutions/sales-engine",
              },
              {
                label: "Operations Efficiency",
                href: "docs/solutions/operations-engine",
              },
              {
                label: "Finance Management",
                href: "docs/solutions/finance-engine",
              },
              {
                label: "Open Data Intelligence",
                href: "docs/solutions/opendata-engine",
              },
              {
                label: "Expert Acceleration Program",
                href: "docs/solutions/opendata-engine",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Quickstart",
                href: "docs/developers/overview",
              },
              {
                label: "Development Server",
                href: "docs/developers/development",
              },
              {
                label: "Schedule Workflows",
                href: "docs/developers/jobs/scheduler",
              },
              {
                label: "Generate Assets",
                href: "docs/developers/jobs/asset",
              },
              {
                label: "Trigger Webhooks",
                href: "docs/developers/jobs/webhook",
              },
              {
                label: "Send Notifications",
                href: "docs/developers/jobs/notification",
              },
              {
                label: "Build Pipeliness",
                href: "docs/developers/jobs/pipeline",
              },
              {
                label: "Manage Secrets",
                href: "docs/developers/jobs/secret",
              },
              {
                label: "Publish Spaces",
                href: "docs/developers/jobs/space",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join our Slack",
                href: "https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-8udGv9TsAw9StcI8SB8eqw",
              },
              {
                label: "GitHub",
                href: "https://github.com/jupyter-naas",
              },
              {
                label: "How to contribute?",
                href: "docs/community/how-to-contribute",
              },
              {
                label: "Roadmap",
                href: "https://github.com/orgs/jupyter-naas/projects/10/views/13",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "Teams",
                href: "https://github.com/orgs/jupyter-naas/teams",
              },
              {
                label: "Terms of Service",
                href: "docs/policies/terms",
              },
              {
                label: "Privacy",
                href: "docs/policies/privacy",
              },
              {
                label: "Contact us",
                href: "https://calendly.com/jeremyravenel",
              },
            ],
          },
          {
            title: "Follow us",
            items: [
              {
                label: "Github",
                href: "https://github.com/jupyter-naas",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/jupyternaas",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/naas-ai/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCKKG5hzjXXU_rRdHHWQ8JHQ",
              },
            ],
          },
        ],
        copyright: `<br><br>Copyright © ${new Date().getFullYear()} <a href="#" target="_blank" rel="noopener noreferrer">NaasAI</a>, Inc.`,
      },
      //   navbar: {
      //   items: [
      //     {
      //       type: 'html',
      //       position: 'right',
      //       value: `<a href="https://www.naas.ai/auth/login" target="_blank"><button>Sign in</button><a>`,
      //     },
      //   ],
      // },
      prism: {
        darkTheme: darkCodeTheme,
        defaultLanguage: "python",
      },
    }),
};

module.exports = config;
