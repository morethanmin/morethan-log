const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Chris Alves",
    image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "DevOps Engineer",
    bio: "Rock Climber. Video Editor. Gamer.",
    youtube: "ChisDev",
    linkedin: "chrisae9",
    github: "chrisae9",
    typeracer: "chrisae9",
    instagram: "",
  },
  // IMPORTANT: Import references to icons in src/routes/Feed/ServiceCard.tsx
  projects: [
    {
      name: 'Notion',
      iconName: "SiNotion", // Icon name as string
      href: "https://www.notion.so/2ad04a86b6a342118892ce0a2a9c6385?v=3c485ee359e84e0fbf9ced5d73c24637",
    },
    {
      name: 'File Hosting',
      iconName: "AiFillCloud", // Icon name as string
      href: "https://share.chis.dev",
    },
    {
      name: 'Discord Bot',
      iconName: "AiFillRobot", // Icon name as string
      href: 'https://discord.com/api/oauth2/authorize?client_id=724657775652634795&permissions=0&scope=bot%20applications.commands',
    },
    {
      name: 'Phase10 Randomizer',
      iconName: "CgCardClubs", // Icon name as string
      href: "https://phase.chis.dev",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Chis.Dev",
    description: "Welcome to my blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.chis.dev",
  since: 2023, // If leave this empty, current year will be used.
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
