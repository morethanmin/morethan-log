import useDropdown from "@hooks/useDropdown"
import { TDates } from "@/src/types"
import { useRouter } from "next/router"
import React from "react"
import { MdExpandMore } from "react-icons/md"
import { DEFAULT_DATE } from "@/src/constants"

type Props = {
  data: TDates
}

const DateSelect: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const [dropdownRef, opened, handleOpen] = useDropdown()

  const currentDate = `${router.query.date || ``}` || DEFAULT_DATE

  const handleOptionClick = (date: string) => {
    router.push({
      query: {
        ...router.query,
        date,
      },
    })
  }
  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className="text-xl font-bold my-2 dark:text-white flex gap-1 items-center cursor-pointer"
        onClick={handleOpen}
      >
        {currentDate} {currentDate === DEFAULT_DATE ? "Time" : "Posts"}
        <MdExpandMore />
      </div>
      {opened && (
        <div className="absolute bg-white z-40 p-1 rounded-xl shadow-md">
          {Object.keys(data).map((key, idx) => (
            <div
              className="whitespace-nowrap hover:bg-gray-200 p-1 px-2 rounded-xl text-sm cursor-pointer"
              key={idx}
              onClick={() => handleOptionClick(key)}
            >
              {`${key} (${data[key]})`}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DateSelect
