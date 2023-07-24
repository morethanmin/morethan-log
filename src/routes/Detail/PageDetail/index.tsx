import { TPost } from "src/types"
import React from "react"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import { ExtendedRecordMap } from "notion-types"
type Props = {
  recordMap: ExtendedRecordMap
  data: TPost
}

const PageDetail: React.FC<Props> = ({ recordMap, data }) => {
  return (
    <StyledWrapper>
      <NotionRenderer recordMap={recordMap} />
    </StyledWrapper>
  )
}

export default PageDetail

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
