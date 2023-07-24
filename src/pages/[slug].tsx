import Detail from "src/routes/Detail"
import { filterPosts } from "src/libs/utils/notion"
import { CONFIG } from "site.config"
import { NextPageWithLayout, TPost } from "../types"
import CustomError from "src/routes/Error"
import { getRecordMap, getPosts } from "src/apis"
import MetaConfig from "src/components/MetaConfig"
import { ExtendedRecordMap } from "notion-types"
import { GetStaticProps } from "next"

export async function getStaticPaths() {
  const posts = await getPosts()
  const filteredPost = filterPosts(posts, {
    acceptStatus: ["Public", "PublicOnDetail"],
    acceptType: ["Paper", "Post", "Page"],
  })

  return {
    paths: filteredPost.map((row) => `/${row.slug}`),
    fallback: true,
  }
}

type Props = {
  post?: TPost
  recordMap?: ExtendedRecordMap
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug

  try {
    const posts = await getPosts()
    const post = posts.find((t: any) => t.slug === slug)
    const recordMap = await getRecordMap(post?.id!)

    return {
      props: { post, recordMap },
      revalidate: CONFIG.revalidateTime,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: CONFIG.revalidateTime,
    }
  }
}

const DetailPage: NextPageWithLayout<Props> = ({ post, recordMap }) => {
  if (!post || !recordMap) return <CustomError />

  const image =
    post.thumbnail ??
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`

  const date = post.date?.start_date || post.createdTime || ""

  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image: image,
    description: post.summary || "",
    type: post.type[0],
    url: `${CONFIG.link}/${post.slug}`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Detail recordMap={recordMap} data={post} />
    </>
  )
}

DetailPage.getLayout = (page) => {
  return <>{page}</>
}

export default DetailPage
