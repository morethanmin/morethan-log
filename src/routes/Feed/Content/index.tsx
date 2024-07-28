import { FC, useState } from "react"
import Footer from "../components/Footer"
import TagList from "../components/TagList"
import FeedHeader from "./FeedHeader"
import MobileProfileCard from "./MobileProfileCard"
import PinnedPosts from "./PinnedPosts"
import PostList from "./PostList"
import SearchInput from "./SearchInput"
import { footerStyle, tagListStyle, wrapperStyle } from "./styles"

const Content: FC = () => {
  const [q, setQ] = useState("")
  return (
    <div css={wrapperStyle}>
      <MobileProfileCard />
      <PinnedPosts q={q} />
      <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
      <TagList css={tagListStyle} />
      <FeedHeader />
      <PostList q={q} />
      <Footer css={footerStyle} />
    </div>
  )
}

export default Content
