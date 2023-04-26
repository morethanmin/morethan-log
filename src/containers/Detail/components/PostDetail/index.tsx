import { NotionRenderer } from "react-notion-x"
import dynamic from "next/dynamic"
import { TPost } from "@/src/types"
import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import Category from "@components/Category"
import Image from "next/image"
import Link from "next/link"
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
