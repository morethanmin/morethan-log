import { useState } from 'react'
import Post from '@/src/components/_shared/PostCard'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Image from 'next/image'
import CONFIG from '@/blog.config'
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
} from 'react-icons/ai'

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

  const handleClickTag = (value) => {
    router.push({
      query: {
        ...router.query,
        tag: value,
      },
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
      <div className="col-span-2  ">
        <div className="p-1 mb-3">🏷️ Tags</div>
        <ul className="cursor-pointer flex overflow-x-scroll md:block mb-6">
          {Object.keys(tags).map((key) => (
            <li
              key={key}
              className={`text-sm  p-1 px-4 my-1 flex-shrink-0 rounded-xl text-gray-500  ${
                key === currentTag && 'bg-white text-black'
              }`}
              onClick={() => handleClickTag(key)}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 md:col-span-10  lg:col-span-7 ">
        <div className="p-1 mb-3">🔎 Search</div>
        <input
          className="rounded-2xl px-5 py-2  mb-8 w-full bg-gray-200 focus:bg-white focus:shadow-md outline-none transition"
          type="text"
          placeholder="포스트 검색하기"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="flex border-b border-gray-300 mb-4 justify-between items-center ">
          <div className="text-xl font-bold my-2 ">{currentTag} 포스트</div>
          <div className={`flex text-sm gap-2  `}>
            <div
              className={`cursor-pointer ${
                currentOrder === 'asc'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => handleClickOrderBy('asc')}
            >
              최신순
            </div>
            <div
              className={`cursor-pointer ${
                currentOrder === 'desc'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => handleClickOrderBy('desc')}
            >
              오래된순
            </div>
          </div>
        </div>
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
      <div className="hidden lg:block col-span-3">
        <div className="p-1 mb-3">💻 Profile</div>
        <div className="w-full p-8 rounded-t-2xl bg-white">
          <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
            <Image
              className="block hover:hidden"
              src={CONFIG.image[0]}
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className="rounded-b-2xl bg-white p-2 mb-9 flex flex-col items-center">
          <div className=" text-xl mb-3 italic font-bold">morethanmin</div>
          <div className="mb-6 text-sm ">frontend developer</div>
        </div>
        <div className="p-1 mb-3">🌐 Chennel</div>
        <ul className="rounded-2xl bg-white p-1 flex flex-col">
          <a
            href="https://github.com/morethanmin"
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <AiOutlineGithub className="text-2xl" />
            <div className="text-sm">morethanmin</div>
          </a>
          <a
            href="https://www.instagram.com/more_dev_min/"
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <AiOutlineInstagram className="text-2xl" />
            <div className="text-sm">@more_dev_min</div>
          </a>
          <a
            href="mailto:morethanmin.dev@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <AiOutlineMail className="text-2xl" />
            <div className="text-sm">morethanmin.dev@gmail.com</div>
          </a>
        </ul>
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
