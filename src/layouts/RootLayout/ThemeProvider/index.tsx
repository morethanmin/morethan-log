import { ThemeProvider as _ThemeProvider } from "@emotion/react"

import { createTheme } from "@/styles"

import { Global } from "./Global"

type Props = {
  scheme: string
  children?: React.ReactNode
}

export const ThemeProvider = ({ scheme, children }: Props) => {
  const theme = createTheme({
    scheme: scheme === "light" ? "light" : "dark",
  })

  return (
    <_ThemeProvider theme={theme}>
      <Global />
      {children}
    </_ThemeProvider>
  )
}
