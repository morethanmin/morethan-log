const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Zak',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Devops',
    bio: 'I Am DevOps Engineer',
    github: 'zakery1369',
    docker: 'zakery1369',    
    linkedin: 'zakery1369',
    medium: 'zakery1369',
    dev: 'zakery1369',
    twitter: 'zakery1369',
    telegram: 'zakery1369',
    skype: 'lf6899W3qgrd',
    email: 'zakery1369@gmail.com',
  },
  // Certificates setting (required)
  Certificates: {
    name: 'Mohammad Zakery',
    image: '/badge.png', 
    image2: '/avatar.svg',
    description: 'My Certifications',
    caption: 'Linux Engineer',
  },
  projects: [
    {
      name: `Wordpress Docker`,
      href: 'https://github.com/spyhichkas/Wordpress'
    }
  ],
  projects2: [
    {
      name: `Wordpress`,
      href: 'https://github.com/spyhichkas/Wordpress'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Zakops',
    description: 'welcome to My Site',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://zak-black.vercel.app/',
  since: 2020, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['zakops', 'zakops.com', 'Devops'],
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
      repo: 'zakops-com/zakops.com',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
