import { CONFIG } from "site.config"
import Tag from "src/components/Tag"
import { TPost } from "src/types"
import { formatDate } from "src/libs/utils"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <StyledWrapper>
      <h1 className="title">{data.title}</h1>
      <StyledHr />
      {data.type[0] !== "Paper" && (
        <nav>
          <div className="top">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="author">
                  <Image
                    css={{ borderRadius: "50%" }}
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={24}
                    height={24}
                  />
                  <div>
                    <div className="">{data.author[0].name}</div>
                    <div className="date">
                      {formatDate(
                        data?.date?.start_date || data.createdTime,
                        CONFIG.lang
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mid">
            {data.tags && (
              <div className="tags">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
      <StyledHr />
      {data.thumbnail && (
        <StyledThumbnail>
          <Image
            src={data.thumbnail}
            css={{ objectFit: "cover" }}
            fill
            alt={data.title}
          />
        </StyledThumbnail>
      )}
    </StyledWrapper>
  )
}

export default PostHeader

const StyledWrapper = styled.div`
  .title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray11};
    justify-content: space-between;
    align-items: start;

    > .top {
      display: flex;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
      align-items: center;

      .author {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: smaller;
        justify-items: left;
      }

      .date {
        margin-right: 0.5rem;
        font-size: x-small;
      }
    }

    > .mid {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;

      .tags {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        gap: 0.5rem;
        max-width: 100%;
      }
    }
  }
`

const StyledHr = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray10};
`
const StyledThumbnail = styled.div`
  overflow: hidden;
  position: relative;
  margin: 1.75rem 0;
  border-radius: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray4};
  padding-bottom: 66%;

  @media (min-width: 1024px) {
    padding-bottom: 50%;
  }
`
