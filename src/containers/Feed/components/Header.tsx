import { TTags } from '@/src/types'
import { useRouter } from 'next/router'
import React from 'react'

type TOrder = 'asc' | 'desc'

type Props = {
  tags: TTags
}

export const PinnedHeader: React.FC<Props> = ({ tags }) => {
  return tags["Pinned"] == undefined ? null :
  (
    <div className="flex border-b border-gray-300 mb-4 justify-between items-center ">
      <div className="text-xl font-bold my-2 dark:text-white">
        📌 Pinned Posts
      </div>
    </div>
  )
}

export const PostHeader: React.FC<Props> = ({ tags }) => {
  const router = useRouter()

  const currentTag = `${router.query.tag || ``}` || 'All'
  const currentOrder = `${router.query.order || ``}` || ('desc' as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }

  return (
    <div className="flex border-b border-gray-300 mb-4 justify-between items-center ">
      <div className="text-xl font-bold my-2 dark:text-white">
        {currentTag} Posts{' '}
        <span className="text-sm align-text-top">({tags[currentTag]})</span>
      </div>
      <div className={`flex text-sm gap-2  `}>
        <a
          className={`cursor-pointer ${
            currentOrder === 'desc'
              ? 'text-black font-bold dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => handleClickOrderBy('desc')}
        >
          Desc
        </a>
        <a
          className={`cursor-pointer ${
            currentOrder === 'asc'
              ? 'text-black font-bold dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => handleClickOrderBy('asc')}
        >
          Asc
        </a>
      </div>
    </div>
  )
}

export default PostHeader
