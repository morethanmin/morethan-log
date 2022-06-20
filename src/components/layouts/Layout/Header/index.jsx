import { useEffect, useRef } from 'react'
import Link from 'next/link'
import CONFIG from '@/blog.config'
import NavBar from './NavBar'

const Header = ({ fullWidth }) => {
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  return (
    <>
      {/* <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div> */}
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <Link href="/">
          <a aria-label={CONFIG.title}>
            <div className="flex items-center">
              <div className="ml-2 font-medium text-black dark:text-white header-name">
                {CONFIG.title}
              </div>
            </div>
          </a>
        </Link>

        <NavBar />
      </div>
    </>
  )
}

export default Header
