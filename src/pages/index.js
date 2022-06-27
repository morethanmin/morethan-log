import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import Layout from '@/components/layouts/Layout'
import SearchLayout from '@/components/layouts/SearchLayout'

export async function getServerSideProps() {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
  }
}


function HomePage({ tags, posts, currentTag = null }) {

  return <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
}

HomePage.getLayout = function getlayout(page) {
  return <Layout>{page}</Layout>
}


export default HomePage
