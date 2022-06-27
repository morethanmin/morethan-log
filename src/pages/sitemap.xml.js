import React from 'react'
import * as fs from 'fs'
import { getAllPosts } from '@/lib/notion'
import { link } from '@/blog.config'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {

  //post url 가져오기
  const posts = await getAllPosts({ includePages: true })
  const dynamicPaths = posts.map(post => {
    return `${link}/${post.slug}`
  })

  //static url 가져오기
  const staticPaths = fs
    .readdirSync("src/pages")
    .filter((staticPage) => {
      return ![
        "api",
        "page",
        "tag",
        "index.js",
        "[slug].js",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage)
    }).map(el => el.slice(0, -3))
    .map((staticPagePath) => {
      return `${link}/${staticPagePath}`
    })

  const allPaths = [...staticPaths, ...dynamicPaths]

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>${link}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    ${allPaths
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `
      })
      .join("")}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap