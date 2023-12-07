const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ninefloor",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Developer",
    bio: "뭐가 됐든 뭐가 되어서 뭐든 합니다.",
    email: "less0805@gmail.com",
    linkedin: "",
    github: "ninefloor",
    instagram: "nine_floor",
  },
  projects: [{
    name: '코노플리 CONOPLI',
    href: 'https://play.google.com/store/apps/details?id=com.conopli&pcampaignid=web_share',
  }
  ],
  // blog setting (required)
  blog: {
    title: "ninefloor deVlog",
    description: "기록이 어려운 개발자의 블로그",
    theme: 'dark'
  },

  // CONFIG configration (required)
  link: "https://nine-devlog.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
