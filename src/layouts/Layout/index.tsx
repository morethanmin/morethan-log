import Header from "./Header"
import MetaConfig, { MetaConfigProps } from "./MetaConfig"
import styled from "@emotion/styled"

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  metaConfig,
  fullWidth = false,
}) => {
  return (
    <StyledWrapper>
      <MetaConfig {...metaConfig} />
      {metaConfig.type !== "Paper" && <Header fullWidth={fullWidth} />}
      <main data-full-width={fullWidth} data-type={metaConfig.type}>
        {children}
      </main>
    </StyledWrapper>
  )
}

export default Layout

const StyledWrapper = styled.div`
  main {
    box-sizing: border-box;
    margin: 0 auto;
    flex-grow: 1;
    width: 100%;
    transition: all 0.5s;
    max-width: 1120px;
    padding: 0 1rem;
    &[data-full-width="true"] {
      padding: 0 1rem;
      @media (min-width: 768px) {
        padding: 0 96px;
      }
    }
    &[data-type="Paper"] {
      padding: 40px 0;
    }
  }
`
