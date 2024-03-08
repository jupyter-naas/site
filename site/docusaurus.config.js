// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");

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

  onBrokenLinks: "ignore",
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
      image: "img/landing-screensaver.gif",
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        style: "dark",
        title: "",
        // For the scrollbar to be sticky or hide while scrolled down
        // hideOnScroll: true,
        logo: {
          alt: "Naas",
          href: "https://naas.ai",
          src: "/img/naas.png",
        },
        items: [
          {
            to: "https://naas.ai/chat",
            position: "left",
            label: `Platform`,
          },
          {
            to: "platform/introduction",
            position: "left",
            label: `Docs`,
          },
          {
            to: "https://api.naas.ai/redoc#tag/AI-Model-API",
            position: "left",
            label: `API`,
          },
          {
            to: "https://calendly.com/jeremyravenel/15-min-call",
            position: "right",
            label: `Request a demo`,
          },
          {
            to: "https://leandata.substack.com/",
            label: `Blog`,
            position: "right",
          },
          {
            to: "https://naas.ai/auth/signin",
            label: "Sign In",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Mission",
            items: [
              {
                label: "Building Trust in AI",
                to: "safety/general-instructions",
              },
              {
                label: "Mapping Business Knowledge",
                to: "safety/product-warnings",
              },
              {
                label: "Unlocking Monetization",
                to: "safety/working-environment",
              },
            ],
          },
          {
            title: "Platform",
            items: [
              {
                label: "Architecture",
                to: "platform/introduction",
              },
              {
                label: "Frameworks",
                to: "platform/frameworks",
              },
              {
                label: "Features",
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
                label: "Generative AI Models",
                to: "usage/foundation-ai-models",
              },
              {
                label: "AIA: Personal AI Assistant",
                to: "usage/aia-personal-ai-assistant",
              },
              {
                label: "ABI: Mixture of Assistants",
                to: "usage/abi-mixture-of-assistants",
              },
              {
                label: "Custom Assistants",
                to: "usage/custom-ai-assistants",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Quickstart",
                href: "resources/developers/overview",
              },
              {
                label: "Notebook Templates",
                href: "resources/developers/templates",
              },
              {
                label: "Build Data & AI Products",
                href: "resources/developers/jobs/space",
              },
              {
                label: "Development Environment",
                href: "resources/developers/development",
              },
              {
                label: "Schedule Workflows",
                href: "resources/developers/jobs/scheduler",
              },
              {
                label: "Generate Assets",
                href: "resources/developers/jobs/asset",
              },
              {
                label: "Trigger Webhooks",
                href: "resources/developers/jobs/webhook",
              },
              {
                label: "Send Notifications",
                href: "resources/developers/jobs/notification",
              },
              {
                label: "Build Pipelines",
                href: "resources/developers/jobs/pipeline",
              },
              {
                label: "Manage Secrets",
                href: "resources/developers/jobs/secret",
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
                href: "resources/community/how-to-contribute",
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
                label: "Request a demo",
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
    }),
};

module.exports = config;