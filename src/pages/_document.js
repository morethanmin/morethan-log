import Document, { Html, Head, Main, NextScript } from 'next/document'
import CONFIG from '@/blog.config'
import CJK from '@/lib/cjk'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang={CONFIG.lang}
      >
        <Head>
          {/* 폰트 설정 */}
          <>
            <link
              rel="preload"
              href="/fonts/SourceSerif.var.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/SourceSerif-Italic.var.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          </>
          {['zh', 'ja', 'ko'].includes(
            CONFIG.lang.slice(0, 2).toLocaleLowerCase()
          ) && (
              <>
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="anonymous"
                />
                <link
                  rel="preload"
                  as="style"
                  href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${CJK()}:wght@400;500;700&display=swap`}
                />
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${CJK()}:wght@400;500;700&display=swap`}
                />
                <noscript>
                  <link
                    rel="stylesheet"
                    href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${CJK()}:wght@400;500;700&display=swap`}
                  />
                </noscript>
              </>
            )}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png"></link>
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed"></link>
          {/* 테마 설정 */}
          <meta name="theme-color" content={'#f1f3f5'} />

          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (<>
            <meta name="google-site-verification" content={CONFIG.googleSearchConsole.config.siteVerification} />
          </>)
          }
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
