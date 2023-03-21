import { useEffect, useRef } from "react"
import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import CONFIG from "site.config"

type Props = {
  title : String,
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth,title }) => {
  const navRef = useRef(null)
  const sentinelRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinelRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinelRef])
  console.log('This is Header title',title)

  return (
    <>
    <div ref={sentinelRef}></div>
    <div
      className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-6 py-8 bg-opacity-60 max-w-6xl px-4 ${
        fullWidth && "px-4 md:px-24"
      }`}
      id="sticky-nav"
      ref={navRef}
    >
      <Logo title={title} />
      <div className={`flex gap-3 items-center`}>
        <ThemeToggle />
        <NavBar />
      </div>
    </div>
    </>
  )
}

export default Header
