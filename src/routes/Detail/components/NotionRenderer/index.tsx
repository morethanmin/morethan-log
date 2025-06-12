import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ExtendedRecordMap } from "notion-types"
import useScheme from "src/hooks/useScheme"
import { FC } from "react"
import { Global } from "@emotion/react"
import { notionCustomStyles } from "src/styles/notion-custom"
import styled from "@emotion/styled"

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
    <>
      <Global styles={notionCustomStyles} />
      <div>
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
      </div>
    </>
  )
}

export default NotionRenderer