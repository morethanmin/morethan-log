import { useRouter } from 'next/router'
import React from 'react'

function Tag({ children }) {
  const router = useRouter()

  const handleClick = (value) => {
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
