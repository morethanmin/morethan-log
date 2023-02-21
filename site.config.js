const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Jonathan Chiang',
    image: '/avatar.jpg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Software engineer',
    bio: 'Interested in ML and computer graphics. Currently working for Max Tegmark @ Improve the News.',
    email: 'jonathan.chiang@mail.utoronto.ca',
    linkedin: 'https://www.linkedin.com/in/jonathan-chiang-4323091ab/',
    github: 'https://github.com/szge',
    instagram: '',
  },
  projects: [
    {
      name: `CS:GO Cheat`,
      href: 'https://github.com/szge/WhateverYouWant'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'AI Alignment Blog',
    description: 'A space for all things related to the value alignment problem for artifically intelligent agents.',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://jonathanchiang-ca.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // pageId: "https://pinnate-turret-320.notion.site/76099ff7772c46edb4fd457f0a6676b0?v=5da3f5c9b4474822bd8212a2369316d1"
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: 'szge/jonathanchiang.ca',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
