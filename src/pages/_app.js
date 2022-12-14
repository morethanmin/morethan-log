import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@styles/globals.css'
import '@styles/notion.css'
import { LocaleProvider } from '@libs/locale'
import Scripts from '@components/Scripts'
import useThemeEffect from '@hooks/useThemeEffect'
import useGtagEffect from '@hooks/useGtagEffect'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  useThemeEffect()
  useGtagEffect()

  return (
    <>
      <Scripts />
      <LocaleProvider>
        {getLayout(<Component {...pageProps} />)}
      </LocaleProvider>
    </>
  )
}

export default MyApp
