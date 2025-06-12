import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ExtendedRecordMap } from "notion-types"
import useScheme from "src/hooks/useScheme"

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-javascript"
// import "prismjs/components/prism-typescript"
// import "prismjs/components/prism-jsx"
// import "prismjs/components/prism-tsx"
// import "prismjs/components/prism-python"
// import "prismjs/components/prism-markup"
// import "prismjs/components/prism-bash"
// import "prismjs/components/prism-json"
// import "prismjs/components/prism-css"
// import "prismjs/components/prism-scss"
// import "prismjs/components/prism-java"
// import "prismjs/components/prism-c"
// import "prismjs/components/prism-cpp"
// import "prismjs/components/prism-go"
// import "prismjs/components/prism-rust"

// used for rendering equations (optional)

import "katex/dist/katex.min.css"
import { FC } from "react"
import styled from "@emotion/styled"

const _NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
)

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => m.Code)
)

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  recordMap: ExtendedRecordMap
}

const NotionRenderer: FC<Props> = ({ recordMap }) => {
  const [scheme] = useScheme()
  return (
    <StyledWrapper>
      <_NotionRenderer
        darkMode={scheme === "dark"}
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      />
    </StyledWrapper>
  )
}

export default NotionRenderer

const StyledWrapper = styled.div`
  /* // TODO: why render? */
  .notion-collection-page-properties {
    display: none !important;
  }
  .notion-page {
    padding: 0;
  }
  .notion-list {
    width: 100%;
  }
  /* 모바일 테이블 가로 스크롤 */
  .notion-simple-table {
    width: 100%;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .notion-simple-table > tbody,
  .notion-simple-table > thead {
    display: table;
    width: 100%;
    min-width: max-content;
  }
  .notion-simple-table th,
  .notion-simple-table td {
    white-space: pre-wrap;
    word-break: break-word;
    padding: 8px;
    vertical-align: top;
  }
  .notion-quote {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .notion-callout {
    font-size: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
  /* 인라인 코드가 길어질 때 좌우 스크롤 처리 */
  .notion-inline-code {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    vertical-align: middle;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
  }
    
  /* 공통 코드 블럭 스타일 (가독성 향상) */
  .notion-code {
    font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
    font-size: 0.8em;
    border-radius: 6px;
    margin: 1em 0;
    padding: 1em;
    overflow-x: auto;
    /* 혹시 border가 필요하면 아래 추가 */
    /* border: 1px solidrgb(67, 63, 96); */
  }
`