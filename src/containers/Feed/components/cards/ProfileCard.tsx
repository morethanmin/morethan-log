import CONFIG from "notes.config";
import Image from "next/image";
import React from "react";
import { RiUserLine, RiMapPinLine, RiBuildingLine } from "react-icons/ri";

type Props = {
  className?: string;
};

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-1 mb-3 dark:text-white flex items-center gap-2">
        <RiUserLine className="text-xl" />
        <span>Profile</span>
      </div>
      <div className="w-full rounded-xl bg-white dark:bg-zinc-700 mb-9 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="bg-white pt-10 pb-6 px-6 flex flex-col items-start dark:bg-zinc-700 dark:text-white min-h-[320px]">
          <div className="text-2xl font-bold mb-2 dark:text-white">
            {CONFIG.profile.name}
          </div>
          <div className="text-sm px-4 py-1.5 mb-4 text-gray-500 dark:text-gray-400 font-medium bg-gray-50 dark:bg-zinc-600 rounded-full">
            {CONFIG.profile.role}
          </div>

          {/* Location and Company Info */}
          <div className="w-full space-y-3 mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <RiMapPinLine className="text-lg" />
              <span className="text-sm">Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <RiBuildingLine className="text-lg" />
              <span className="text-sm">Miro</span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-4"></div>

          <div className="text-sm text-gray-600 dark:text-gray-300 text-left leading-relaxed w-full">
            {CONFIG.profile.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
