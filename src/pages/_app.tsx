import useGtagEffect from "src/hooks/useGtagEffect"
import Scripts from "src/components/Scripts"
import { AppPropsWithLayout } from "../types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RootLayout from "src/layouts/RootLayout"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  useGtagEffect()

  return (
    <QueryClientProvider client={queryClient}>
      <Scripts />
      <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
    </QueryClientProvider>
  )
}

export default MyApp
