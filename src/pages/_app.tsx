import "prismjs/themes/prism.css"
import "react-notion-x/src/styles.css"
import "katex/dist/katex.min.css"

import "src/styles/globals.css"
import "src/styles/notion.css"
import useThemeEffect from "src/hooks/useThemeEffect"
import useGtagEffect from "src/hooks/useGtagEffect"
import Scripts from "src/components/Scripts"
import { AppPropsWithLayout } from "../types"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  useThemeEffect()
  useGtagEffect()

  return (
    <>
      <Scripts />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
