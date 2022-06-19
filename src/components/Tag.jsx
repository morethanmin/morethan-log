import React from 'react'

function Tag({ children }) {
  return (
    <div className="text-sm text-gray-500 font-medium rounded-full bg-gray-200 px-2">
      #{children}
    </div>
  )
}

export default Tag
