# morethan-log

Static Blog and Resume using Notion and Next.js, deployed on Vercel.

<img width="1314" alt="image" src="https://user-images.githubusercontent.com/72514247/177747208-cc01cc79-e9af-4009-be70-f2182bde5c4e.png">

- Demo Blog:  https://morethan-log.vercel.app
- Demo Resume: https://morethan-log.vercel.app/resume

## Features

**📒 Writing posts using notion**

- No need to commit to write a post
- Posts made on Notion are immediately posted

**📄 Use as a page such as resume**

- Writing pages as well as posts using Notion
- resume, portfolio, ... and much more

**👀 SEO friendly**

- Dynamically generate OG IMAGEs (thumbnails!) for posts. ([og-image-korean](https://github.com/morethanmin/og-image-korean))
- Dynamically create a sitemap for posts

**🤖 Various plugin support through CONFIG**

- You can set your own profile information
- GA, utterances can be easily applied

## Getting Started

1. Star this repo
2. Duplicate [this Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), and share it to the public
3. Customize `morethan-log.config.js`
4. Deploy on Vercel, set following environment variables
   - NOTION_PAGE_ID (Required): The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address. (ex. quasar-season-ed5.notion.site/`[NOTION_PAGE_ID]`?v=[VERSION_ID])
   - <img width="465" alt="image" src="https://user-images.githubusercontent.com/72514247/206605805-c2552dc7-cb7b-414e-adbd-3bccdf0d47e8.png">

## Road Map

Check out our roadmap [here](https://quasar-season-ed5.notion.site/d4733b47eaab4ba18ac331d38a75d15c?v=7bc28ed65d904615b2ddf901bee1ad94)

## License

The MIT License.

> This projects is based on [nobelium](https://github.com/craigary/nobelium).
