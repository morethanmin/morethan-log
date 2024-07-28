import { FC } from "react"
import TagList from "../components/TagList"
import { wrapperStyle } from "./styles"

const LeftSidebar: FC = () => {
  return (
    <div css={wrapperStyle}>
      <TagList />
    </div>
  )
}

export default LeftSidebar
