import CONFIG from '@/morethan-log.config'
import Tag from '@components/Tag'
import imageLoader from '@/src/libs/next/imageLoader'
import { TPost } from '@/src/types'
import {formatDate} from '@/src/libs/utils'
import Image from 'next/image'
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
        <nav className="mt-7 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4 mb-3">
            {data.author && data.author[0] && (
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={data.author[0].profile_photo}
                  alt="profile_photo"
                  loader={imageLoader}
                  width={24}
                  height={24}
                />
                <div className="">
                  {`${data.author[0].last_name}${data.author[0].first_name}`}
                </div>
              </div>
            )}
            <div className=" mr-2 md:ml-0">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="flex items-center mb-4">
            {data.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags gap-2">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  )
}

export default PostHeader
