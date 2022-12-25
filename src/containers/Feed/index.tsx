import { useState } from 'react'

import ProfileCard from './components/cards/ProfileCard'
import ContactCard from './components/cards/ContactCard'
import ServiceCard from './components/cards/ServiceCard'

import { TPosts, TTags } from '@/src/types/post'
import SearchInput from './components/SearchInput'
import PostHeader from './components/Header'
import PostList from './components/lists/PostList'
import Footer from './components/Footer'
import TagList from './components/lists/TagList'

type Props = {
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ tags, posts }) => {
  const [q, setQ] = useState('')
  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <div className="col-span-2">
        <TagList data={tags} />
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-7 ">
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <PostHeader tags={tags} />
        <PostList q={q} posts={posts} tags={tags} />
      </div>
      <div className="hidden lg:block col-span-3">
        <ProfileCard />
        <ServiceCard />
        <ContactCard />
        <Footer />
      </div>
    </div>
  )
}

export default Feed
