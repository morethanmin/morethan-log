import { useState } from 'react'
import Post from '@/src/components/_shared/PostCard'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import TagsMenu from './_shared/Tags'
import Profile from './_shared/Profile'
import Chennel from './_shared/Chennel'
import CONFIG from '@/blog.config'

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

const Home = ({ tags, posts }) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  const handleClickOrderBy = (value) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }
  const currentTag = router.query.tag || '전체'
  const currentOrder = router.query.order || 'asc'

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      {/* left */}
      <div className="col-span-2  ">
        <TagsMenu data={tags} />
      </div>
      {/* center */}
      <div className="col-span-12 md:col-span-10  lg:col-span-7 ">
        {/* search */}
        <div className="p-1 mb-3 dark:text-white">🔎 Search</div>
        <input
          className="rounded-2xl px-5 py-2  mb-8 w-full bg-gray-200 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md outline-none transition"
          type="text"
          placeholder="포스트 검색하기.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {/* order */}
        <div className="flex border-b border-gray-300 mb-4 justify-between items-center ">
          <div className="text-xl font-bold my-2 dark:text-white">
            {currentTag} 포스트{' '}
            <span className="text-sm align-text-top">({tags[currentTag]})</span>
          </div>
          <div className={`flex text-sm gap-2  `}>
            <a
              className={`cursor-pointer ${
                currentOrder === 'asc'
                  ? 'text-black font-bold dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => handleClickOrderBy('asc')}
            >
              최신순
            </a>
            <a
              className={`cursor-pointer ${
                currentOrder === 'desc'
                  ? 'text-black font-bold dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => handleClickOrderBy('desc')}
            >
              오래된순
            </a>
          </div>
        </div>
        {/* article */}
        <div className="my-2">
          {!filteredBlogPosts.length && (
            <p className="text-gray-500 dark:text-gray-300">
              게시글이 없습니다. 😺
            </p>
          )}
          {filteredBlogPosts.slice(0, 20).map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block col-span-3">
        <Profile />
        <Chennel />
        {/* footer */}
        <div className="text-gray-500 text-sm mt-3">
          © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
        </div>
      </div>
    </div>
  )
}
Home.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string,
}
export default Home
