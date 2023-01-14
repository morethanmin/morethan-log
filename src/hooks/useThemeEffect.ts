import { useEffect } from "react"
import CONFIG from "site.config"
import { ThemeType } from "@custeomTypes/index"

export const getTheme: () => ThemeType = () => {
  const themeConfig = CONFIG.blog.theme as "auto" & ThemeType
  if (themeConfig !== "auto") return themeConfig
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark"
  } else {
    return "light"
  }
}

const useThemeEffect = () => {
  useEffect(() => {
    if (typeof document !== "object") return
    if (getTheme() === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])
}

export default useThemeEffect
