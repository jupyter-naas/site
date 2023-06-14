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
            label: "How it works",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Get started",
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
            type: "html",
            position: "right",
            value: `<a href="https://workspace.naas.ai/login" target="_blank"><button>Sign in</button><a>`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/jupyter-naas/naas",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NaasAI, Inc.`,
      },
      //   navbar: {
      //   items: [
      //     {
      //       type: 'html',
      //       position: 'right',
      //       value: `<a href="https://workspace.naas.ai/login" target="_blank"><button>Sign in</button><a>`,
      //     },
      //   ],
      // },
      prism: {
        theme: darkCodeTheme,
      },
    }),
};

module.exports = config;
