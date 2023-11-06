import styled from "@emotion/styled"
import { ReactNode } from "react"

import useScheme from "@/hooks/useScheme"
import Scripts from "@/layouts/RootLayout/Scripts"

import Header from "./Header"
import { ThemeProvider } from "./ThemeProvider"
import useGtagEffect from "./useGtagEffect"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  const [scheme] = useScheme()
  useGtagEffect()
  return (
    <ThemeProvider scheme={scheme}>
      <Scripts />
      {/* // TODO: replace react query */}
      {/* {metaConfig.type !== "Paper" && <Header />} */}
      <Header fullWidth={false} />
      <StyledMain>{children}</StyledMain>
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
