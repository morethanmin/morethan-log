import { TPost } from "src/types"
import React from "react"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
type Props = {
  blockMap: any
  data: TPost
}

const PageDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <StyledWrapper>
      <NotionRenderer recordMap={blockMap} />
    </StyledWrapper>
  )
}

export default PageDetail

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
