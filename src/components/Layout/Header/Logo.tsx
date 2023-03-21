import React from "react"
import Link from "next/link"
import CONFIG from "site.config"
type Props = {
  title: String
}

const Logo: React.FC<Props> = ({ title }) => {
  return (
    <Link href="/">
      <a aria-label={CONFIG.blog.title}>
        <div className="flex items-center">
          <div className="ml-2 text-black dark:text-white header-name">
            <img
              className="header-logo"
              alt="Erics' blog"
              src={CONFIG.staticResources.Logo}
            ></img>{" "}
            <div>
              {CONFIG.blog.title}/
              {title && <span className="header-title">{title}</span>}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Logo
