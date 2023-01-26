const CONFIG = {
  // profile setting
  profile: {
    name: 'c4cydonia',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    image_light: '/avatar-left.svg',
    discription: 'Software engineer',
    linkedin: 'gustavo-leyva-b9493846',
    email: 'ovatleyva@gmail.com',
    github: 'gusleyva',
    instagram: 'ovatleyva',
  },
  projects: [
    {
      name: 'c4cydonia',
      href: '#'
    }
  ],
  // blog setting
  blog: {
    title: 'c4cydonia',
    description: 'Welcome to c4cydonia',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: 'https://c4cydonia-vercel-blog.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion','Java', 'java', 'Software', 'Engineer', 'Development', 'Programming'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'gusleyva/c4cydonia-vercel-blog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
