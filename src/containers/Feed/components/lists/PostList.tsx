import PostCard from "@components/PostCard"
import { TPosts } from "@/src/types"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { DEFAULT_CATEGORY } from "@/src/constants"

type Props = {
  q: string
  posts: TPosts
}

const PostList: React.FC<Props> = ({ q, posts }) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const postsPerPage = 15

  const currentTag = `${router.query.tag || ``}` || undefined
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY
  const currentOrder = `${router.query.order || ``}` || "desc"

  useEffect(() => {
    setFilteredPosts(() => {
      let filteredPosts = posts
      // keyword
      filteredPosts = filteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(" ") : ""
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })

      // tag
      if (currentTag) {
        filteredPosts = filteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }

      // category
      if (currentCategory !== DEFAULT_CATEGORY) {
        filteredPosts = filteredPosts.filter(
          (post) =>
            post && post.category && post.category.includes(currentCategory)
        )
      }
      // order
      if (currentOrder !== "desc") {
        filteredPosts = filteredPosts.reverse()
      }

      return filteredPosts
    })
  }, [q, currentTag, currentCategory, currentOrder, setFilteredPosts, posts])

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo(0, 0) // Scroll to top of the page
  }

  // Calculate the index of the last post on the current page
  const indexOfLastPost = currentPage * postsPerPage

  // Calculate the index of the first post on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // Get the current posts to display on the current page
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <div className="my-2">
        {!currentPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {currentPosts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>

      {/* Render pagination */}
      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-2 ${
              currentPage === page ? "font-bold text-gray-500 dark:text-white hover:bg-[#FFC288] dark:hover:bg-zinc-800" : "text-gray-500 dark:text-white hover:bg-[#FFC288] dark:hover:bg-zinc-800"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

    </>
  )
}

export default PostList
