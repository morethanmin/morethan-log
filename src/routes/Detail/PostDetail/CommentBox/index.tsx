import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"

const UtterancesComponent = dynamic(
  () => {
    return import("./Utterances")
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import("./Cusdis")
  },
  { ssr: false }
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
