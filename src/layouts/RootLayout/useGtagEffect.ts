import { useRouter } from "next/router"
import { useEffect } from "react"

import * as gtag from "@/libs/gtag"
import { CONFIG } from "site.config"

const useGtagEffect = () => {
  const router = useRouter()
  useEffect(() => {
    if (!(CONFIG.isProd && CONFIG?.googleAnalytics?.enable)) return

    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
  return null
}
export default useGtagEffect
