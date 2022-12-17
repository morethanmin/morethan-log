import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className="text-xs text-gray-500 font-normal rounded-full bg-gray-200 px-2 py-1 cursor-pointer"
    >
      {children}
    </div>
  )
}

export default Tag
