import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Global, css } from "@emotion/react"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)
    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])

  return (
    <>
      <Global
        styles={css`
          /* nprogress 커스텀 */
          #nprogress {
            pointer-events: none;
          }
          #nprogress .bar {
            background: #6366f1;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
          }
          #nprogress .peg {
            display: none;
          }
          #nprogress .spinner {
            display: none;
          }
        `}
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default App
