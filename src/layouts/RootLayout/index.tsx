import React, { ReactNode, useEffect, useRef, useState } from "react"
import { ThemeProvider } from "./ThemeProvider"
import useScheme from "src/hooks/useScheme"
import Header from "./Header"
import styled from "@emotion/styled"
import Scripts from "src/layouts/RootLayout/Scripts"
import useGtagEffect from "./useGtagEffect"
import Prism from "prismjs/prism"
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import 'prismjs/components/prism-csharp.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-js-templates.js'
import 'prismjs/components/prism-coffeescript.js'
import 'prismjs/components/prism-diff.js'
import 'prismjs/components/prism-git.js'
import 'prismjs/components/prism-go.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-graphql.js'
import 'prismjs/components/prism-handlebars.js'
import 'prismjs/components/prism-less.js'
import 'prismjs/components/prism-makefile.js'
import 'prismjs/components/prism-markdown.js'
import 'prismjs/components/prism-objectivec.js'
import 'prismjs/components/prism-ocaml.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-reason.js'
import 'prismjs/components/prism-rust.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-scss.js'
import 'prismjs/components/prism-solidity.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-stylus.js'
import 'prismjs/components/prism-swift.js'
import 'prismjs/components/prism-wasm.js'
import 'prismjs/components/prism-yaml.js'
import "prismjs/components/prism-go.js"
import useThrottle from "src/hooks/useThrottle"
import { useRouter } from "next/router"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  const [scheme] = useScheme()
  useGtagEffect()
  useEffect(() => {
    Prism.highlightAll();
  }, [])

  // 스크롤 프로그레스바 관련
  const router = useRouter()
  const currentElementRef = useRef<HTMLDivElement | null>(null)
  const [blogHeight, setBlogHeight] = useState(0)
  const [throttleScrollY, setThrottleScrollY] = useState<number>(0)

  const scrollThrottle = useThrottle(() => {
    setThrottleScrollY(window.scrollY)
  }, 100)

  const getCurrentPercentage = () => {
    if (router.asPath === "/") return 0
    let percentage = Math.ceil((throttleScrollY / blogHeight) * 100)
    if (percentage >= 90) {
      percentage = 100
    } else {
      percentage = Math.ceil((throttleScrollY / blogHeight) * 100)
    }
    return percentage
  }

  useEffect(() => {
    const handleResize = () => {
      if (!currentElementRef.current) return
      const clientHeight =
        currentElementRef.current.scrollHeight - window.innerHeight
      setBlogHeight(clientHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", scrollThrottle)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", scrollThrottle)
    }
  }, [scrollThrottle])

  return (
    <ThemeProvider scheme={scheme}>
      <Scripts />
      <div style={{ fontFamily: '"Noto Serif KR", "PingFang SC", "Microsoft YaHei", sans-serif' }}>
        {/* // TODO: replace react query */}
        {/* {metaConfig.type !== "Paper" && <Header />} */}
        <Header fullWidth={false} />
        {/* 네비게이션 바로 아래 스크롤 프로그레스바 */}
        <ProgressBarWrapper>
          <ProgressBarInner style={{ width: `${getCurrentPercentage()}%` }} />
        </ProgressBarWrapper>
        <StyledMain ref={currentElementRef}>{children}</StyledMain>
      </div>
    </ThemeProvider>
  )
}

export default RootLayout

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`
const ProgressBarWrapper = styled.div`
  position: sticky;
  top: 4.5rem;
  left: 0;
  width: 100vw;
  height: 3px;
  background: transparent;
  z-index: 2000;
`
const ProgressBarInner = styled.div`
  height: 100%;
  background: #6366f1;
  transition: width 0.2s;
`

