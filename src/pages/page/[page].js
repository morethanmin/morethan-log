import Post from '@/src/components/PostCard'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import CONFIG from '@/blog.config'
import Layout from '@/components/layouts/Layout'

export async function getServerSideProps(context) {
  const { page } = context.params // Get Current Page No.
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(
    CONFIG.postsPerPage * (page - 1),
    CONFIG.postsPerPage * page
  )
  const totalPosts = posts.length
  const showNext = page * CONFIG.postsPerPage < totalPosts
  return {
    props: {
      page, // Current Page
      postsToShow,
      showNext
    },
  }
}

//for pagenation
const Page = ({ postsToShow, page, showNext }) => {
  return (
    <>
      {postsToShow &&
        postsToShow.map(post => <Post key={post.id} post={post} />)}
      <Pagination page={page} showNext={showNext} />
    </>
  )
}


Page.getLayout = function getlayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
