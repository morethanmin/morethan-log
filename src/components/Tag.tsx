import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: string;
};

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`);
  };
  return (
    <div
      onClick={() => handleClick(children)}
      className="text-xs text-gray-600 dark:text-gray-200 font-normal rounded-lg bg-gray-200 dark:bg-zinc-800/70 px-2 py-1 cursor-pointer hover:bg-gray-300 dark:hover:bg-zinc-700 border border-transparent dark:border-zinc-700 transition-colors duration-200 shadow-sm"
    >
      {children}
    </div>
  );
};

export default Tag;
