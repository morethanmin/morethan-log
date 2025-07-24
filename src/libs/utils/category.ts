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

    // 포스트별로 대분류를 한 번만 카운트하기 위해 Set 사용
    const majorCategoriesInPost = new Set<string>()
    
    post.category.forEach(categoryStr => {
      const { major, minor } = parseCategoryHierarchy(categoryStr)
      
      if (!majorCategories[major]) {
        majorCategories[major] = {
          count: 0,
          minorCategories: {}
        }
      }

      // 대분류를 Set에 추가 (중복 방지)
      majorCategoriesInPost.add(major)

      if (minor) {
        if (!majorCategories[major].minorCategories[minor]) {
          majorCategories[major].minorCategories[minor] = 0
        }
        majorCategories[major].minorCategories[minor]++
      }
    })

    // 포스트에 포함된 각 대분류의 카운트를 1씩 증가
    majorCategoriesInPost.forEach(major => {
      majorCategories[major].count++
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