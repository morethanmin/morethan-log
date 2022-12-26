import imageLoader from '@/src/libs/next/imageLoader'
import CONFIG from 'morethan-log.config'
import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-1 mb-3 dark:text-white">💻 Profile</div>
      <div className="w-full p-8 rounded-2xl bg-white dark:bg-zinc-700 mb-9">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
          <Image
            src={CONFIG.profile.image}
            layout="fill"
            loader={imageLoader}
            alt=""
          />
        </div>
        <div className="bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className=" text-xl mb-3 italic font-bold">
            {CONFIG.profile.name}
          </div>
          <div className="text-sm">{CONFIG.profile.discription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
