import { DEFAULT_CATEGORY } from "src/constants"
import { TPost } from "src/types"

interface FilterPostsParams {
  posts: TPost[]
  q: string
  tag?: string
  category?: string
  order?: string
}

function matchesCategory(postCategories: string[], targetCategory: string): boolean {
  return postCategories.some(postCat => {
    // 정확한 매치
    if (postCat === targetCategory) return true
    
    // '/' 구분으로 첫 번째 요소 비교 (대분류 매치)
    const postFirstPart = postCat.split('/')[0]?.trim()
    const targetFirstPart = targetCategory.split('/')[0]?.trim()
    
    if (postFirstPart === targetFirstPart) return true
    
    return false
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
