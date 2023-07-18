import { useState } from "react"

import SearchInput from "./components/SearchInput"
import { FeedHeader } from "./components/FeedHeader"
import Footer from "./components/Footer"
import { TCategories, TPosts, TTags } from "src/types"
import styled from "@emotion/styled"
import TagList from "./TagList"
import { PostList } from "./components/lists"
import {
  ContactCard,
  MobileProfileCard,
  ProfileCard,
  ServiceCard,
} from "./components/cards"

type Props = {
  categories: TCategories
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ categories, tags, posts }) => {
  const [q, setQ] = useState("")

  return (
    <StyledWrapper>
      <div
        className="lt"
        css={{
          height: "calc(100vh - 73px)",
        }}
      >
        <TagList data={tags} />
      </div>
      <div className="mid">
        <MobileProfileCard />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="tags">
          <TagList data={tags} />
        </div>
        <FeedHeader categories={categories} />
        <PostList q={q} posts={posts} />
        <Footer className="footer" />
      </div>
      <div
        className="rt"
        css={{
          height: "calc(100vh - 73px)",
        }}
      >
        <ProfileCard />
        <ServiceCard />
        <ContactCard />
        <Footer className="footer" />
      </div>
    </StyledWrapper>
  )
}

export default Feed

const StyledWrapper = styled.div`
  display: block;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
  }

  > .lt {
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: 73px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 7 / span 7;
    }

    > .tags {
      display: block;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    > .footer {
      display: block;
      display: flex;
      padding-bottom: 2rem;
      justify-content: center;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  > .rt {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: 73px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }
`
