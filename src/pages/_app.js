import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import CONFIG from '@/blog.config'
import dynamic from 'next/dynamic'
import { LocaleProvider } from '@/lib/locale'
import Scripts from '@/components/Scripts'

const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Scripts />
      <LocaleProvider>
        <>
          {CONFIG.isProd && CONFIG?.googleAnalytics?.enable === true && <Gtag />}
          {getLayout(<Component {...pageProps} />)}
        </>
      </LocaleProvider>
    </>
  )
}

export default MyApp
