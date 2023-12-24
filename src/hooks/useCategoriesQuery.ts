import { DEFAULT_CATEGORY } from "@/constants"
import { getAllSelectItemsFromPosts } from "@/libs/utils/notion"

import usePostsQuery from "./usePostsQuery"

export const useCategoriesQuery = () => {
  const posts = usePostsQuery()
  const categories = getAllSelectItemsFromPosts("category", posts)

  return {
    [DEFAULT_CATEGORY]: posts.length,
    ...categories,
  }
}
