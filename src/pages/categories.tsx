import { GetStaticProps } from "next"
import { dehydrate } from "@tanstack/react-query"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "../types"
import { getPosts } from "../apis"
import MetaConfig from "src/components/MetaConfig"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/constants/queryKey"
import { filterPosts } from "src/libs/utils/notion"
import Categories from "src/routes/Categories"

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

const CategoriesPage: NextPageWithLayout = () => {
  const meta = {
    title: `Categories - ${CONFIG.blog.title}`,
    description: "Browse posts by category",
    type: "website",
    url: `${CONFIG.link}/categories`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Categories />
    </>
  )
}

export default CategoriesPage