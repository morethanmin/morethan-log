import { useQuery, useQueryClient } from "@tanstack/react-query"
import { setCookie } from "cookies-next"
import { queryKey } from "src/constants/queryKeys"

type Scheme = "light" | "dark"
type SetScheme = (scheme: Scheme) => void

const useScheme = (): [Scheme, SetScheme] => {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: queryKey.scheme(),
    enabled: false,
  })

  const scheme = data === "light" ? "light" : "dark"

  const setScheme = (scheme: "light" | "dark") => {
    setCookie("scheme", scheme)

    queryClient.setQueryData(queryKey.scheme(), scheme)
  }

  return [scheme, setScheme]
}

export default useScheme
