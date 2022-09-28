// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LeagueXP',
  tagline: 'We make cool things that change the world.',
  url: 'https://leaguexp.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'support'
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        logo: {
          alt: 'LeagueXP Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/greenlight', label: 'Greenlight', position: 'left' },
          { to: '/litgames', label: 'Lit.Games', position: 'left' },
          { to: '/operator', label: 'OperatorOS', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { type: 'doc', docId: 'home', position: 'left', label: 'Support' },
          { to: '/about', label: 'About', position: 'left' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Projects',
            items: [
              { to: '/greenlight', label: 'Greenlight' },
              { to: '/litgames', label: 'Lit.Games' },
              { to: '/operator', label: 'OperatorOS' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Product Support',
                to: '/support/home',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} LeagueXP Ventures`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
