import { TTags } from "@customTypes/index"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  className?: string
  data: TTags
}

const TagList: React.FC<Props> = ({ className, data }) => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <div className={className}>
      <div className="hidden lg:block p-1 mb-3 dark:text-white">🏷️ Tags</div>
      <ul className="gap-1 flex mobile-x-scroll lg:block mb-6">
        {Object.keys(data).map((key) => (
          <li
            key={key}
            className={`cursor-pointer text-sm p-1 px-4 my-1 flex-shrink-0 rounded-xl text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800 ${
              key === currentTag &&
              "text-black bg-white dark:bg-zinc-700 hover:bg-white dark:hover:bg-zinc-700"
            }`}
            onClick={() => handleClickTag(key)}
          >
            <a>{key}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagList
