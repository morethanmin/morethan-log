import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import usePostsQuery from "src/hooks/usePostsQuery"
import { getMajorCategoriesFromPosts } from "src/libs/utils/category"
import { DEFAULT_CATEGORY } from "src/constants"

type Props = {}

const CategoryList: React.FC<Props> = () => {
  const router = useRouter()
  const currentCategory = router.query.category || undefined
  const posts = usePostsQuery()
  const majorCategories = posts && posts.length > 0 ? getMajorCategoriesFromPosts(posts) : {}

  const handleClickCategory = (value: any) => {
    // delete
    if (currentCategory === value) {
      router.push({
        query: {
          ...router.query,
          category: undefined,
          tag: undefined, // 카테고리 해제 시 태그도 제거
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          category: value,
          tag: undefined, // 카테고리 선택 시 태그 필터링 제거
        },
      })
    }
  }

  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>📂</Emoji> Categories
      </div>
      <div className="list">
        {/* All 카테고리 먼저 표시 */}
        <a
          data-active={currentCategory === DEFAULT_CATEGORY || !currentCategory}
          onClick={() => handleClickCategory(DEFAULT_CATEGORY)}
          className="all-category"
        >
          📂 All <span style={{ color: '#aaa' }}>({posts?.length || 0})</span>
        </a>
        
        {/* 계층 구조로 카테고리 표시 */}
        {Object.entries(majorCategories).map(([major, data]) => (
          <div key={major} className="category-group">
            {/* 대분류 */}
            <a
              data-active={currentCategory === major}
              onClick={() => handleClickCategory(major)}
              className="major-category"
            >
              📁 {major} <span style={{ color: '#aaa' }}>({data.count})</span>
            </a>
            
            {/* 소분류들 */}
            {Object.entries(data.minorCategories).map(([minor, count]) => (
              <a
                key={`${major}/${minor}`}
                data-active={currentCategory === `${major}/${minor}`}
                onClick={() => handleClickCategory(`${major}/${minor}`)}
                className="minor-category"
              >
                ┗ {minor} <span style={{ color: '#aaa' }}>({count})</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default CategoryList

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    .category-group {
      @media (min-width: 1024px) {
        margin-bottom: 0.5rem;
      }
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray4};

        :hover {
          background-color: ${({ theme }) => theme.colors.gray4};
        }
      }

      &.all-category {
        font-weight: 600;
        margin-bottom: 0.5rem;
        
        @media (min-width: 1024px) {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
          padding-bottom: 0.5rem;
        }
      }

      &.major-category {
        font-weight: 600;
        
        @media (min-width: 1024px) {
          margin-top: 0.5rem;
        }
      }

      &.minor-category {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.gray9};
        
        @media (min-width: 1024px) {
          margin-left: 1rem;
          padding-left: 0.75rem;
        }

        &[data-active="true"] {
          color: ${({ theme }) => theme.colors.gray11};
        }
      }
    }
  }
`