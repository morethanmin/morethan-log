import { getAllPosts, getAllTagsFromPosts } from '@libs/notion'
import Layout from '@components/Layout'
import Feed from '@containers/Feed'
import CONFIG from '../../morethan-log.config'
import { NextPageWithLayout } from './_app'
import { TPosts, TTags } from '../types'

export async function getStaticProps() {
  try {
    const posts = await getAllPosts({ includePages: false })

    const tags = getAllTagsFromPosts(posts)
    return {
      props: {
        tags: {
          All: posts.length,
          ...tags,
        },
        posts,
      },
      revalidate: 1,
    }
  } catch (error) {
    return
  }
}

type Props = {
  tags: TTags
  posts: TPosts
}

const FeedPage: NextPageWithLayout<Props> = ({ tags, posts }) => {
  return <Feed tags={tags} posts={posts} />
}

FeedPage.getLayout = function getlayout(page) {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'website',
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  )
}

export default FeedPage
