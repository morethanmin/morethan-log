import React from 'react'

function Tag({ children }) {
  return (
    <div className="text-xs text-gray-500 font-normal rounded-full bg-gray-200 px-2">
      #{children}
    </div>
  )
}

export default Tag
