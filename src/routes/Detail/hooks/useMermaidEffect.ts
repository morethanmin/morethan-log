import mermaid from "mermaid"
import { useEffect } from "react"

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
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    })
    if (!document) return
    waitForMermaid()
      .then(async (elements) => {
        const promises = Array.from(elements).map(async (element, i) => {
          const svg = await mermaid.render(
            "mermaid" + i,
            element.textContent || ""
          ).then(res => res.svg)
          element.innerHTML = svg
        })
        await Promise.all(promises)
      })
      .catch((error) => {
        console.warn(error)
      })
  }, [])

  return
}

export default useMermaidEffect
