const CONFIG = {
  // profile setting (required)
  profile: {
    name: `${process.env.NEXT_PUBLIC_NICKNAME}`,
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: `${process.env.NEXT_PUBLIC_PROFILE_ROLE}`,
    bio: `${process.env.NEXT_PUBLIC_BLOG_BIO}`,
    email: `${process.env.NEXT_PUBLIC_PROFILE_EMAIL}`,
    linkedin: `${process.env.NEXT_PUBLIC_PROFILE_LINKEDIN}`,
    github: `${process.env.NEXT_PUBLIC_PROFILE_GITHUB}`,
    instagram: `${process.env.NEXT_PUBLIC_PROFILE_INSTAGRAM}`,
  },
  projects: [
    {
      name: `Side Projects`,
      href: `https://github.com/${process.env.NEXT_PUBLIC_PROFILE_GITHUB}`,
    },
  ],
  // blog setting (required)
  blog: {
    title: `${process.env.NEXT_PUBLIC_BLOG_NAME}`,
    description: `welcome to ${process.env.NEXT_PUBLIC_NICKNAME}'s Blog!`,
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NEXT_PUBLIC_NOTION_PAGE_ID,
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
