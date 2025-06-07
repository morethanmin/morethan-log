// // import useMermaidEffect from "./hooks/useMermaidEffect"
// // import PostDetail from "./PostDetail"
// // import PageDetail from "./PageDetail"
// // import styled from "@emotion/styled"
// // import usePostQuery from "src/hooks/usePostQuery"

// // type Props = {}

// // const Detail: React.FC<Props> = () => {
// //   const data = usePostQuery()
// //   useMermaidEffect()

// //   if (!data) return null
// //   return (
// //     <StyledWrapper data-type={data.type}>
// //       {data.type[0] === "Page" && <PageDetail />}
// //       {data.type[0] !== "Page" && <PostDetail />}
// //     </StyledWrapper>
// //   )
// // }

// // export default Detail

// // const StyledWrapper = styled.div`
// //   padding: 2rem 0;

// //   &[data-type="Paper"] {
// //     padding: 40px 0;
// //   }
// //   /** Reference: https://github.com/chriskempson/tomorrow-theme **/
// //   code[class*="language-mermaid"],
// //   pre[class*="language-mermaid"] {
// //     background-color: ${({ theme }) => theme.colors.gray5};
// //   }
// // `

// import styled from "@emotion/styled"
// import usePostQuery from "src/hooks/usePostQuery"
// import useMermaidEffect from "./hooks/useMermaidEffect"
// import PageDetail from "./PageDetail"
// import PostDetail from "./PostDetail"

// type Props = {
//   recordMap: any
// }

// const Detail: React.FC<Props> = ({ recordMap }) => {
//   const data = usePostQuery()
//   useMermaidEffect()

//   if (!data) return null

//   return (
//     <StyledWrapper data-type={data.type}>
//       {data.type[0] === "Page" && <PageDetail recordMap={recordMap} />}
//       {data.type[0] !== "Page" && <PostDetail recordMap={recordMap} />}
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

import styled from "@emotion/styled"
import usePostQuery from "src/hooks/usePostQuery"
import NotionRenderer from "src/routes/Detail/components/NotionRenderer"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

const PostDetail = ({ recordMap }: { recordMap: any }) => {
  const data = usePostQuery()

  if (!data) return null

  return (
    <Wrapper>
      <PostHeader />
      <NotionRenderer recordMap={recordMap} />
      <PostFooter />
    </Wrapper>
  )
}

export default PostDetail

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
