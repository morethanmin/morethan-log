import { cusdis, link } from "site.config"
import { ReactCusdis } from "react-cusdis"
import { useCallback, useEffect, useState } from "react"

type Props = {
  id: string
  slug: string
  title: string
}

const Cusdis: React.FC<Props> = ({ id, slug, title }) => {
  const [value, setValue] = useState(0)

  const onDocumentElementChange = useCallback(() => {
    setValue((value) => value + 1)
  }, [])

  useEffect(() => {
    const changesObserver = new MutationObserver(
      (mutations: MutationRecord[]) => {
        mutations.forEach((mutation: MutationRecord) => {
          onDocumentElementChange()
        })
      }
    )

    changesObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
    })

    return () => {
      changesObserver.disconnect()
    }
  }, [onDocumentElementChange])

  return (
    <>
      <div id="comments" className="mt-10">
        <ReactCusdis
          key={value}
          attrs={{
            host: cusdis.config.host,
            appId: cusdis.config.appid,
            pageId: id,
            pageTitle: title,
            pageUrl: `${link}/${slug}`,
            theme: document.documentElement.classList.contains("dark")
              ? "dark"
              : "light",
          }}
        />
      </div>
    </>
  )
}

export default Cusdis
