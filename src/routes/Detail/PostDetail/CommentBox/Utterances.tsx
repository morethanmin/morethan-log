import { CONFIG } from "site.config"
import { useEffect } from "react"
import styled from "@emotion/styled"

//TODO: useRef?

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  useEffect(() => {
    const theme = "github-light"
    // 'github-dark'
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")
    if (!anchor) return

    script.setAttribute("src", "https://utteranc.es/client.js")
    script.setAttribute("crossorigin", "anonymous")
    script.setAttribute("async", `true`)
    script.setAttribute("issue-term", issueTerm)
    script.setAttribute("theme", theme)
    const config: { [key: string]: string } = CONFIG.utterances.config
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key])
    })
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ""
    }
  })
  return (
    <>
      <StyledWrapper id="comments">
        <div className="utterances-frame"></div>
      </StyledWrapper>
    </>
  )
}

export default Utterances

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`
