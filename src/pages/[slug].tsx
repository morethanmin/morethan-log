import PostDetail from '@containers/PostDetail'
import { getAllPosts, getPostBlocks } from '@libs/notion'
import Layout from '@components/Layout'
import CONFIG from '../../morethan-log.config'
import { NextPageWithLayout } from './_app'
import { TPost } from '../types'

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  try {
    const posts = await getAllPosts({ includePages: true })
    const post = posts.find((t) => t.slug === slug)
    if (!post) throw new Error('Post not found')
    const blockMap = await getPostBlocks(post.id)

    return {
      props: { post, blockMap },
      revalidate: 1,
    }
  } catch (error) {
    console.log('error')

    return
  }
}

type Props = {
  post: TPost
  blockMap: any
}

const PostDetailPage: NextPageWithLayout<Props> = ({ post, blockMap }) => {
  if (!post) return null
  return <PostDetail blockMap={blockMap} data={post} />
}

PostDetailPage.getLayout = function getlayout(page) {
  const getImage = () => {
    if (page.props.post.thumbnail) return page.props.post.thumbnail
    if (CONFIG.ogImageGenerateURL)
      return `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
        page.props.post.title
      )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Flogo-for-dark-bg.svg`
  }

  if (!page.props.post) return null
  return (
    <Layout
      metaConfig={{
        title: page.props.post.title,
        date: new Date(
          page.props.post.date?.start_date || page.props.post.createdTime
        ).toISOString(),
        image: getImage(),
        description: page.props.post.summary,
        type: page.props.post.type[0],
        url: `${CONFIG.link}/${page.props.post.slug}`,
      }}
      fullWidth={page.props.post.fullWidth}
    >
      {page}
    </Layout>
  )
}

export default PostDetailPage
