import mermaid from "mermaid"
import { useEffect } from "react"
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
      .then((elements) => {
        for (let i = 0; i < elements.length; i++) {
          mermaid.render(
            "mermaid" + i,
            elements[i].textContent || "",
            (svgCode: string) => {
              elements[i].innerHTML = svgCode
            }
          )
        }
      })
      .catch((error) => {
        console.warn(error)
      })
  }, [])

  return
}

export default useMermaidEffect
