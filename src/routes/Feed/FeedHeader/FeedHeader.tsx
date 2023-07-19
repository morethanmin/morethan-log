import { TCategories } from "src/types"
import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"

type Props = {
  categories: TCategories
}

const FeedHeader: React.FC<Props> = ({ categories }) => {
  return (
    <StyledWrapper>
      <CategorySelect data={categories} />
      <OrderButtons />
    </StyledWrapper>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #d1d5db;
`
