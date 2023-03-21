const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Eric",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Developer",
    bio: "Simple & reliable",
    email: "ghkagg@outlook.com",
    wechat: "Lanbasara",
    github: "Lanbasara",
  },
  projects: [
    {
      name: `Eric's Blog`,
      href: "https://github.com/Lanbasara/Eric-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Eric's Blog",
    description: "Welcome to Eric's Blog",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
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
      repo: "Lanbasara/Eric-blog",
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
  staticResources: {
    Logo: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8253eb8-92b3-4e4c-a29a-fbd47de01a0d/logo-no-background.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230321T095005Z&X-Amz-Expires=86400&X-Amz-Signature=3f57f87032643c29fe3a6e6f78fee9f5b22c46b516e09f172606175e05648dcb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo-no-background.svg%22&x-id=GetObject",
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
