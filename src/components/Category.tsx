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
  readOnly?: boolean
}

const Category: React.FC<Props> = ({
  readOnly = false,
  className,
  children,
}) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    if (readOnly) return
    router.push(`/?category=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className={[
        getColorClassByName(children),
        !readOnly ? "cursor-pointer" : "",
        "opacity-90 px-2 py-1 text-sm rounded-full w-fit",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}

export default Category
