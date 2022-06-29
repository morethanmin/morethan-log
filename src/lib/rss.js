import { Feed } from 'feed'
import CONFIG from '@/blog.config'
import ReactDOMServer from 'react-dom/server'
import { getPostBlocks } from '@/lib/notion'
import { NotionRenderer, Equation, Code, Collection, CollectionRow } from 'react-notion-x'

const mapPageUrl = id => 'https://www.notion.so/' + id.replace(/-/g, '')

const createFeedContent = async post => {
  const content = ReactDOMServer.renderToString(<NotionRenderer
    recordMap={await getPostBlocks(post.id)}
    components={{
      equation: Equation,
      code: Code,
      collection: Collection,
      collectionRow: CollectionRow
    }}
    mapPageUrl={mapPageUrl}
  />)
  const regexExp = /<div class="notion-collection-row"><div class="notion-collection-row-body"><div class="notion-collection-row-property"><div class="notion-collection-column-title"><svg.*?class="notion-collection-column-title-icon">.*?<\/svg><div class="notion-collection-column-title-body">.*?<\/div><\/div><div class="notion-collection-row-value">.*?<\/div><\/div><\/div><\/div>/g
  return content.replace(regexExp, '')
}

export async function generateRss(posts) {
  const year = new Date().getFullYear()
  const feed = new Feed({
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    id: `${CONFIG.link}`,
    link: `${CONFIG.link}`,
    language: CONFIG.lang,
    favicon: `${CONFIG.link}/favicon.ico`,
    copyright: `All rights reserved ${year}, ${CONFIG.profile.name}`,
    author: {
      name: CONFIG.profile.name,
      email: CONFIG.profile.email,
      link: CONFIG.link
    }
  })
  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${CONFIG.link}/${post.slug}`,
      link: `${CONFIG.link}/${post.slug}`,
      description: post.summary,
      content: await createFeedContent(post),
      date: new Date(post?.date?.start_date || post.createdTime)
    })
  }
  return feed.atom1()
}
