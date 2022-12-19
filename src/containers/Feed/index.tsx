import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Post from '@components/PostCard'
import TagsMenu from './components/Tags'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Service from './components/Service'

import CONFIG from 'c4cydonia.config'

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

export type Tags = {
  [tagName: string]: number
}

// TODO: typing
export type Posts = any[]

type Props = {
  tags: Tags
  posts: any[]
}

const Feed: React.FC<Props> = ({ tags, posts }) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const currentTag = `${router.query.tag || ``}` || 'All'
  const currentOrder = `${router.query.order || ``}` || 'asc'

  useEffect(() => {
    setFilteredPosts(() => {
      let filteredPosts = posts
      // keyword
      filteredPosts = filteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(' ') : ''
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
      })

      // tag
      if (currentTag !== 'All') {
        filteredPosts = filteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }
      // order
      if (currentOrder !== 'asc') {
        filteredPosts = filteredPosts.reverse()
      }

      return filteredPosts
    })
  }, [searchValue, currentTag, currentOrder])

  const handleClickOrderBy = (value: any) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }

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
          className="rounded-2xl px-5 py-2 mb-8 w-full bg-gray-200 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md outline-none transition"
          type="text"
          placeholder="search keyword.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {/* order */}
        <div className="flex border-b border-gray-300 mb-4 justify-between items-center ">
          <div className="text-xl font-bold my-2 dark:text-white">
            {currentTag} Posts{' '}
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
              Desc
            </a>
            <a
              className={`cursor-pointer ${
                currentOrder === 'desc'
                  ? 'text-black font-bold dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => handleClickOrderBy('desc')}
            >
              Asc
            </a>
          </div>
        </div>
        {/* article */}
        <div className="my-2">
          {!filteredPosts.length && (
            <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
          )}
          {filteredPosts.slice(0, 20).map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block col-span-3">
        <Profile />
        <Service />
        <Contact />
        <div className="text-gray-500 text-sm mt-3">
          © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
        </div>
      </div>
    </div>
  )
}

export default Feed
