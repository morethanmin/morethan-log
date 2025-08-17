import { TPost } from "src/types"
import React, { useEffect, useRef } from "react"

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    // 이미 스크립트가 추가되어 있으면 중복 방지
    if (containerRef.current.childElementCount > 0) return

    const script = document.createElement("script")
    script.src = "https://utteranc.es/client.js"
    script.async = true
    script.crossOrigin = "anonymous"
    script.setAttribute("repo", "seoseuo/morethan-log")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("label", "Comment")
    script.setAttribute("theme", "github-light")

    containerRef.current.appendChild(script)
  }, [])

  return <div ref={containerRef}></div>
}

export default CommentBox
