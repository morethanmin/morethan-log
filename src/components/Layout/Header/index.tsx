import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <div className="shadow-sm transition sticky bg-white dark:bg-zinc-700 mb-2 md:mb-6 border-b-[1px] z-[40] border-gray-100 dark:border-gray-800 top-0">
      <div
        className={`m-auto px-4 h-12 w-full max-w-6xl flex justify-between items-center ${
          fullWidth && "md:px-24"
        }`}
      >
        <Logo />
        <div className={`flex gap-3 items-center `}>
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header
