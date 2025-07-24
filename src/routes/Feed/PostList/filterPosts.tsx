import { DEFAULT_CATEGORY } from "src/constants"
import { TPost } from "src/types"
import { parseCategoryHierarchy } from "src/libs/utils/category"

interface FilterPostsParams {
  posts: TPost[]
  q: string
  tag?: string
  category?: string
  order?: string
}

function matchesCategory(postCategories: string[], targetCategory: string): boolean {
  return postCategories.some(postCat => {
    if (postCat === targetCategory) return true
    
    const postHierarchy = parseCategoryHierarchy(postCat)
    const targetHierarchy = parseCategoryHierarchy(targetCategory)
    
    if (!targetHierarchy.minor) {
      return postHierarchy.major === targetHierarchy.major
    }
    
    return postHierarchy.major === targetHierarchy.major && 
           postHierarchy.minor === targetHierarchy.minor
  })
}

export function filterPosts({
  posts,
  q,
  tag = undefined,
  category = DEFAULT_CATEGORY,
  order = "desc",
}: FilterPostsParams): TPost[] {
  return posts
    .filter((post) => {
      const tagContent = post.tags ? post.tags.join(" ") : ""
      const searchContent = post.title + post.summary + tagContent
      return (
        searchContent.toLowerCase().includes(q.toLowerCase()) &&
        (!tag || (post.tags && post.tags.includes(tag))) &&
        (category === DEFAULT_CATEGORY ||
          (post.category && matchesCategory(post.category, category)))
      )
    })
    .sort((a, b) => {
      const dateA = new Date(a.date.start_date).getTime()
      const dateB = new Date(b.date.start_date).getTime()
      return order === "desc" ? dateB - dateA : dateA - dateB
    })
}
