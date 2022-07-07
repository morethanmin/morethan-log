const CONFIG = {
  // profile setting
  profile: {
    name: 'morethanmin',
    image: ['/profile.png', '/profile-hover.png'],
    discription: 'frontend developer',
    linkedin: 'morethanmin',
    email: 'morethanmin.dev@gmail.com',
    github: 'morethanmin',
    instagram: 'more_dev_min',
  },

  // blog setting
  blog: {
    title: 'morethan-log', // blog 타이틀과 
    description: '개발자로 일하면서 배운 내용들을 기록합니다.',
  },

  // CONFIG configration
  link: 'https://morethan-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
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
      repo: 'morethanmin/morethan-log'
    }
  },

  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
