import CONFIG from '@/morethan-log.config'
import Tag from '@/src/components/Tag'
import { TPost } from '@/src/types/post'
import formatDate from '@libs/formatDate'
import React from 'react'

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-3xl text-black dark:text-white">
        {data.title}
      </h1>
      {data.type[0] !== 'Page' && (
        <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
          <div className="mr-2 mb-4 md:ml-0">
            {formatDate(
              data?.date?.start_date || data.createdTime,
              CONFIG.lang
            )}
          </div>
          {data.tags && (
            <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags gap-2">
              {data.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </nav>
      )}
    </>
  )
}

export default PostHeader
