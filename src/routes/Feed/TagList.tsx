import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { TTags } from "src/types"

type Props = {
  className?: string
  data: TTags
}

const TagList: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <StyledWrapper>
      <div className="top">🏷️ Tags</div>
      <ul>
        {Object.keys(data).map((key) => (
          <li
            key={key}
            data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
          >
            <a>{key}</a>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  ul {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;

    @media (min-width: 1024px) {
      display: block;
    }

    li {
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #6b7280;
      cursor: pointer;

      :hover {
        background-color: #e5e7eb;
      }
      &[data-active="true"] {
        color: #000000;
        background-color: #ffffff;

        :hover {
          background-color: #ffffff;
        }
      }
    }
  }
`
