import React, { ReactNode } from "react"
import { ThemeProvider } from "./ThemeProvider"
import useScheme from "src/hooks/useScheme"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  const [scheme] = useScheme()
  return <ThemeProvider scheme={scheme}>{children}</ThemeProvider>
}

export default RootLayout
