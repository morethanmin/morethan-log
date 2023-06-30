const CONFIG = {
  // profile setting (required)
  profile: {
    name: "poori-nuna",
    image: "/notion-avatar-1688102646895.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "푸리누나✌(-‿-)✌",
    bio: "When life gives you lemons, make lemonade!🍋",
    email: "eungyeom_ha@yonsei.ac.kr",
    linkedin: "",
    github: "poori-nuna",
    instagram: "",
  },
  projects: [
    {
      name: `Poori Nuna Blog`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Poori Nuna Blog",
    description: "Welcome to my blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://poori-nuna-blog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

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
    enable: true,
    config: {
      repo: "poori-nuna/my-log",
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
}

module.exports = { CONFIG }
