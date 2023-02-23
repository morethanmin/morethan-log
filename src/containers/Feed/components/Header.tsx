import { TCategories, TTags } from "@/src/types"
import { useRouter } from "next/router"
import React from "react"

type TOrder = "asc" | "desc"

type Props = {
  data: TCategories
}

const Header: React.FC<Props> = ({ data }) => {
  const router = useRouter()

  const currentCategory = `${router.query.category || ``}` || "📂 All"
  const currentOrder = `${router.query.order || ``}` || ("desc" as TOrder)

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
        {currentCategory} Posts{" "}
        <span className="text-sm align-text-top">
          ({data[currentCategory]})
        </span>
      </div>
      <div className={`flex text-sm gap-2  `}>
        <a
          className={`cursor-pointer ${
            currentOrder === "desc"
              ? "text-black font-bold dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => handleClickOrderBy("desc")}
        >
          Desc
        </a>
        <a
          className={`cursor-pointer ${
            currentOrder === "asc"
              ? "text-black font-bold dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => handleClickOrderBy("asc")}
        >
          Asc
        </a>
      </div>
    </div>
  )
}

export default Header
