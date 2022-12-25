import { TPost } from '@/src/types/post'
import CONFIG from 'morethan-log.config'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@components/Utterances')
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const Comments: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {CONFIG.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
    </div>
  )
}

export default Comments
