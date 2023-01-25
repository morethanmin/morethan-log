import { getPosts, getAllTagsFromPosts, filterPosts } from "@libs/notion"
import Layout from "@components/Layout"
import Feed from "@containers/Feed"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { TPosts, TTags } from "../types"
import { injectIntl } from "react-intl"

export async function getStaticProps({ locale }: any) {
  try {
    const posts = await getPosts(locale)
    const filteredPost = filterPosts(posts)
    const tags = getAllTagsFromPosts(filteredPost)
    return {
      props: {
        tags: {
          All: filteredPost.length,
          ...tags,
        },
        posts: filteredPost,
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
        type: "website",
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  )
}

export default FeedPage
