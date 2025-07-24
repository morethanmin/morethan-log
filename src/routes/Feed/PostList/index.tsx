import { useRouter } from "next/router"
import React, { useEffect, useState, useMemo } from "react"
import PostCard from "src/routes/Feed/PostList/PostCard"
import { DEFAULT_CATEGORY } from "src/constants"
import usePostsQuery from "src/hooks/usePostsQuery"
import { useInfiniteScroll } from "src/hooks/useInfiniteScroll"
import styled from "@emotion/styled"

type Props = {
  q: string
}

const POSTS_PER_PAGE = 6

const PostList: React.FC<Props> = ({ q }) => {
  const router = useRouter()
  const data = usePostsQuery()
  const [displayedPosts, setDisplayedPosts] = useState<typeof data>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const currentTag = `${router.query.tag || ``}` || undefined
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY
  const currentOrder = `${router.query.order || ``}` || "desc"

  // 필터링된 전체 포스트
  const filteredPosts = useMemo(() => {
    let newFilteredPosts = data
    // keyword
    newFilteredPosts = newFilteredPosts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(" ") : ""
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(q.toLowerCase())
    })

    // tag
    if (currentTag) {
      newFilteredPosts = newFilteredPosts.filter(
        (post) => post && post.tags && post.tags.includes(currentTag)
      )
    }

    // category
    if (currentCategory !== DEFAULT_CATEGORY) {
      newFilteredPosts = newFilteredPosts.filter(
        (post) =>
          post && post.category && post.category.includes(currentCategory)
      )
    }
    // order
    if (currentOrder !== "desc") {
      newFilteredPosts = newFilteredPosts.reverse()
    }

    return newFilteredPosts
  }, [data, q, currentTag, currentCategory, currentOrder])

  // 필터 조건이 변경되면 페이지 리셋
  useEffect(() => {
    setCurrentPage(1)
    setDisplayedPosts(filteredPosts.slice(0, POSTS_PER_PAGE))
  }, [filteredPosts])

  const hasMore = displayedPosts.length < filteredPosts.length

  const loadMore = () => {
    if (isLoading || !hasMore) return
    
    setIsLoading(true)
    setTimeout(() => {
      const nextPage = currentPage + 1
      const startIndex = (nextPage - 1) * POSTS_PER_PAGE
      const endIndex = startIndex + POSTS_PER_PAGE
      const newPosts = filteredPosts.slice(0, endIndex)
      
      setDisplayedPosts(newPosts)
      setCurrentPage(nextPage)
      setIsLoading(false)
    }, 500) // 로딩 시뮬레이션
  }

  const { loadMoreRef } = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMore,
  })

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {displayedPosts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
        
        {hasMore && (
          <LoadingWrapper ref={loadMoreRef}>
            {isLoading && (
              <LoadingSpinner>
                <div className="spinner" />
                Loading more posts...
              </LoadingSpinner>
            )}
          </LoadingWrapper>
        )}
      </div>
    </>
  )
}

export default PostList

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  min-height: 100px;
`

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray10};
  font-size: 0.875rem;

  .spinner {
    width: 24px;
    height: 24px;
    border: 2px solid ${({ theme }) => theme.colors.gray5};
    border-top: 2px solid ${({ theme }) => theme.colors.gray10};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
