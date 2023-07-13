import { useEffect } from "react"
import { CONFIG } from "site.config"
import { ThemeType } from "src/types"

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
    if (getTheme() === "dark") {
      console.log("dark")

      document.documentElement.classList.add("dark")
    } else {
      console.log("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])
}

export default useThemeEffect
