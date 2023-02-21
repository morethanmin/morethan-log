# morethan-log

<img width="1715" alt="image" src="https://user-images.githubusercontent.com/72514247/209824600-ca9c8acc-6d2d-4041-9931-43e34b8a9a5f.png">

Next.js static blog using Notion as a Content Management System (CMS). Supports both Blog format Post as well as Page format for Resume. Deployed using Vercel.

[Demo Blog](https://morethan-log.vercel.app) | [Demo Resume](https://morethan-log.vercel.app/resume)

## Features

**📒 Writing posts using notion**

- No need of commiting to Github for posting anything to your website.
- Posts made on Notion are automaticaly updated on your site.

**📄 Use as a page as resume**

- Useful for generating full page sites using Notion.
- Can be used for Resume, Portfolios etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs (thumbnails!) for posts. ([og-image-korean](https://github.com/morethanmin/og-image-korean)).
- Dynamically creates sitemap for posts.

**🤖 Customisable and Supports various plugin through CONFIG**

- Your profile information can be updated through Config. (`site.config.js`)
- Plugins support includes, Google Analytics, Search Console and also Commenting using Github Issues(Utterances) or Cusdis.

## Getting Started

1. Star this repo.
2. [Fork](https://github.com/morethanmin/morethan-log/fork) the repo to your Profile.
3. Duplicate [this Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), and Share to Web.
4. Copy the Web Link and keep note of the Notion Page Id from the Link which will be in this format [username.notion.site/`NOTION_PAGE_ID`?v=`VERSION_ID`].
5. Clone your forked repo and then customize `site.config.js` based on your preference.
6. Deploy on Vercel, with the following environment variables.

   - `NOTION_PAGE_ID` (Required): The Notion page Id got from the Share to Web URL.
   - `GOOGLE_MEASUREMENT_ID` : For Google analytics Plugin.
   - `GOOGLE_SITE_VERIFICATION` : For Google search console Plugin.

## Contributing

Check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Contributors

<!--
Contributors template:
<a href="https://github.com/{username}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<p>
<a href="https://github.com/kvaishak"><img src="https://avatars.githubusercontent.com/u/25531121?v=4" width="50px" alt="kvaishak" /></a>&nbsp;&nbsp;<a href="https://github.com/jhk0530"><img src="https://avatars.githubusercontent.com/u/6457691?s=120&v=4" width="50px" alt="jhk0530" /></a>&nbsp;&nbsp;<a href="https://github.com/i99dev"><img src="https://avatars.githubusercontent.com/u/10709888?s=120&v=4" width="50px" alt="i99dev" /></a>&nbsp;&nbsp;<a href="https://github.com/JaeSang1998"><img src="https://avatars.githubusercontent.com/u/58258782?s=120&v=4" width="50px" alt="JaeSang1998" /></a>&nbsp;&nbsp;<a href="https://github.com/vaishak-kaippanchery-liqid"><img src="https://avatars.githubusercontent.com/u/93523060?s=120&v=4" width="50px" alt="vaishak-kaippanchery-liqid" /></a>&nbsp;&nbsp;<a href="https://github.com/itjustbong"><img src="https://avatars.githubusercontent.com/u/29947261?v=4" width="50px" alt="itjustbong" /></a>&nbsp;&nbsp;<a href="https://github.com/ddarkr"><img src="https://avatars.githubusercontent.com/u/6638675?v=4" width="50px" alt="ddarkr" /></a>&nbsp;&nbsp;<a href="https://github.com/lisiver"><img src="https://avatars.githubusercontent.com/u/46680792?v=4" width="50px" alt="lisiver" /></a>&nbsp;&nbsp;
</p>

## Support

morethan-log is an MIT-licensed open source project. It can grow thanks to the sponsors and support from the amazing backers.

### Sponsors

<!--
Sponsors template:
<a href="https://github.com/{uesrname}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<p>
<a href="https://github.com/siyeons"><img src="https://avatars.githubusercontent.com/u/35549653?v=4" width="50px" alt="siyeons" /></a>&nbsp;&nbsp;
</p>

## License

The [MIT License](LICENSE).
