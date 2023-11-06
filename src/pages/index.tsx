import { GetStaticProps } from "next"

import { dehydrate } from "@tanstack/react-query"

import { getPosts } from "@/apis"
import MetaConfig from "@/components/MetaConfig"
import { queryKey } from "@/constants/queryKey"
import { queryClient } from "@/libs/react-query"
import { filterPosts } from "@/libs/utils/notion"
import Feed from "@/routes/Feed"
import { NextPageWithLayout } from "@/types"
import { CONFIG } from "site.config"

export const getStaticProps: GetStaticProps = async () => {
  const posts = filterPosts(await getPosts())
  await queryClient.prefetchQuery(queryKey.posts(), () => posts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  }
}

const FeedPage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Feed />
    </>
  )
}

export default FeedPage
