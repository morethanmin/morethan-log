import { useEffect } from "react"
import mermaid from "mermaid"

const useMermaidEffect = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    })
    if (!document) return
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName("language-mermaid")
    if (!elements) return

    for (let i = 0; i < elements.length; i++) {
      mermaid.render(
        "mermaid" + i,
        elements[i].textContent || "",
        (svgCode: string) => {
          elements[i].innerHTML = svgCode
        }
      )
    }
  }, [])

  return
}

export default useMermaidEffect
