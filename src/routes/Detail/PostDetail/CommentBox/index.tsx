import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"
import React from "react"

const CommentsLoader: React.FC = () => (
  <>
    <style>
      {`
        @keyframes comments-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .comments-loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 0;
          color: #999;
          font-size: 0.875rem;
        }
        .comments-spinner {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid #ccc;
          border-top-color: #555;
          animation: comments-spin 0.7s linear infinite;
        }
      `}
    </style>
    <div className="comments-loader">
      <div className="comments-spinner" />
      <p style={{ marginTop: "0.5rem" }}>Loading comments...</p>
    </div>
  </>
)

const UtterancesComponent = dynamic(
  async () => {
    await new Promise((res) => setTimeout(res, 2000))
    return import("./Utterances")
  },
  { ssr: false, loading: () => <CommentsLoader /> }
)

const CusdisComponent = dynamic(
  async () => {
    await new Promise((res) => setTimeout(res, 2000))
    return import("./Cusdis")
  },
  { ssr: false, loading: () => <CommentsLoader /> }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {CONFIG.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
      {CONFIG.cusdis.enable && (
        <CusdisComponent id={data.id} slug={data.slug} title={data.title} />
      )}
    </div>
  )
}

export default CommentBox
