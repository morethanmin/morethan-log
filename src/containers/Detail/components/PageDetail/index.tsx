import { NotionRenderer } from "react-notion-x"
import { TPost } from "@/src/types"
import React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
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
  blockMap: any
  data: TPost
}

const PageDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <div className="m-auto max-w-4xl">
      <NotionRenderer
        recordMap={blockMap}
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
  )
}

export default PageDetail
