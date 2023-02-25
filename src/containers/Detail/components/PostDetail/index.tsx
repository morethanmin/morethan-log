import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x"
import { TPost } from "@/src/types"
import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import Category from "@components/Category"

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  blockMap: any
  data: TPost
}

const PostDetail: React.FC<Props> = ({ blockMap, data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <div
      className={`m-auto max-w-4xl bg-white dark:bg-zinc-700 rounded-3xl py-12 px-6 shadow-md`}
    >
      <article className=" m-auto max-w-2xl">
        {category && (
          <Category
            className="mb-2"
            readOnly={data.status?.[0] === "PublicOnDetail"}
          >
            {category}
          </Category>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}
        {blockMap && (
          <div className="-mt-4">
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
        )}
        {data.type[0] === "Post" && (
          <>
            <Footer />
            <CommentBox data={data} />
          </>
        )}
      </article>
    </div>
  )
}

export default PostDetail
