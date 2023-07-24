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
  return <Detail recordMap={recordMap} data={post} />
}

DetailPage.getLayout = (page) => {
  const getImage = () => {
    if (page.props?.post.thumbnail) return page.props?.post.thumbnail
    if (CONFIG.ogImageGenerateURL)
      return `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
        page.props?.post.title
      )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Flogo-for-dark-bg.svg`
  }

  const getMetaConfig = () => {
    if (!page.props.post) {
      return {
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }
    }
    return {
      title: page.props.post.title || CONFIG.blog.title,
      date: new Date(
        page.props.post.date?.start_date || page.props.post.createdTime || ""
      ).toISOString(),
      image: getImage(),
      description: page.props.post.summary,
      type: page.props.post.type[0],
      url: `${CONFIG.link}/${page.props.post.slug}`,
    }
  }
  return (
    <>
      <MetaConfig {...getMetaConfig()} />
      {page}
    </>
  )
}

export default DetailPage
