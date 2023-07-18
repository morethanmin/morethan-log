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
   - `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` : For Google analytics Plugin.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` : For Google search console Plugin.

## 10 Steps to build your own morethan-log (by 23.06.23)

<details>
   <summary> Click to see guide </summary>
   
   0. Prepare Notion, Vercel account.

   1. ⭐ `Star` and `Fork` this repo.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/b0421776-2bfe-42bc-ae31-d90206fd5789' width = '500'>
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/185a8e4c-4ae2-4a38-b6f4-dc2a06a45c28' width = '500'>

   2. As you `click` the [Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), you will see this notion page in your browser. Click `Duplicate` button(복제 in image) in right top.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/a5375429-28f0-4bba-a355-0d391cad58db' width = '500'>

   3. And you will see `notion page in notion app` in your account.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/09af5533-43d9-48e5-95eb-dcac84c97c1f' width = '500'>

   4. Click `Share` and `Publish` in right top, and check web link. (Copy web link)
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/886fe4a2-79ca-4dbc-b1e1-93984e7e3f44' width = '500'>
   
   5. `Modify` **site.config.js** file in **your** forked repo.
   > 💡 NOTE. I changed **2 RED PART**
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/3d9c0da5-92bc-4372-8752-7bfc810b4986' width = '500'>

   6. Move and `login` to vercel.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/07742ad0-4766-43b0-9ebd-5311f9711bc2' width = '500'>

   7. `Build` new project using **Add New...**
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/517d46be-c9bf-4181-aaa5-e9bd2fcdc822' width = '500'>

   8. `Import` **your forked morethan-log repository**
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/07742ad0-4766-43b0-9ebd-5311f9711bc2' width = '500'>

   9. `Add` **Environment variabes** to vercel project
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/703b50a3-3a90-4915-ab73-1baca4c285f8' width = '500'>

   10. `Wait` for the deployment to complete. After the deployment is successful, you should see an image like the one below.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/a7d72caa-4354-4f81-9577-c773faeed7c6' width = '500'>

   🥳 Congratulations. Now check out your blog
   
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/3876a273-a270-47ef-a2ad-663519d9e537' width = '500'>

</details>


## Contributing

Check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Contributors

<!--
Contributors template:
<a href="https://github.com/{username}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<p>
<a href="https://github.com/kvaishak"><img src="https://avatars.githubusercontent.com/u/25531121?v=4" width="50px" alt="kvaishak" /></a>&nbsp;&nbsp;<a href="https://github.com/jhk0530"><img src="https://avatars.githubusercontent.com/u/6457691?s=120&v=4" width="50px" alt="jhk0530" /></a>&nbsp;&nbsp;<a href="https://github.com/i99dev"><img src="https://avatars.githubusercontent.com/u/10709888?s=120&v=4" width="50px" alt="i99dev" /></a>&nbsp;&nbsp;<a href="https://github.com/JaeSang1998"><img src="https://avatars.githubusercontent.com/u/58258782?s=120&v=4" width="50px" alt="JaeSang1998" /></a>&nbsp;&nbsp;<a href="https://github.com/vaishak-kaippanchery-liqid"><img src="https://avatars.githubusercontent.com/u/93523060?s=120&v=4" width="50px" alt="vaishak-kaippanchery-liqid" /></a>&nbsp;&nbsp;<a href="https://github.com/itjustbong"><img src="https://avatars.githubusercontent.com/u/29947261?v=4" width="50px" alt="itjustbong" /></a>&nbsp;&nbsp;<a href="https://github.com/ddarkr"><img src="https://avatars.githubusercontent.com/u/6638675?v=4" width="50px" alt="ddarkr" /></a>&nbsp;&nbsp;<a href="https://github.com/lisiver"><img src="https://avatars.githubusercontent.com/u/46680792?v=4" width="50px" alt="lisiver" /></a>&nbsp;&nbsp;<a href="https://github.com/Octoping925"><img src="https://avatars.githubusercontent.com/u/53991994?v=4" width="50px" alt="Octoping925" /></a>&nbsp;&nbsp;<a href="https://github.com/linnilsupak"><img src="https://avatars.githubusercontent.com/u/39083566?v=4" width="50px" alt="linnilsupak" /></a>&nbsp;&nbsp;<a href="https://github.com/WhiteHyun"><img src="https://avatars.githubusercontent.com/u/57972338?v=4" width="50px" alt="WhiteHyun" /></a>&nbsp;&nbsp;<a href="https://github.com/haryung-lee"><img src="https://avatars.githubusercontent.com/u/64428916?v=4" width="50px" alt="haryung-lee" /></a>&nbsp;&nbsp;
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
