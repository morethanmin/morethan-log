import { AppPropsWithLayout } from "../types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
    </QueryClientProvider>
  )
}

export default App
