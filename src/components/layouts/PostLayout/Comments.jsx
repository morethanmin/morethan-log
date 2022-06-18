import CONFIG from '@/blog.config'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@/src/components/layouts/PostLayout/Utterances')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  return (
    <div>
      {CONFIG.utterances.enable && (
        <UtterancesComponent issueTerm={frontMatter.id} />
      )}
    </div>
  )
}

export default Comments
