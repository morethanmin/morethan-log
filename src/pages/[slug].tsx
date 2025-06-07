// import { dehydrate } from "@tanstack/react-query"
// import { GetStaticPaths, GetStaticProps } from "next"
// import { CONFIG } from "site.config"
// import { getPosts, getRecordMap } from "src/apis"
// import MetaConfig from "src/components/MetaConfig"
// import { queryKey } from "src/constants/queryKey"
// import usePostQuery from "src/hooks/usePostQuery"
// import { queryClient } from "src/libs/react-query"
// import { filterPosts } from "src/libs/utils/notion"
// import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts"
// import Detail from "src/routes/Detail"
// import CustomError from "src/routes/Error"
// import { NextPageWithLayout } from "../types"

// const filter: FilterPostsOptions = {
//   acceptStatus: ["Public", "PublicOnDetail"],
//   acceptType: ["Paper", "Post", "Page"],
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getPosts()
//   const filteredPost = filterPosts(posts, filter)

//   return {
//     paths: filteredPost.map((row) => ({ params: { slug: row.slug } })),
//     fallback: true,
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const slug = context.params?.slug

//   const posts = await getPosts()
//   const feedPosts = filterPosts(posts)
//   await queryClient.prefetchQuery(queryKey.posts(), () => feedPosts)

//   const detailPosts = filterPosts(posts, filter)
//   const postDetail = detailPosts.find((t: any) => t.slug === slug)

//   if (!postDetail) {
//     return { notFound: true }
//   }

//   const recordMap = await getRecordMap(postDetail.id)

//   await queryClient.prefetchQuery(queryKey.post(`${slug}`), () => ({
//     ...postDetail,
//     recordMap,
//   }))

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: CONFIG.revalidateTime,
//   }
// }

// const DetailPage: NextPageWithLayout = () => {
//   const post = usePostQuery()

//   if (!post) return <CustomError />

//   const image =
//     post.thumbnail ??
//     CONFIG.ogImageGenerateURL ??
//     `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`

//   const date = post.date?.start_date || post.createdTime || ""

//   const meta = {
//     title: post.title,
//     date: new Date(date).toISOString(),
//     image: image,
//     description: post.summary || "",
//     type: post.type[0],
//     url: `${CONFIG.link}/${post.slug}`,
//   }

//   return (
//     <>
//       <MetaConfig {...meta} />
//       <Detail />
//     </>
//   )
// }

// DetailPage.getLayout = (page) => {
//   return <>{page}</>
// }

// export default DetailPage

import { dehydrate } from "@tanstack/react-query"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { CONFIG } from "site.config"
import { getPosts } from "src/apis"
import MetaConfig from "src/components/MetaConfig"
import { queryKey } from "src/constants/queryKey"
import usePostQuery from "src/hooks/usePostQuery"
import { queryClient } from "src/libs/react-query"
import { filterPosts } from "src/libs/utils/notion"
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts"
import Detail from "src/routes/Detail"
import CustomError from "src/routes/Error"
import { NextPageWithLayout } from "../types"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking", // 요청 시 페이지 생성
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const slug = context.params?.slug
    if (typeof slug !== "string") return { notFound: true }

    const posts = await getPosts()
    const feedPosts = filterPosts(posts)
    await queryClient.prefetchQuery(queryKey.posts(), () => feedPosts)

    const filter: FilterPostsOptions = {
      acceptStatus: ["Public", "PublicOnDetail"],
      acceptType: ["Paper", "Post", "Page"],
    }

    const detailPosts = filterPosts(posts, filter)
    const postDetail = detailPosts.find((t: any) => t.slug === slug)

    if (!postDetail) return { notFound: true }

    await queryClient.prefetchQuery(queryKey.post(`${slug}`), () => postDetail) // recordMap 제거

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: CONFIG.revalidateTime,
    }
  } catch (error) {
    console.error(`Error generating static props for slug: ${context.params?.slug}`, error)
    return { notFound: true }
  }
}

const DetailPage: NextPageWithLayout = () => {
  const post = usePostQuery()
  const [recordMap, setRecordMap] = useState<any>(null)

  useEffect(() => {
    if (post && !recordMap) {
      import("src/apis/notion-client/getRecordMap").then(({ getRecordMap }) => {
        getRecordMap(post.id).then(setRecordMap).catch(console.error)
      })
    }
  }, [post])

  if (!post) return <CustomError />
  if (!recordMap) return <div style={{ padding: "2rem" }}>로딩 중...</div>

  const image =
    post.thumbnail ??
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`

  const date = post.date?.start_date || post.createdTime || ""

  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image,
    description: post.summary || "",
    type: post.type[0],
    url: `${CONFIG.link}/${post.slug}`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Detail recordMap={recordMap} />
    </>
  )
}

DetailPage.getLayout = (page) => page

export default DetailPage
