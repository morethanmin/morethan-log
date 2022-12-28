import { useState } from 'react'

import * as Cards from './components/cards'
import * as Lists from './components/lists'

import { TPosts, TTags } from '@custeomTypes/index'
import SearchInput from './components/SearchInput'
import PostHeader from './components/Header'
import Footer from './components/Footer'

type Props = {
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ tags, posts }) => {
  const [q, setQ] = useState('')

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <Lists.TagList className="hidden lg:block col-span-2" data={tags} />
      <div className="col-span-12 lg:col-span-7">
        <Cards.MobileProfileCard />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <Lists.TagList className="block lg:hidden" data={tags} />
        <PostHeader tags={tags} />
        <Lists.PostList q={q} posts={posts} tags={tags} />
        <Footer className="block lg:hidden flex justify-center pb-8" />
      </div>
      <div className="hidden lg:block lg:col-span-3">
        <Cards.ProfileCard />
        <Cards.ServiceCard />
        <Cards.ContactCard />
        <Footer className="pt-4" />
      </div>
    </div>
  )
}

export default Feed
