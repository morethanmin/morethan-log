const CONFIG = {
  // profile setting (required)
  profile: {
    name: "kohek",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "フロント バックエンド インフラエンジニア",
    bio: "Vue.js TypeScript AWS Lambdaを使用して開発しています。",
    email: "setdiagram.info@gmail.com",
    linkedin: "",
    github: "kohek-senbei",
    instagram: "",
  },
  projects: [
    // {
    //   name: `notion-blog`,
    //   href: "https://github.com/morethanmin/morethan-log",
    // },
    {
      name: `セット図メーカー`,
      href: "https://set-diagram.com",
    },
  ],
  // blog setting (required)
  blog: {
    title: "kohek-senbei-blog",
    description: "welcome to kohek-senbei-blog!",
  },

  // CONFIG configration (required)
  link: "https://notion-blog-xi-two-89.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
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
