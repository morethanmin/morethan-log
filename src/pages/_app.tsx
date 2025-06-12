import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import "src/styles/table.css"
import Head from "next/head"
import { Global } from "@emotion/react"
import { notionCustomStyles } from "src/styles/notion-custom"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Global styles={notionCustomStyles} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default App