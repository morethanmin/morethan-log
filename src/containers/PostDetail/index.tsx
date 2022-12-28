import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from 'react-notion-x'
import CommentBox from '@containers/PostDetail/components/CommentBox'
import Footer from './components/PostFooter'
import PostHeader from './components/PostHeader'
import { TPost } from '@/src/types'

const mapPageUrl = (id: string) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

type Props = {
  blockMap: any
  data: TPost
}

const PostDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <div
      className={`m-auto max-w-4xl bg-white dark:bg-zinc-700 rounded-3xl py-12 px-6 shadow-md`}
    >
      <article className="m-auto max-w-2xl">
        <PostHeader data={data} />
        {blockMap && (
          <div className="-mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow,
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
        {data.type[0] !== 'Page' && (
          <>
            <Footer />
            <CommentBox data={data} />
          </>
        )}
      </article>
    </div>
  )
}

export default PostDetail
