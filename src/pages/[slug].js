import PostLayout from '@/components/layouts/PostLayout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import CONFIG from '@/blog.config'
import { createHash } from 'crypto'
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
    <Layout
      title={post.title}
      pageType="post"
      description={post.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
      fullWidth={post.fullWidth}
    >
      <PostLayout
        blockMap={blockMap}
        frontMatter={post}
      />
    </Layout>
  )
}


export default Post
