const CONFIG = {
  // profile setting (required)
  profile: {
    name: "jiyeounPark",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend development",
    skills: "TypeScript, React, JavaScript, TailwindCSS,
 Styled-components, Sass, CSS 3, HTML 5, Figma, Sketch, XD, Photoshop, Zeplin.",
    email: "jijiji941@gmail.com",
    linkedin: "jiyeoun park",
    github: "pajiyeee",
    instagram: "",
  },
  projects: [
    {
      name: `의료인 인증 미니앱`,
      href: "https://bogun.careers",
    },
    {
      name: `muse 뮤지컬 티켓팅 웹 플랫폼`,
      href: "https://github.com/pajiyeee/44-2nd-Chill-Play-frontend",
    },
        {
      name: `4bsop 뷰티브랜드 웹서비스`,
      href: "https://github.com/pajiyeee/44-1st-four-branch-frontend",
    },
    
  ],
  // blog setting (required)
  blog: {
    title: "Hi, I'm Jiyeoun",
    description: "Studying Frontend Development Archive",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
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
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
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
