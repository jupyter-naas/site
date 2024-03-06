// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "️️Universal Data & AI Platform",
  tagline:
    "Naas is an open alternative to ChatGPT that you can customize to your own needs. It integrates analytics, automation an AI into your workflows thanks to low-code templates and the best generative AI models.",
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
          routeBasePath: '/', // Add this line to serve docs from the base URL
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
      announcementBar: {
        id: 'support_us',
       content:
        " 🚀 We are building an alternative to AGI: ABI, your Artificial Business Intelligence,<a target='_blank' rel='noopener noreferrer' href=''> get early access</a>,",
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
      },
      navbar: {
        style: "dark",
        title: "",
        // For the scrollbar to be sticky or hide while scrolled down
        // hideOnScroll: true,
        logo: {
          alt: "Naas",
          src: "/img/naas.png",
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
            to: "platform/introduction",
            position: "right",
            label: `Docs`,
          },
          // {
          //   to: "docs/category/platform/introduction",
          //   position: "right",
          //   label: `Features`,
          // },
          // {
          //   to: "docs/solutions/introduction",
          //   position: "right",
          //   label: `Solutions`,
          // },
          // {
          //   to: "docs/developers/overview",
          //   position: "right",
          //   label: `Developers`,
          // },
          // {
          //   to: "docs/category/community",
          //   position: "right",
          //   label: `Community`,
          // },
          {
            to: "https://leandata.substack.com/",
            label: `Blog`,
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value: `<a href="https://naas.ai/auth/signin"><button>Sign in</button><a>`,
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Safety",
            items: [
              {
                label: "General Instructions",
                to: "safety/general-instructions",
              },
              {
                label: "Product Warnings",
                to: "safety/product-warnings",
              },
              {
                label: "Working Environment",
                to: "safety/working-environment",
              },
            ],
          },
          {
            title: "Platform Overview",
            items: [
              {
                label: "Introduction",
                to: "platform/introduction",
              },
              {
                label: "Frameworks",
                to: "platform/frameworks",
              },
              {
                label: "Key Features",
                to: "platform/key-features",
              },
              {
                label: "Components",
                to: "platform/platform-components",
              },
            ],
          },
          {
            title: "Usage",
            items: [
              {
                label: "General Principles",
                href: "usage/general-principles",
              },
              {
                label: "Foundation AI Models",
                href: "usage/foundation-ai-models",
              },
              {
                label: "AIA: Personal AI Assistant",
                href: "usage/aia-personal-ai-assistant",
              },
              {
                label: "ABI: Mixture of Assistants",
                href: "abi-mixture-of-asssitants",
              },
              {
                label: "Custom Assistants",
                href: "usage/custom-ai-assistants",
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
                label: "Notebook Templates",
                href: "docs/category/drivers",
              },
              {
                label: "Build Data & AI Products",
                href: "docs/developers/jobs/space",
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
                label: "Build Pipelines",
                href: "docs/developers/jobs/pipeline",
              },
              {
                label: "Manage Secrets",
                href: "docs/developers/jobs/secret",
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
                href: "https://github.com/orgs/jupyter-naas/projects/12/views/2",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "Book a call",
                href: "https://calendly.com/jeremyravenel",
              },
              {
                label: "Enterprise Plan",
                href: "https://share.hsforms.com/11Ie8odLzQdO6ggAtrXFcTg1h10o",
              },
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
                label: "Team",
                href: "https://github.com/orgs/jupyter-naas/teams",
              },
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