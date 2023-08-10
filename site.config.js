const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Irvan Maulana",
    image: "/avatar.png", 
    role: "UI/UX Designer",
    bio: "I develop everything using node.",
    email: "irvanmaulana.studio@protonmail.com",
    linkedin: "irvan-maulana4869",
    github: "IrvanMaulana99",
    instagram: "irvanmaulana.studio",
  },
  projects: [
    {
      name: `notion-2`,
      href: "https://github.com/IrvanMaulana99/notion-2",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Irvan Maulana Personal Blog",
    description: "welcome to my personal blog",
    theme: "dark",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app/Irvan%20Maulana%20Personal%20Blog.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fitbabble.files.wordpress.com%2F2021%2F11%2Fnotion.png", // The link to generate OG image, don't end with a slash

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
      repo: "IrvanMaulana99/notion-2",
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
