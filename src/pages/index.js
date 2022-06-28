import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import Layout from '@/src/components/_layout'
import Home from '@/src/components/home'

export async function getServerSideProps({ query: { tag } }) {
  const currentTag = tag || '전체'
  let posts
  posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)

  if (currentTag !== '전체') {
    posts = posts.filter(
      post => post && post.tags && post.tags.includes(currentTag)
    )
  }

  return {
    props: {
      tags: {
        '전체': posts.length,
        ...tags
      },
      posts
    },
  }
}


function HomePage({ tags, posts, currentTag = null }) {
  return <Home tags={tags} posts={posts} currentTag={currentTag} />
}

HomePage.getLayout = function getlayout(page) {
  return <Layout>{page}</Layout>
}


export default HomePage
