import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import Layout from '@/components/layouts/Layout'
import SearchLayout from '@/components/layouts/SearchLayout'

export async function getStaticProps({ params }) {
  const currentTag = params.tag
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    post => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map(tag => ({ params: { tag } })),
    fallback: true
  }
}

const TagPage = function ({ tags, posts, currentTag }) {
  return <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
}

TagPage.getLayout = function getlayout(page) {
  return <Layout>{page}</Layout>
}


export default TagPage