import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { ARCAO, RANDAO } from '@arcaogaming/project-links';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RANDAO',
  tagline: 'Onchain randomness brought to you by $RNG',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://youtube.com`,
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Randao', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        // To enable blog, uncomment this section
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'RANDAO',
      logo: {
        alt: 'RANDAO Logo',
        src: 'img/logo.png',
        href: RANDAO.website,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/news', label: 'Latest News', position: 'left' },
        { to: '/media-kit', label: 'Media Kit', position: 'left' },
        {
          href: RANDAO.twitterFollow,
          position: 'right',
          className: 'header-x-link',
          'aria-label': 'X',
        },
        {
          href: RANDAO.github,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              html: `<a href="${RANDAO.twitterFollow}" target="_blank"><img alt="X" src="https://img.shields.io/badge/X-Follow-333333?style=flat&logo=x"/></a>`,
            },
            {
              html: `<a href="${RANDAO.discord}" target="_blank"><img alt="Discord" src="https://img.shields.io/badge/Discord-Join-333333?style=flat&logo=discord"/></a>`,
            },
            {
              html: `<a href="${RANDAO.telegram}" target="_blank"><img alt="Telegram" src="https://img.shields.io/badge/Telegram-Join-333333?style=flat&logo=telegram"/></a>`,
            },
            {
              html: `<a href="${RANDAO.youtube}" target="_blank"><img alt="YouTube" src="https://img.shields.io/badge/YouTube-Subscribe-333333?style=flat&logo=youtube"/></a>`,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `<a href="${RANDAO.website}" target="_blank"><img alt="Website" src="https://img.shields.io/badge/Website-Visit-333333?style=flat&logo=google-chrome"/></a>`,
            },
            {
              html: `<a href="${RANDAO.github}" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Star-333333?style=flat&logo=github"/></a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RANDAO.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github, // Use light theme for both
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false, // Enable dark mode switch
      respectPrefersColorScheme: true, // Respect system preferences
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-L3XHRDLD4R',
        anonymizeIP: true, // Non-Optional: anonymize IP addresses
      },
    ],
  ],
};

export default config;
