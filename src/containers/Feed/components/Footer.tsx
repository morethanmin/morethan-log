import CONFIG from "@/site.config"
import Link from "next/link"
import React from "react"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        className="text-gray-500 text-sm mt-3"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </div>
  )
}

export default Footer
