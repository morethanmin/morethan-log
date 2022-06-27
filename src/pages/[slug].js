import PostDetail from '@/src/components/PostDetail'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import Layout from '@/components/layouts/Layout'

export async function getServerSideProps({ query: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
  }
}

const Post = ({ post, blockMap }) => {
  if (!post) return null
  return (
    <PostDetail
      blockMap={blockMap}
      data={post}
    />
  )
}

Post.getLayout = function getlayout(page) {
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


export default Post
