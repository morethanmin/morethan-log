import CONFIG from '@/blog.config'
import React from 'react'
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from 'react-icons/ai'

function Chennel() {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🌐 Channel</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
        >
          <AiOutlineGithub className="text-2xl" />
          <div className="text-sm">{CONFIG.profile.github}</div>
        </a>
        <a
          href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <AiOutlineInstagram className="text-2xl" />
          <div className="text-sm">@{CONFIG.profile.instagram}</div>
        </a>
        <a
          href={`mailto:${CONFIG.profile.email}`}
          rel="noreferrer"
          target="_blank"
          className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <AiOutlineMail className="text-2xl flex-shrink-0" />
          <div className="text-sm">{CONFIG.profile.email}</div>
        </a>
        <a
          href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
          rel="noreferrer"
          target="_blank"
          className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <AiFillLinkedin className="text-2xl flex-shrink-0" />
          <div className="text-sm">{CONFIG.profile.linkedin}</div>
        </a>
      </ul>
    </>
  )
}

export default Chennel
