import { TPost } from "src/types"
import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./PostDetail"
import PageDetail from "./PageDetail"
import styled from "@emotion/styled"

type Props = {
  blockMap: any
  data: TPost
}

const Detail: React.FC<Props> = ({ blockMap, data }) => {
  useMermaidEffect()

  return (
    <StyledWrapper data-type={data.type}>
      {data.type[0] === "Page" && (
        <PageDetail data={data} blockMap={blockMap} />
      )}
      {data.type[0] !== "Page" && (
        <PostDetail data={data} blockMap={blockMap} />
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
