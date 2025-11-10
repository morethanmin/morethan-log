import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          {CONFIG.googleSearchConsole?.enable && (
            <meta
              name="google-site-verification"
              content={CONFIG.googleSearchConsole?.config?.siteVerification}
            />
          )}

          {CONFIG.naverSearchAdvisor?.enable && (
            <meta
              name="naver-site-verification"
              content={CONFIG.naverSearchAdvisor?.config?.siteVerification}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument