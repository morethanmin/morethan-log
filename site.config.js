const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Yunje Lee",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Malware Analyst and Digital Forensics Specialist focused on uncovering and mitigating cybersecurity threats",
    bio: "I'm currently aspiring to become a cybersecurity expert, with a particular interest in malware analysis and digital forensics!",
    email: "dlduswp0408@gmail.com",
    linkedin: "",
    github: "king-raccoon",
    instagram: "",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/king-raccoon/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "제리차혁명",
    description: "제리 이즈 스터딩",
  },

  // CONFIG configration (required)
  link: "https://super-king-raccoon.vercel.app",
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
      repo: "king-raccoon/morethan-log",
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
