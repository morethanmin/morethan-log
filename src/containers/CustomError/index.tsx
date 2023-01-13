import Image from 'next/image'
import React from 'react'

type Props = {
  errorType?: 'NOT_FOUND' | 'UNKNOWN'
}

const CustomError: React.FC<Props> = ({ errorType }) => {
  return (
    <div
      className={`m-auto max-w-4xl bg-white dark:bg-zinc-700 rounded-3xl py-12 px-6 shadow-md`}
    >
      <div className="py-20 flex flex-col items-center gap-10">
        <div className="text-6xl flex  items-center">
          <div>4</div>
          <Image src="/images/error.png" width={60} height={60} alt="error" />
          <div>4</div>
        </div>
        <div className="text-3xl text-gray-500">Post not found</div>
      </div>
    </div>
  )
}

export default CustomError
