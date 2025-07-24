import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.writeHead(301, {
    Location: '/feed.xml',
  })
  res.end()

  return {
    props: {},
  }
}

const FeedRedirect = () => null
export default FeedRedirect