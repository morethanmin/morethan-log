const CONFIG = {
  // profile setting
  profile: {
    name: "Vaishak Kaippanchery",
    image: "/profile.png",
    discription: "Senior Software Engineer",
    linkedin: "kvaishak",
    email: "hi.kvaishak@gmail.com",
    github: "kvaishak",
    instagram: ''
  },
  projects: [
    {
      name: "kvaishak.com",
      href: "https://kvaishak.com/",
    },
  ],
  // blog setting
  blog: {
    title: "Notes",
    description: "welcome to my Notes!",
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: "notes.kvaishak.com",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: "https://og-image.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN,
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: "", // ex. G-9N3FE0117Q
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: "", // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "kvaishak/notes",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
module.exports = CONFIG;
