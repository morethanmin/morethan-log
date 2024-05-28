const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Kosrat",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Mobile Developer & Team Lead",
    bio: "I develop everything using node.",
    email: "kosrat.d.ahmad@gmail.com",
    linkedin: "kosratahmad",
    github: "kosratdev",
    instagram: "",
  },
  projects: [
    {
      name: `My Prayers - Android`,
      href: "https://play.google.com/store/apps/details?id=com.kosratdahmad.myprayers",
    },
    {
      name: `My Prayers - iOS`,
      href: "https://apps.apple.com/us/app/my-prayers/id1390015257",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Kosrat's Blog",
    description: "Welcome to Kosrat's blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.kosrat.dev",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
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
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
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
