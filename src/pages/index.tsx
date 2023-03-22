import {
  getAllSelectItemsFromPosts,
  filterPosts,
  getDatesFromPosts,
} from "@/src/libs/utils/notion"
import Layout from "@components/Layout"
import Feed from "@containers/Feed"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { TCategories, TDates, TPosts, TTags } from "../types"
import { getPosts } from "../libs/apis"
import { DEFAULT_CATEGORY, DEFAULT_DATE } from "../constants"

export async function getStaticProps() {
  try {
    const posts = await getPosts()
    const filteredPost = filterPosts(posts)
    const tags = getAllSelectItemsFromPosts("tags", filteredPost)
    const categories = getAllSelectItemsFromPosts("category", filteredPost)
    const dates = getDatesFromPosts("date", filteredPost)

    return {
      props: {
        tags: {
          ...tags,
        },
        categories: {
          [DEFAULT_CATEGORY]: filteredPost.length,
          ...categories,
        },
        dates: {
          [DEFAULT_DATE]: filteredPost.length,
          ...dates,
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
  categories: TCategories
  tags: TTags
  posts: TPosts
  dates: TDates
}

const FeedPage: NextPageWithLayout<Props> = ({
  categories,
  tags,
  posts,
  dates,
}) => {
  return (
    <Feed categories={categories} tags={tags} posts={posts} dates={dates} />
  )
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
