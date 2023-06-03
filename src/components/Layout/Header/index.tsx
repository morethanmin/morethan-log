import { useRef } from "react"
import CONFIG from "site.config"
import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const navRef = useRef(null)

  return (
    <div
      className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-6 py-8 bg-opacity-60 max-w-6xl px-4 ${
        fullWidth && "px-4 md:px-24"
      }`}
      id="sticky-nav"
      ref={navRef}
    >
      <Logo />
      <div className={`flex gap-3 items-center`}>
        <ThemeToggle />
        <NavBar />
      </div>
    </div>
  )
}

export default Header
