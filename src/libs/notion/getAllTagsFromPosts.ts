import { TPosts } from '@/src/types'

export function getAllTagsFromPosts(posts: TPosts) {
  const taggedPosts = posts.filter((post) => post?.tags)
  const tags = [...taggedPosts.map((p) => p.tags).flat()]
  const tagObj: { [tagName: string]: number } = {}
  tags.forEach((tag) => {
    if (!tag) return
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })
  return tagObj
}
