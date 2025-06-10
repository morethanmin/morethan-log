import React from "react";
import { RiSearchLine } from "react-icons/ri";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="p-1 mb-3 dark:text-white flex items-center gap-2">
        <RiSearchLine className="text-xl" />
        <span>Search</span>
      </div>
      <input
        className="rounded-xl px-5 py-2 w-full bg-gray-200 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md outline-none transition"
        type="text"
        placeholder="search keyword.."
        {...props}
      />
    </div>
  );
};

export default SearchInput;
