import PostDetail from '@/src/components/[slug]'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import Layout from '@/src/components/_layout'

export async function getServerSideProps({ res, query: { slug } }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
  }
}

const PostDetailPage = ({ post, blockMap }) => {
  if (!post) return null
  return (
    <PostDetail
      blockMap={blockMap}
      data={post}
    />
  )
}

PostDetailPage.getLayout = function getlayout(page) {
  if (!page.props.post) return null
  return (
    <Layout
      // for meta tag
      title={page.props.post.title}
      date={new Date(page.props.post.date.start_date).toISOString()}
      description={page.props.post.summary}
      type={page.props.post.type[0]}

      fullWidth={page.props.post.fullWidth}
    >
      {page}
    </Layout>
  )
}


export default PostDetailPage
