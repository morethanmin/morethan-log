import { TPost } from "src/types"
import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./PostDetail"
import PageDetail from "./PageDetail"
import styled from "@emotion/styled"
import { ExtendedRecordMap } from "notion-types"

type Props = {
  recordMap: ExtendedRecordMap
  data: TPost
}

const Detail: React.FC<Props> = ({ recordMap, data }) => {
  useMermaidEffect()

  return (
    <StyledWrapper data-type={data.type}>
      {data.type[0] === "Page" && (
        <PageDetail data={data} recordMap={recordMap} />
      )}
      {data.type[0] !== "Page" && (
        <PostDetail data={data} blockMap={recordMap} />
      )}
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  &[data-type="Paper"] {
    padding: 40px 0;
  }
`
