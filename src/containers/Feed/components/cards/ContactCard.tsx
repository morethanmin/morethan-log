import CONFIG from "site.config"
import React from "react"
import { IoLogoDocker, IoLogoLinkedin, IoLogoMedium, IoMail,IoLogoSkype } from "react-icons/io5"
import { FaDev, FaTelegramPlane, FaFilePdf, FaGithubAlt, FaTwitter } from "react-icons/fa"

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">💬 Contact</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <FaGithubAlt className="text-2xl" />
            <div className="text-sm">github</div>
          </a>
        )}
        {CONFIG.profile.docker && (
          <a
            href={`https://hub.docker.com/u/${CONFIG.profile.docker}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <IoLogoDocker className="text-2xl" />
            <div className="text-sm">docker</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <IoLogoLinkedin className="text-2xl flex-shrink-0" />
            <div className="text-sm">linkedin</div>
          </a>
        )}
        {CONFIG.profile.medium && (
          <a
            href={`https://www.medium.com/@${CONFIG.profile.medium}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <IoLogoMedium className="text-2xl" />
            <div className="text-sm">medium</div>
          </a>
        )}
        {CONFIG.profile.dev && (
          <a
            href={`https://www.dev.to/${CONFIG.profile.dev}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <FaDev className="text-2xl" />
            <div className="text-sm">dev.to</div>
          </a>
        )}
        {CONFIG.profile.twitter && (
          <a
            href={`https://twitter.com/${CONFIG.profile.twitter}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <FaTwitter className="text-2xl" />
            <div className="text-sm">twitter</div>
          </a>
        )}
        {CONFIG.profile.telegram && (
          <a
            href={`https://www.telegram.me/${CONFIG.profile.telegram}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <FaTelegramPlane className="text-2xl" />
            <div className="text-sm">telegram</div>
          </a>
        )}
        {CONFIG.profile.skype && (
          <a
            href={`https://join.skype.com/invite/${CONFIG.profile.skype}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <IoLogoSkype className="text-2xl" />
            <div className="text-sm">skype</div>
          </a>
        )}
                
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <IoMail className="text-2xl flex-shrink-0" />
            <div className="text-sm">email</div>
          </a>
        )}
        
      </ul>
    </>
  )
}

export default ContactCard
