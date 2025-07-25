import useDropdown from "src/hooks/useDropdown"
import { useRouter } from "next/router"
import React from "react"
import { MdExpandMore } from "react-icons/md"
import { DEFAULT_CATEGORY } from "src/constants"
import styled from "@emotion/styled"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"
import usePostsQuery from "src/hooks/usePostsQuery"
import { getMajorCategoriesFromPosts } from "src/libs/utils/category"

type Props = {}

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter()
  const posts = usePostsQuery()
  const [dropdownRef, opened, handleOpen] = useDropdown()

  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY
  const majorCategories = posts && posts.length > 0 ? getMajorCategoriesFromPosts(posts) : {}

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    })
  }
  return (
    <StyledWrapper>
      <div ref={dropdownRef} className="wrapper" onClick={handleOpen}>
        {currentCategory} Posts <MdExpandMore />
      </div>
      {opened && (
        <div className="content">
          {Object.entries(majorCategories).map(([major, data]) => (
            <div key={major}>
              <div
                className="item major-category"
                onClick={() => handleOptionClick(major)}
              >
                {`${major} (${data.count})`}
              </div>
              {Object.entries(data.minorCategories).map(([minor, count]) => (
                <div
                  key={`${major}/${minor}`}
                  className="item minor-category"
                  onClick={() => handleOptionClick(`${major}/${minor}`)}
                >
                  {`  ${minor} (${count})`}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </StyledWrapper>
  )
}

export default CategorySelect

const StyledWrapper = styled.div`
  position: relative;
  > .wrapper {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    cursor: pointer;
  }
  > .content {
    position: absolute;
    z-index: 40;
    padding: 0.25rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray10};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    > div > .item {
      padding: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      
      &.major-category {
        font-weight: 600;
        margin-bottom: 0.125rem;
      }
      
      &.minor-category {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.gray9};
        margin-left: 0.5rem;
      }
    }
  }
`
