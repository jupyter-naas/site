import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '08a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '86b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd3a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f65'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '885'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd8b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '3b2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'fdb'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '88f'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4ac'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '807'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f05'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '159'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'a37'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '862'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '57b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '8d3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'bc8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b6b'),
    routes: [
      {
        path: '/docs/api-reference/asset',
        component: ComponentCreator('/docs/api-reference/asset', '2be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-reference/notification',
        component: ComponentCreator('/docs/api-reference/notification', 'a03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-reference/pipeline',
        component: ComponentCreator('/docs/api-reference/pipeline', '0ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-reference/scheduler',
        component: ComponentCreator('/docs/api-reference/scheduler', '282'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-reference/secret',
        component: ComponentCreator('/docs/api-reference/secret', 'de1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-reference/space',
        component: ComponentCreator('/docs/api-reference/space', '4be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-reference/webhook',
        component: ComponentCreator('/docs/api-reference/webhook', '3ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/api-reference',
        component: ComponentCreator('/docs/category/api-reference', '6be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/connections',
        component: ComponentCreator('/docs/category/connections', '2f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/contributing',
        component: ComponentCreator('/docs/category/contributing', '9f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/platform',
        component: ComponentCreator('/docs/category/platform', '7cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/release-notes',
        component: ComponentCreator('/docs/category/release-notes', 'e95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/troubleshooting',
        component: ComponentCreator('/docs/category/troubleshooting', '819'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorials-and-examples',
        component: ComponentCreator('/docs/category/tutorials-and-examples', '807'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/airtable',
        component: ComponentCreator('/docs/connections/airtable', '2fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/awesome-notebooks',
        component: ComponentCreator('/docs/connections/awesome-notebooks', 'c04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/bubble',
        component: ComponentCreator('/docs/connections/bubble', '13b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/canny',
        component: ComponentCreator('/docs/connections/canny', '859'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/cityfalcon',
        component: ComponentCreator('/docs/connections/cityfalcon', '12e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/ftp',
        component: ComponentCreator('/docs/connections/ftp', '51e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/google-sheets',
        component: ComponentCreator('/docs/connections/google-sheets', 'cae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/gsheets',
        component: ComponentCreator('/docs/connections/gsheets', '082'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/healthchecks',
        component: ComponentCreator('/docs/connections/healthchecks', '584'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/healthcheks',
        component: ComponentCreator('/docs/connections/healthcheks', 'd55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/html',
        component: ComponentCreator('/docs/connections/html', '206'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/html-builder',
        component: ComponentCreator('/docs/connections/html-builder', 'e1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/hubspot',
        component: ComponentCreator('/docs/connections/hubspot', '5ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/ifttt',
        component: ComponentCreator('/docs/connections/ifttt', 'e9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/integromat',
        component: ComponentCreator('/docs/connections/integromat', 'cff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/jupyter',
        component: ComponentCreator('/docs/connections/jupyter', '3b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/linkedin',
        component: ComponentCreator('/docs/connections/linkedin', '52f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/mailbox',
        component: ComponentCreator('/docs/connections/mailbox', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/markdown',
        component: ComponentCreator('/docs/connections/markdown', '523'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/microsoft-teams',
        component: ComponentCreator('/docs/connections/microsoft-teams', 'f7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/mongodb',
        component: ComponentCreator('/docs/connections/mongodb', '9d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/newsapi',
        component: ComponentCreator('/docs/connections/newsapi', '663'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/notion',
        component: ComponentCreator('/docs/connections/notion', '579'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/pdf',
        component: ComponentCreator('/docs/connections/pdf', '148'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/plotly',
        component: ComponentCreator('/docs/connections/plotly', 'c96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/qonto',
        component: ComponentCreator('/docs/connections/qonto', 'c73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/slack',
        component: ComponentCreator('/docs/connections/slack', 'eda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/thinkific',
        component: ComponentCreator('/docs/connections/thinkific', '271'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/toucan',
        component: ComponentCreator('/docs/connections/toucan', '469'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/yahoo',
        component: ComponentCreator('/docs/connections/yahoo', '5e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/connections/zapier',
        component: ComponentCreator('/docs/connections/zapier', 'eb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contributing/how-to-contribute',
        component: ComponentCreator('/docs/contributing/how-to-contribute', 'ffa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contributing/version-history',
        component: ComponentCreator('/docs/contributing/version-history', '00e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/basic-usage',
        component: ComponentCreator('/docs/getting-started/basic-usage', 'c3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/build-data-product',
        component: ComponentCreator('/docs/getting-started/build-data-product', '0fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/configuration',
        component: ComponentCreator('/docs/getting-started/configuration', 'b30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/workspaces',
        component: ComponentCreator('/docs/getting-started/workspaces', '221'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/admin-dashboard',
        component: ComponentCreator('/docs/products/admin-dashboard', '1db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/aI-powered-chat',
        component: ComponentCreator('/docs/products/aI-powered-chat', 'e2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/analytics-dashboard-deployment',
        component: ComponentCreator('/docs/products/analytics-dashboard-deployment', '7b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/collaboration-versionning',
        component: ComponentCreator('/docs/products/collaboration-versionning', '150'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/dev-environment',
        component: ComponentCreator('/docs/products/dev-environment', '5ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/scalable-computing',
        component: ComponentCreator('/docs/products/scalable-computing', '078'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/search-catalog-template-library',
        component: ComponentCreator('/docs/products/search-catalog-template-library', '97f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/security-suite',
        component: ComponentCreator('/docs/products/security-suite', '12e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/workflow-automation',
        component: ComponentCreator('/docs/products/workflow-automation', '9f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release-notes/future-plans',
        component: ComponentCreator('/docs/release-notes/future-plans', '098'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release-notes/version-history',
        component: ComponentCreator('/docs/release-notes/version-history', '65c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/troubleshooting/common-issues',
        component: ComponentCreator('/docs/troubleshooting/common-issues', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/troubleshooting/faq',
        component: ComponentCreator('/docs/troubleshooting/faq', '636'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorials-and-examples/examples',
        component: ComponentCreator('/docs/tutorials-and-examples/examples', '20d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorials-and-examples/tutorials',
        component: ComponentCreator('/docs/tutorials-and-examples/tutorials', '2eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
