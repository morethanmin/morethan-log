import Post from '@/src/components/PostCard'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import CONFIG from '@/blog.config'
import Layout from '@/components/layouts/Layout'


export async function getStaticProps(context) {
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
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / CONFIG.postsPerPage)
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) }
    })),
    fallback: true
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
