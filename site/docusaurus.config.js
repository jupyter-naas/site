// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        disableSwitch: true,
      },
      announcementBar: {
        id: 'support_us',
        content:
          "🚨 This website is under development! <a target='_blank' rel='noopener noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSdJuyRdcQ7MlJGzDohRYx7IzvbmcvgIuilDLsLUi7voYiE3CA/viewform'>Become an Alpha Naas Member</a> and get early access to the platform.",
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
          alt: "Naas Documentation",
          src: "https://landen.imgix.net/jtci2pxwjczr/assets/5ice39g4.png?w=186",
        },
        items: [
          {
            type: "dropdown",
            label: "How It Works",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Get Started",
                docId: "get-started/introduction",
              },
              {
                type: "doc",
                label: "Ecosystem",
                docId: "ecosystem/jobs/scheduler",
              },
              {
                type: "doc",
                label: "Platform",
                docId: "platform/search-catalog-template-library",
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
                label: "Engines & Plugins",
                docId: "solutions/sales-engine",
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
                docId: "solutions/operations-engine",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Resources & Support",
            position: "left",
            items: [
              {
                to: "/blog",
                label: "Blog",
              },
              {
                type: "doc",
                label: "Naas University",
                docId: "solutions/operations-engine",
              },
              {
                type: "doc",
                label: "Open Source Community",
                docId: "solutions/operations-engine",
              },
              {
                type: "doc",
                label: "Customer Stories",
                docId: "solutions/operations-engine",
              },
              {
                type: "doc",
                label: "Join our Slack",
                docId: "solutions/operations-engine",
              },
              {
                type: "doc",
                label: "Contact Support",
                docId: "solutions/operations-engine",
              },
            ],
          },
          {
            href: "/pricing",
            label: "Pricing",
            position: "left",
          },
          {
            href: "https://workspace.naas.ai/",
            position: "right",
            label: `Search`,
          },
          {
            type: "html",
            position: "right",
            value: `<a href="https://workspace.naas.ai/auth/login" target="_blank"><button>Sign in</button><a>`,
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Get Started',
                href: 'docs/get-started/introduction'
              },
              {
                label: 'Ecosystem',
                href: 'docs/category/ecosystem'
              },
              {
                label: 'Platform',
                href: 'docs/category/platform'
              },
              {
                label: 'Solutions',
                href: 'docs/category/solutions'
              },
            ]
          },
          {
            title: 'Commmunity',
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
        theme: darkCodeTheme,
      },
    }),
};

module.exports = config;
