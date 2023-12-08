const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Seok-Kyu",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Product Manager",
    bio: "아직도 크는 중",
    email: "hongsk5689@gmail.com",
    linkedin: "https://www.linkedin.com/in/seok-kyu-hong",
    github: "SeokKyuHong",
    instagram: "",
  },
  projects: [
    {
      name: `Resume.`,
      href: "https://kyulog.vercel.app/resume",
    },
  ],
  // blog setting (required)
  blog: {
    title: "kyulog",
    description: "welcome to kyulog!",
  },

  // CONFIG configration (required)
  link: "https://kyulog.vercel.app",
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
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "SeokKyuHong/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: { 
      host: "https://cusdis.com",
      appid: "4ea7dea3-bb16-4926-82ab-7d58c353d95a", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
