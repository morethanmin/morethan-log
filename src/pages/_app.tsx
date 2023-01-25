import "prismjs/themes/prism.css"
import "react-notion-x/src/styles.css"
import "katex/dist/katex.min.css"
import "@styles/globals.css"
import "@styles/notion.css"
import useThemeEffect from "@hooks/useThemeEffect"
import useGtagEffect from "@hooks/useGtagEffect"
import Scripts from "@components/Scripts"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import langs from "../locales"

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const { locale } = useRouter() as any
  const mesg = langs.find((lang: any) => lang.code === locale)
  useThemeEffect()
  useGtagEffect()

  return (
    <>
      <Scripts />
      <IntlProvider locale={locale} messages={mesg?.file}>
        <div dir={mesg?.dir}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </IntlProvider>
    </>
  )
}

export default MyApp
