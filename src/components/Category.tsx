import { useRouter } from "next/router"
import React from "react"
import { COLOR_SET } from "../constants"

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0
    name.split("").forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)))
    const colorKey = sum
      .toString(16)
      ?.[sum.toString(16).length - 1].toUpperCase()
    return COLOR_SET[colorKey]
  } catch {
    return COLOR_SET[0]
  }
}

type Props = {
  className?: string
  children: string
}

const Category: React.FC<Props> = ({ className, children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?category=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className={[
        getColorClassByName(children),
        "opacity-80 px-2 py-1 text-sm rounded-full w-fit cursor-pointer",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}

export default Category
