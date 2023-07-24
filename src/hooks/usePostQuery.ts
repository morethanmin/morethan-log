import { useQuery } from "@tanstack/react-query"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"

const usePostQuery = () => {
  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(),
    enabled: false,
  })

  if (!data) throw new Error("Posts data is not found")

  return data
}

export default usePostQuery
