import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import Layout from '@/src/components/_layout'
import Home from '@/src/components/home'

export async function getStaticProps() {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)

  return {
    props: {
      tags: {
        '전체': posts.length,
        ...tags
      },
      posts
    },
    revalidate: 1
  }
}


function HomePage({ tags, posts, currentTag = null }) {
  return <Home tags={tags} posts={posts} currentTag={currentTag} />
}

HomePage.getLayout = function getlayout(page) {
  return <Layout>{page}</Layout>
}


export default HomePage
