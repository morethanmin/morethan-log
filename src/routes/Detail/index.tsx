// import styled from "@emotion/styled"
// import PageDetail from "./PageDetail"
// import PostDetail from "./PostDetail"

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

// ✅ 수정 후 Detail/index.tsx
import styled from "@emotion/styled"
import React from "react"
import usePostQuery from "src/hooks/usePostQuery"
import PageDetail from "./PageDetail"
import PostDetail from "./PostDetail"

const Detail: React.FC = () => {
  const data = usePostQuery()
  if (!data) return null

  return (
    <StyledWrapper data-type={data.type}>
      {data.type[0] === "Page" && <PageDetail />}
      {data.type[0] !== "Page" && <PostDetail />}
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`

