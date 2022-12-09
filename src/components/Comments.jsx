import CONFIG from 'morethan-log.config'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@components/Utterances')
  },
  { ssr: false }
)

const Comments = ({ data }) => {
  return (
    <div>
      {CONFIG.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
    </div>
  )
}

export default Comments
