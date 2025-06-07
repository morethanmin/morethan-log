import styled from "@emotion/styled"
import React from "react"
import NotionRenderer from "../components/NotionRenderer"

// type Props = {}

// const PostDetail: React.FC<Props> = () => {
//   const data = usePostQuery()

//   if (!data) return null

//   const category = (data.category && data.category?.[0]) || undefined

//   return (
//     <StyledWrapper>
//       <article>
//         {category && (
//           <div css={{ marginBottom: "0.5rem" }}>
//             <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
//               {category}
//             </Category>
//           </div>
//         )}
//         {data.type[0] === "Post" && <PostHeader data={data} />}
//         <div>
//           <NotionRenderer recordMap={data.recordMap} />
//         </div>
//         {data.type[0] === "Post" && (
//           <>
//             <PostFooter />
//             <CommentBox data={data} />
//           </>
//         )}
//       </article>
//     </StyledWrapper>
//   )
// }

// export default PostDetail

// const StyledWrapper = styled.div`
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   padding-top: 3rem;
//   padding-bottom: 3rem;
//   border-radius: 1.5rem;
//   max-width: 56rem;
//   background-color: ${({ theme }) =>
//     theme.scheme === "light" ? "white" : theme.colors.gray4};
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   margin: 0 auto;
//   > article {
//     margin: 0 auto;
//     max-width: 42rem;
//   }
// `
type Props = {
  recordMap: any
}

const PostDetail: React.FC<Props> = ({ recordMap }) => {
  // recordMap에서 필요한 post 데이터를 추출
  // 기존 usePostQuery에서 얻던 data 대신 props를 직접 받는 방식으로 전환 필요
  // 예를 들어, detail/index.tsx에서 data 자체도 넘겨주는 게 깔끔할 수 있음

  // 예시: data도 같이 넘겨받는 방식 (이걸 권장)
  // const { recordMap, type, category, status } = data

  return (
    <StyledWrapper>
      <article>
        {/* Category, Header, Footer 렌더링에 필요한 데이터가 있다면 함께 props로 받아야 함 */}
        <div>
          <NotionRenderer recordMap={recordMap} />
        </div>
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`