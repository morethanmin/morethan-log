export function getAllTagsFromPosts(posts: any) {
  const taggedPosts = posts.filter((post: any) => post?.tags)
  const tags = [...taggedPosts.map((p: any) => p.tags).flat()]
  const tagObj: any = {}
  tags.forEach((tag) => {
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })
  return tagObj
}
