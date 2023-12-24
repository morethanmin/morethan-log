import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { ReactCusdis } from "react-cusdis"

import useScheme from "@/hooks/useScheme"
import { CONFIG } from "site.config"

type Props = {
  id: string
  slug: string
  title: string
}

const Cusdis: React.FC<Props> = ({ id, slug, title }) => {
  const [value, setValue] = useState(0)
  const [scheme] = useScheme()

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
      <StyledWrapper id="comments">
        <ReactCusdis
          key={value}
          attrs={{
            host: CONFIG.cusdis.config.host,
            appId: CONFIG.cusdis.config.appid,
            pageId: id,
            pageTitle: title,
            pageUrl: `${CONFIG.link}/${slug}`,
            theme: scheme,
          }}
        />
      </StyledWrapper>
    </>
  )
}

export default Cusdis

const StyledWrapper = styled.div`
  margin-top: 2.5rem;
`
