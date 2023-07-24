import { getAllSelectItemsFromPosts, filterPosts } from "src/libs/utils/notion"
import Feed from "src/routes/Feed"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout, TCategories, TPosts, TTags } from "../types"
import { getPosts } from "../apis"
import { DEFAULT_CATEGORY } from "src/constants"
import MetaConfig from "src/components/MetaConfig"

export async function getStaticProps() {
  try {
    const posts = await getPosts()
    const filteredPost = filterPosts(posts)
    const tags = getAllSelectItemsFromPosts("tags", filteredPost)
    const categories = getAllSelectItemsFromPosts("category", filteredPost)

    return {
      props: {
        tags: {
          ...tags,
        },
        categories: {
          [DEFAULT_CATEGORY]: filteredPost.length,
          ...categories,
        },
        posts: filteredPost,
      },
      revalidate: CONFIG.revalidateTime,
    }
  } catch (error) {
    throw error
  }
}

type Props = {
  categories: TCategories
  tags: TTags
  posts: TPosts
}

const FeedPage: NextPageWithLayout<Props> = ({ categories, tags, posts }) => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Feed categories={categories} tags={tags} posts={posts} />
    </>
  )
}

export default FeedPage
