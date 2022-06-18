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
        className={CONFIG.appearance === 'dark' ? 'dark' : undefined}
      >
        <Head>
          {/* 폰트 설정 */}
          {CONFIG.font && CONFIG.font === 'serif'
            ? (
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
            )
            : (
              <>
                <link
                  rel="preload"
                  href="/fonts/IBMPlexSansVar-Roman.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
                />
                <link
                  rel="preload"
                  href="/fonts/IBMPlexSansVar-Italic.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
                />
              </>
            )}
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
                  href={`https://fonts.googleapis.com/css2?family=Noto+${CONFIG.font === 'serif' ? 'Serif' : 'Sans'
                    }+${CJK()}:wght@400;500;700&display=swap`}
                />
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=Noto+${CONFIG.font === 'serif' ? 'Serif' : 'Sans'
                    }+${CJK()}:wght@400;500;700&display=swap`}
                />
                <noscript>
                  <link
                    rel="stylesheet"
                    href={`https://fonts.googleapis.com/css2?family=Noto+${CONFIG.font === 'serif' ? 'Serif' : 'Sans'
                      }+${CJK()}:wght@400;500;700&display=swap`}
                  />
                </noscript>
              </>
            )}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png"></link>
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed"></link>
          {/* 테마 설정 */}
          {CONFIG.appearance === 'auto'
            ? (
              <>
                <meta name="theme-color" content={CONFIG.lightBackground} media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content={CONFIG.darkBackground} media="(prefers-color-scheme: dark)" />
              </>
            )
            : (
              <meta name="theme-color" content={CONFIG.appearance === 'dark' ? CONFIG.darkBackground : CONFIG.lightBackground} />
            )
          }
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
