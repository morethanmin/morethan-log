import { FC } from "react"

import Content from "./Content"
import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"
import { wrapperStyle } from "./styles"

const Feed: FC = () => {
  return (
    <div css={wrapperStyle}>
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </div>
  )
}

export default Feed
