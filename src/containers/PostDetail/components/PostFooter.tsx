import { useRouter } from "next/router";
import React from "react";
import { RiArrowLeftLine, RiArrowUpLine } from "react-icons/ri";

type Props = {};

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="flex gap-8 items-center">
        <button
          onClick={() => router.push("/")}
          aria-label="Back"
          className="p-2 rounded-full text-gray-400 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <RiArrowLeftLine className="text-2xl" />
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Top"
          className="p-2 rounded-full text-gray-400 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <RiArrowUpLine className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
