import TagItem from '@/components/layouts/PostLayout/TagItem'
import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from 'react-notion-x'
import CONFIG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import { useLocale } from '@/lib/locale'
import { useRouter } from 'next/router'
import Comments from '@/src/components/layouts/PostLayout/Comments'

const mapPageUrl = (id) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

const PostLayout = ({ children, blockMap, data }) => {
  const locale = useLocale()
  const router = useRouter()
  const isAboutPage = router.query.slug === 'about'
  return (
    <>
      <article>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {data.title}
        </h1>
        {data.type[0] !== 'Page' && (
          <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
            {/* 작성자는 개인 블로그이므로 disable */}
            {/* <div className="flex mb-4">
              <a href={CONFIG.socialLink || '#'} className="flex">
                <Image
                  alt={CONFIG.author}
                  width={24}
                  height={24}
                  src={`https://gravatar.com/avatar/${emailHash}`}
                  className="rounded-full"
                />
                <p className="ml-2 md:block">{CONFIG.author}</p>
              </a>
              <span className="block">&nbsp;/&nbsp;</span>
            </div> */}
            <div className="mr-2 mb-4 md:ml-0">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
            {data.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                {data.tags.map((tag) => (
                  <TagItem key={tag} tag={tag} />
                ))}
              </div>
            )}
          </nav>
        )}
        {children}
        {/* 해당 컴포넌트에서 warning 발생 ㅡㅡ */}
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
      </article>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
        <a>
          <button
            onClick={() => router.push(CONFIG.path || '/')}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ← {locale.POST.BACK}
          </button>
        </a>
        <a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ↑ {locale.POST.TOP}
          </button>
        </a>
      </div>
      {isAboutPage === false && <Comments data={data} />}
    </>
  )
}

export default PostLayout
