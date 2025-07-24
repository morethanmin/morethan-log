import { useState, useEffect, useMemo } from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import Link from "next/link"
import usePostsQuery from "src/hooks/usePostsQuery"
import { getMajorCategoriesFromPosts } from "src/libs/utils/category"
import { TMajorCategories } from "src/types"

const Categories: React.FC = () => {
  const posts = usePostsQuery()
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  
  const majorCategories: TMajorCategories = useMemo(() => {
    return posts && posts.length > 0 ? getMajorCategoriesFromPosts(posts) : {}
  }, [posts])
  
  // 초기화 시 모든 카테고리를 펼친 상태로 설정
  useEffect(() => {
    if (posts && posts.length > 0 && Object.keys(majorCategories).length > 0) {
      setExpandedCategories(new Set(Object.keys(majorCategories)))
    }
  }, [posts, majorCategories])
  
  if (!posts || posts.length === 0) return <div>Loading...</div>

  const toggleCategory = (major: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(major)) {
      newExpanded.delete(major)
    } else {
      newExpanded.add(major)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <StyledWrapper>
      <div className="header">
        <h1>Categories</h1>
        <p>Browse posts organized by categories</p>
      </div>
      
      <div className="categories-grid">
        {Object.entries(majorCategories).map(([major, data]) => (
          <div key={major} className="category-card">
            <div 
              className="category-header"
              onClick={() => toggleCategory(major)}
            >
              <div className="category-info">
                <h2>{major}</h2>
                <span className="count">({data.count})</span>
              </div>
              <span className="expand-icon">
                {expandedCategories.has(major) ? '−' : '+'}
              </span>
            </div>
            
            <Link href={`/?category=${encodeURIComponent(major)}`} className="view-all">
              View all {major} posts
            </Link>

            {expandedCategories.has(major) && Object.keys(data.minorCategories).length > 0 && (
              <div className="minor-categories">
                {Object.entries(data.minorCategories).map(([minor, count]) => (
                  <Link 
                    key={minor}
                    href={`/?category=${encodeURIComponent(`${major}/${minor}`)}`}
                    className="minor-category"
                  >
                    <span className="minor-name">{minor}</span>
                    <span className="minor-count">({count})</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default Categories

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .header {
    margin-bottom: 3rem;
    text-align: center;
    
    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.gray12};
    }
    
    p {
      color: ${({ theme }) => theme.colors.gray11};
      font-size: 1rem;
    }
  }

  .categories-grid {
    display: grid;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .category-card {
    border: 1px solid ${({ theme }) => theme.colors.gray6};
    border-radius: 10px;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.gray2};
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.gray8};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
    
    .category-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray12};
        margin: 0;
      }
      
      .count {
        color: ${({ theme }) => theme.colors.gray10};
        font-size: 0.85rem;
      }
    }
    
    .expand-icon {
      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.gray10};
      transition: transform 0.2s ease;
    }
  }

  .view-all {
    display: inline-block;
    color: ${({ theme }) => theme.colors.blue9};
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }

  .minor-categories {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.gray5};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .minor-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background: ${({ theme }) => theme.colors.gray3};
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.gray4};
    }
    
    .minor-name {
      color: ${({ theme }) => theme.colors.gray11};
      font-size: 0.9rem;
    }
    
    .minor-count {
      color: ${({ theme }) => theme.colors.gray9};
      font-size: 0.8rem;
    }
  }
`