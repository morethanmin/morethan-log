const CONFIG = {
  // profile setting
  profile: {
    name: "Vaishak Kaippanchery",
    image: "/profile.png",
    role: "Senior Software Engineer",
    bio: "Working at Fintech in Berlin, Prev worked on building collaborative design tool @Zoho",
    linkedin: "kvaishak",
    email: "hi.kvaishak@gmail.com",
    github: "kvaishak",
    instagram: "",
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
    theme: "auto", // ['light', 'dark', 'auto']
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
  },

  // plugin configuration
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
