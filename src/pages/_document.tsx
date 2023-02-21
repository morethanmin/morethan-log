import Document, { Html, Head, Main, NextScript } from "next/document"
import CONFIG from "site.config"
import CJK from "@libs/cjk"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link
            rel="stylesheet"
            as="font"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {/* theme setting */}
          <meta name="theme-color" content={"#f1f3f5"} />

          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
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
