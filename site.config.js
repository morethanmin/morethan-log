const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Jonathan Chiang',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Software developer and AI alignment thinker',
    bio: 'I develop everything using node.',
    email: 'jonathan.chiang@mail.utoronto.ca',
    linkedin: 'https://www.linkedin.com/in/jonathan-chiang-4323091ab/',
    github: 'https://github.com/szge',
    instagram: '',
  },
  projects: [
    // {
    //   name: `morethan-log`,
    //   href: 'https://github.com/morethanmin/morethan-log'
    // }
  ],
  // blog setting (required)
  blog: {
    title: 'AI Alignment Blog',
    description: 'Blog for all things related to value alignment of artificially intelligent agents.',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://morethan-log.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
