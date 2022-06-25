import PostLayout from '@/components/layouts/PostLayout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import CONFIG from '@/blog.config'
import Layout from '@/components/layouts/Layout'

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map(row => `${CONFIG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
    revalidate: 1
  }
}

const Post = ({ post, blockMap }) => {
  if (!post) return null
  return (
    <PostLayout
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
