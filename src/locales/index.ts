export default [
  {
    code: "en", // locale code
    iso: "en-US", // iso code
    name: "English", // display name
    file: require("./en.json"), // path to json file
    dir: "ltr", // text direction
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID_EN, // Notion page id
  },
  {
    code: "ar",
    iso: "ar-EG",
    name: "العربية",
    file: require("./ar.json"),
    dir: "rtl",
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID_AR,
  },
]
