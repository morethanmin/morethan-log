import { createContext } from "react"
const PostContext = createContext<{ post: any }>({
  post: null,
})

export default PostContext
