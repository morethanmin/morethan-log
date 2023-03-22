import { TCategories, TDates } from "@/src/types"
import React from "react"
import CategorySelect from "./CategorySelect"
import DateSelector from "./DateSelect"
import OrderButtons from "./OrderButtons"

type Props = {
  categories: TCategories
  dates: TDates
}

const FeedHeader: React.FC<Props> = ({ categories, dates }) => {
  return (
    <div className="flex border-b border-gray-300 mb-4 justify-between items-center ">
      <CategorySelect data={categories} />
      <DateSelector data={dates} />
      {/* <OrderButtons /> */}
    </div>
  )
}

export default FeedHeader
