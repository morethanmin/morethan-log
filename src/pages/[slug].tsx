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
// [slug].tsx

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // 빈 배열이면 아무 페이지도 미리 생성하지 않음
    fallback: 'blocking', // 요청 시 최초 생성 (ISR)
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const slug = context.params?.slug

    const posts = await getPosts()
    const feedPosts = filterPosts(posts)
    await queryClient.prefetchQuery(queryKey.posts(), () => feedPosts)

    const detailPosts = filterPosts(posts, filter)
    const postDetail = detailPosts.find((t: any) => t.slug === slug)

    if (!postDetail) {
      return { notFound: true }
    }

    const recordMap = await getRecordMap(postDetail.id)

    await queryClient.prefetchQuery(queryKey.post(`${slug}`), () => ({
      ...postDetail,
      recordMap,
    }))

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: CONFIG.revalidateTime, // ISR
    }
  } catch (error) {
    console.error(`Error generating static props for slug: ${context.params?.slug}`, error)
    return {
      notFound: true,
    }
  }
}
