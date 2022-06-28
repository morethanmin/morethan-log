import { getAllPosts } from '@/lib/notion'
import { link } from '@/blog.config'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  // post url 가져오기
  const posts = await getAllPosts({ includePages: true })
  const dynamicPaths = posts.map(post => {
    return `${link}/${post.slug}`
  })

  const allPaths = [...dynamicPaths]

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/0.7" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <url>
        <loc>${link}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${link}/feed</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    ${allPaths
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
            <lastmod>${new Date().toISOString()}</lastmod>
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