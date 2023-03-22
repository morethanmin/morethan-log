import { TPosts } from "@/src/types"

export function getAllSelectItemsFromPosts(
  key: "tags" | "category",
  posts: TPosts
) {
  const selectedPosts = posts.filter((post) => post?.[key])
  const items = [...selectedPosts.map((p) => p[key]).flat()]
  const itemObj: { [itemName: string]: number } = {}
  items.forEach((item) => {
    if (!item) return
    if (item in itemObj) {
      itemObj[item]++
    } else {
      itemObj[item] = 1
    }
  })
  return itemObj
}

export function getDatesFromPosts(key: "date", posts: TPosts) {
  const yearReg = /^(\d+)-/
  const selectedPosts = posts.filter((post) => post?.[key])
  const items = [
    ...selectedPosts
      .map((p) => yearReg.exec(p[key]?.start_date || "")?.[1] || "")
      .flat(),
  ]
  const itemObj: { [itemName: string]: number } = {}
  items.forEach((item) => {
    if (!item) return
    if (item in itemObj) {
      itemObj[item]++
    } else {
      itemObj[item] = 1
    }
  })
  return itemObj
}
