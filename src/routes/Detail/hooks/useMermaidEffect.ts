import { useQuery, useQueryClient } from "@tanstack/react-query"
import mermaid from "mermaid"
import { useEffect, useState } from "react"
import { queryKey } from "src/constants/queryKey"
import useScheme from "src/hooks/useScheme"

/**
 *  Wait for mermaid to be defined in the dom
 *  Additionally, verify that the HTML CollectionOf has an array value.
 */
const waitForMermaid = (interval = 100, timeout = 5000) => {
  return new Promise<HTMLCollectionOf<Element>>((resolve, reject) => {
    const startTime = Date.now()
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName("language-mermaid")

    const checkMerMaidCode = () => {
      if (mermaid.render !== undefined && elements.length > 0) {
        resolve(elements)
      } else if (Date.now() - startTime >= timeout) {
        reject(new Error(`mermaid is not defined within the timeout period.`))
      } else {
        setTimeout(checkMerMaidCode, interval)
      }
    }
    checkMerMaidCode()
  })
}
const useMermaidEffect = () => {
  const [memoMermaid, setMemoMermaid] = useState<Map<number, string>>(new Map())

  const { data, isFetched } = useQuery({
    queryKey: queryKey.scheme(),
    enabled: false,
  })

  useEffect(() => {
    if (!isFetched) return
    mermaid.initialize({
      startOnLoad: true,
      theme: (data as "dark" | "light") === "dark" ? "dark" : "default",
    })

    if (!document) return

    waitForMermaid()
      .then(async (elements) => {
        const promises = Array.from(elements)
          .filter((elements) => elements.tagName === "PRE")
          .map(async (element, i) => {
            if (memoMermaid.get(i) !== undefined) {
              const svg = await mermaid
                .render("mermaid" + i, memoMermaid.get(i) || "")
                .then((res) => res.svg)
              element.animate(
                [
                  { easing: "ease-in", opacity: 0 },
                  { easing: "ease-out", opacity: 1 },
                ],
                { duration: 300, fill: "both" }
              )
              element.innerHTML = svg
              return
            }
            const svg = await mermaid
              .render("mermaid" + i, element.textContent || "")
              .then((res) => res.svg)
            setMemoMermaid(memoMermaid.set(i, element.textContent ?? ""))
            element.innerHTML = svg
          })
        await Promise.all(promises)
      })
      .catch((error) => {
        console.warn(error)
      })
  }, [data, isFetched])

  return
}

export default useMermaidEffect
