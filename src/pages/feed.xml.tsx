import { getPosts } from "../apis/notion-client/getPosts"
import { filterPosts } from "../libs/utils/notion"
import { CONFIG } from "../../site.config"
import { GetServerSideProps } from "next"

const generateRSSItem = (post: any) => {
  const pubDate = new Date(post.date?.start_date || post.createdTime).toUTCString()
  const categories = post.category || []
  const tags = post.tags || []
  
  return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${CONFIG.link}/${post.slug}</link>
      <description><![CDATA[${post.summary || post.title}]]></description>
      <author>${CONFIG.profile.email} (${CONFIG.profile.name})</author>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${CONFIG.link}/${post.slug}</guid>
      ${categories.map((cat: string) => `<category><![CDATA[${cat}]]></category>`).join('')}
      ${tags.map((tag: string) => `<category><![CDATA[${tag}]]></category>`).join('')}
      ${post.thumbnail ? `<enclosure url="${post.thumbnail}" type="image/jpeg" />` : ''}
    </item>
  `
}

const generateRSS = (posts: any[]) => {
  const lastBuildDate = new Date().toUTCString()
  const rssItems = posts.map(generateRSSItem).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${CONFIG.blog.title}]]></title>
    <link>${CONFIG.link}</link>
    <description><![CDATA[${CONFIG.blog.description}]]></description>
    <language>${CONFIG.lang}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${CONFIG.link}/feed.xml" rel="self" type="application/rss+xml"/>
    <generator>Next.js Blog RSS Generator</generator>
    <webMaster>${CONFIG.profile.email} (${CONFIG.profile.name})</webMaster>
    <managingEditor>${CONFIG.profile.email} (${CONFIG.profile.name})</managingEditor>
    <copyright>Copyright ${new Date().getFullYear()}, ${CONFIG.profile.name}</copyright>
    <ttl>60</ttl>
    ${rssItems}
  </channel>
</rss>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getPosts()
  const filteredPosts = filterPosts(posts)
  
  // 최신 20개 포스트만 RSS에 포함
  const recentPosts = filteredPosts.slice(0, 20)
  
  const rss = generateRSS(recentPosts)

  res.setHeader('Content-Type', 'text/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400')
  res.write(rss)
  res.end()

  return {
    props: {},
  }
}

const RSSFeed = () => null
export default RSSFeed