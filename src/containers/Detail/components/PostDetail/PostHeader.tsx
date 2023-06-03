import CONFIG from "@/site.config"
import Tag from "@components/Tag"
import { TPost } from "@/src/types"
import { formatDate } from "@/src/libs/utils"
import Image from "next/image"
import React from "react"

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-3xl text-black dark:text-white">
        {data.title}
      </h1>
      {data.type[0] !== "Paper" && (
        <nav className="mt-6 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3 mb-3">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={24}
                    height={24}
                  />
                  <div className="">{data.author[0].name}</div>
                </div>
                <div className="self-stretch w-px my-1 bg-gray-300"></div>
              </>
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
          {data.thumbnail && (
            <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-700 mb-7 rounded-3xl overflow-hidden">
              <Image
                src={data.thumbnail}
                className="object-cover"
                layout="fill"
                alt={data.title}
              />
            </div>
          )}
        </nav>
      )}
    </>
  )
}

export default PostHeader
