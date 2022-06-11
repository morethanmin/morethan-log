import PostLayout from '@/components/layouts/PostLayout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'
import Layout from '@/components/layouts/Layout'

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map(row => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  const emailHash = createHash('md5')
    .update(BLOG.email)
    .digest('hex')
    .trim()
    .toLowerCase()

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1
  }
}

const BlogPost = ({ post, blockMap, emailHash }) => {
  if (!post) return null
  return (
    <Layout
      layout="blog"
      title={post.title}
      description={post.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
      fullWidth={post.fullWidth}
    >
      <PostLayout
        blockMap={blockMap}
        frontMatter={post}
        emailHash={emailHash}
      />
    </Layout>
  )
}


export default BlogPost
