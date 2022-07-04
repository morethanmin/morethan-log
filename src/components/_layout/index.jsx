import Header from '@/src/components/_layout/Header'
import Footer from '@/src/components/_layout/Footer'
import CONFIG from '@/blog.config'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({ children, fullWidth, ...customMeta }) => {
  const url = CONFIG.link
  const meta = {
    title: CONFIG.blog.title,
    type: 'website',
    ...customMeta,
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {CONFIG.seo.keywords && (
          <meta name="keywords" content={CONFIG.seo.keywords.join(', ')} />
        )}
        <meta name="description" content={meta.description} />
        <meta property="og:locale" content={CONFIG.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={meta.slug ? `${url}/${meta.slug}` : url}
        />
        <meta
          property="og:image"
          content={`${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta
          name="twitter:image"
          content={`${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        {meta.type === 'Post' && (
          <>
            <meta
              property="article:published_time"
              content={meta.date || meta.createdTime}
            />
            <meta property="article:author" content={CONFIG.profile.name} />
          </>
        )}
      </Head>
      <div className={`wrapper font-sans`}>
        {meta.type !== 'Page' && <Header fullWidth={fullWidth} />}
        <main
          className={`m-auto flex-grow w-full transition-all max-w-6xl px-4 ${
            fullWidth && 'px-4 md:px-24'
          } ${meta.type === 'Page' && 'py-10'} `}
        >
          {children}
        </main>
        {/* {meta.type !== 'Page' && <Footer fullWidth={fullWidth} />} */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
