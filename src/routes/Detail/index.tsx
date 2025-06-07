import styled from "@emotion/styled"
import PageDetail from "./PageDetail"
import PostDetail from "./PostDetail"

// type Props = {}

// const Detail: React.FC<Props> = () => {
//   const data = usePostQuery()
//   useMermaidEffect()

//   if (!data) return null
//   return (
//     <StyledWrapper data-type={data.type}>
//       {data.type[0] === "Page" && <PageDetail />}
//       {data.type[0] !== "Page" && <PostDetail />}
//     </StyledWrapper>
//   )
// }

// export default Detail

// const StyledWrapper = styled.div`
//   padding: 2rem 0;

//   &[data-type="Paper"] {
//     padding: 40px 0;
//   }
//   /** Reference: https://github.com/chriskempson/tomorrow-theme **/
//   code[class*="language-mermaid"],
//   pre[class*="language-mermaid"] {
//     background-color: ${({ theme }) => theme.colors.gray5};
//   }
// `
type Props = {
  recordMap: any
}

const Detail: React.FC<Props> = ({ recordMap }) => {
  const data = recordMap.block[Object.keys(recordMap.block)[0]].value

  return (
    <StyledWrapper data-type={data.type}>
      {data.type[0] === "Page" && <PageDetail recordMap={recordMap} />}
      {data.type[0] !== "Page" && <PostDetail recordMap={recordMap} />}
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
