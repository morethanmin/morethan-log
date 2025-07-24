import { TPost, TCategoryHierarchy, TMajorCategories } from "src/types"

/**
 * 카테고리 문자열을 대분류/중분류로 파싱
 * 형식: "대분류/중분류" 또는 "대분류"
 */
export const parseCategoryHierarchy = (category: string): TCategoryHierarchy => {
  const parts = category.split('/')
  return {
    major: parts[0]?.trim() || "",
    minor: parts[1]?.trim()
  }
}

/**
 * 포스트 배열에서 대분류별 카테고리 구조 생성
 */
export const getMajorCategoriesFromPosts = (posts: TPost[]): TMajorCategories => {
  const majorCategories: TMajorCategories = {}

  posts.forEach(post => {
    if (!post.category) return

    post.category.forEach(categoryStr => {
      const { major, minor } = parseCategoryHierarchy(categoryStr)
      
      if (!majorCategories[major]) {
        majorCategories[major] = {
          count: 0,
          minorCategories: {}
        }
      }

      majorCategories[major].count++

      if (minor) {
        if (!majorCategories[major].minorCategories[minor]) {
          majorCategories[major].minorCategories[minor] = 0
        }
        majorCategories[major].minorCategories[minor]++
      }
    })
  })

  return majorCategories
}

/**
 * 특정 대분류의 포스트 필터링
 */
export const filterPostsByMajorCategory = (posts: TPost[], majorCategory: string): TPost[] => {
  return posts.filter(post => 
    post.category?.some(cat => parseCategoryHierarchy(cat).major === majorCategory)
  )
}

/**
 * 특정 중분류의 포스트 필터링 
 */
export const filterPostsByMinorCategory = (posts: TPost[], majorCategory: string, minorCategory: string): TPost[] => {
  return posts.filter(post => 
    post.category?.some(cat => {
      const { major, minor } = parseCategoryHierarchy(cat)
      return major === majorCategory && minor === minorCategory
    })
  )
}

/**
 * 전체 카테고리 경로로 포스트 필터링
 */
export const filterPostsByCategory = (posts: TPost[], categoryPath: string): TPost[] => {
  return posts.filter(post => 
    post.category?.includes(categoryPath)
  )
}