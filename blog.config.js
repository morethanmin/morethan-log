const CONFIG = {
  // CONFIGcontent configration
  title: 'MORETHAN-LOG',
  author: 'morethanmin',
  email: 'morethanmin.dev@gmail.com',
  description: 'Hello',
  socialLink: 'https://github.com/morethanmin',
  link: 'https://morethan_log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.

  // CONFIGconfigration
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  font: 'sans-serif', // ['sans-serif', 'serif']
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app/', // The link to generate OG image, don't end with a slash
  appearance: 'light', // ['light', 'dark', 'auto'],
  lightBackground: '#f1f3f5', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: 'G-9N3FE0117Q'
    }
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: 'qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w'
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan_log'
    }
  },

  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
