import Image from "next/image";
import React from "react";
import errorPic from "../../../public/images/error.png";

type Props = {
  errorType?: "NOT_FOUND" | "UNKNOWN";
};

const CustomError: React.FC<Props> = ({ errorType }) => {
  return (
    <div
      className={`m-auto max-w-4xl bg-white dark:bg-zinc-700 rounded-3xl py-12 px-6 mb-8 shadow-md`}
    >
      <div className="py-20 flex flex-col items-center gap-10">
        <div className="text-6xl flex  items-center">
          <Image src={errorPic} alt="error" />
        </div>
        <div className="text-3xl text-gray-500">Page Not Found</div>
      </div>
    </div>
  );
};

export default CustomError;
