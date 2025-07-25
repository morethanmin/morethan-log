import { useEffect, useRef, useState } from "react"

interface UseInfiniteScrollProps {
  hasMore: boolean
  isLoading: boolean
  onLoadMore: () => void
}

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
}: UseInfiniteScrollProps) => {
  const [isFetching, setIsFetching] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting && hasMore && !isLoading && !isFetching) {
          setIsFetching(true)
          onLoadMore()
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = loadMoreRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasMore, isLoading, isFetching, onLoadMore])

  useEffect(() => {
    if (!isLoading) {
      setIsFetching(false)
    }
  }, [isLoading])

  return { loadMoreRef, isFetching }
}