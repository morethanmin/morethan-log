import React from "react"
import Link from "next/link"
import CONFIG from "site.config"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/">
      <a aria-label={CONFIG.blog.title}>
        <div className="flex items-center">
          <div className="ml-2 text-black dark:text-white header-name">
            {CONFIG.blog.title}
            <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.motorpress.co.kr%2Fnews%2FarticleView.html%3Fidxno%3D1839&psig=AOvVaw1cqsDZwdwXogjo0UGQ9QeW&ust=1678090268538000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCb6MSrxP0CFQAAAAAdAAAAABAE"></img>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Logo
