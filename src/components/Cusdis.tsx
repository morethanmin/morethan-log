import { cusdis, link } from "site.config"
import { ReactCusdis } from "react-cusdis"

type Props = {
  id: string
  slug: string
  title: string
}

const Cusdis: React.FC<Props> = ({ id, slug, title }) => {
  return (
    <>
      <div id="comments" className="mt-4">
        <ReactCusdis
          attrs={{
            host: cusdis.config.host,
            appId: cusdis.config.appid,
            pageId: id,
            pageTitle: title,
            pageUrl: `${link}/${slug}`,
            theme: "auto",
          }}
        />
      </div>
    </>
  )
}

export default Cusdis
