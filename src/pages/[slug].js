import Post from '@containers/Post'
import { getAllPosts, getPostBlocks } from '@libs/notion'
import Layout from '@components/Layout'



export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map(row => `/${row.slug}`),
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

const PostPage = ({ post, blockMap }) => {
  if (!post) return null
  return (
    <Post
      blockMap={blockMap}
      data={post}
    />
  )
}

PostPage.getLayout = function getlayout(page) {
  if (!page.props.post) return null
  return (
    <Layout
      // for meta tag
      title={page.props.post.title}
      date={new Date(page.props.post.date?.start_date || page.props.post.createdTime).toISOString()}
      description={page.props.post.summary}
      type={page.props.post.type[0]}

      fullWidth={page.props.post.fullWidth}
    >
      {page}
    </Layout>
  )
}

export default PostPage
