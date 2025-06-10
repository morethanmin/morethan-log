import CONFIG from "notes.config";
import React from "react";
import { RiCodeBoxLine, RiAppsLine } from "react-icons/ri";

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null;
  return (
    <>
      <div className="p-1 mb-3 dark:text-white flex items-center gap-2">
        <RiAppsLine className="text-xl" />
        <span>Sites</span>
      </div>
      <ul className="rounded-lg mb-9 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        <a
          href={`${CONFIG.projects[0].href}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <RiCodeBoxLine className="text-2xl" />
          <div className="text-sm">{CONFIG.projects[0].name}</div>
        </a>
      </ul>
    </>
  );
};

export default ServiceCard;
