import CONFIG from "notes.config";
import Image from "next/image";
import React from "react";
import {
  RiGithubLine,
  RiInstagramLine,
  RiMailLine,
  RiLinkedinLine,
  RiMapPinLine,
  RiBuildingLine,
  RiUserLine,
} from "react-icons/ri";

type Props = {
  className?: string;
};

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-1 mb-3 dark:text-white flex items-center gap-2">
        <RiUserLine className="text-xl" />
        <span>Profile</span>
      </div>
      <div className="p-4 rounded-xl bg-white dark:bg-zinc-700 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col items-start gap-3 pt-6">
          <div className="w-full flex flex-col items-start">
            <div className="text-lg font-bold mb-1 dark:text-white">
              {CONFIG.profile.name}
            </div>
            <div className="text-sm px-3 py-1 mb-2 text-gray-500 dark:text-gray-400 font-medium bg-gray-50 dark:bg-zinc-600 rounded-full">
              {CONFIG.profile.role}
            </div>
            <div className="space-y-1.5 mb-2">
              <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                <RiMapPinLine className="text-base" />
                <span className="text-xs">Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                <RiBuildingLine className="text-base" />
                <span className="text-xs">Miro</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {CONFIG.profile.bio}
            </div>
          </div>
        </div>
        {/* <div className="flex">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 dark:hover:bg-zinc-700 rounded-lg cursor-pointer text-gray-500 dark:text-white"
            >
              <RiGithubLine className="text-2xl" />
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 dark:hover:bg-zinc-700 rounded-lg cursor-pointer text-gray-500 dark:text-white"
            >
              <RiInstagramLine className="text-2xl" />
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-lg cursor-pointer text-gray-500 dark:text-white"
            >
              <RiMailLine className="text-2xl flex-shrink-0" />
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-lg cursor-pointer text-gray-500 dark:text-white"
            >
              <RiLinkedinLine className="text-2xl flex-shrink-0" />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default MobileProfileCard;
