import Layout from '@components/Layout'
import Feed from '@containers/Feed'
import CONFIG from '../../morethan-log.config'
import { NextPageWithLayout } from './_app'
import { TPosts, TTags } from '../types'
import Error from '../containers/CustomError'

type Props = {
  tags: TTags
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <Error />
}

NotFoundPage.getLayout = function getlayout(page) {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'website',
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  )
}

export default NotFoundPage
