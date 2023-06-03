import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x"
import { TPost } from "@/src/types"
import React from "react"

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
          equation: Equation,
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        mapPageUrl={mapPageUrl}
      />
    </div>
  )
}

export default PageDetail
