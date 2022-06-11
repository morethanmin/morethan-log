import BLOG from '@/blog.config'
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
      {BLOG.comment && BLOG.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={frontMatter.id} />
      )}
    </div>
  )
}

export default Comments
