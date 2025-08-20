import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"
import { useEffect, useState } from "react"

type Props = {
  fullWidth: boolean
  showProgress?: boolean  // <- 이 prop 추가
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setProgress(scrolled > 100 ? 100 : scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <StyledWrapper>
      <HeaderWrapper>
        <div data-full-width={fullWidth} className="container">
          <Logo />
          <div className="nav">
            <ThemeToggle />
            <NavBar />
          </div>
        </div>
      </HeaderWrapper>
      {/*진행 스크롤*/}
      {/*<ProgressBar style={{ width: `${progress}%` }} />*/}
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  position: sticky;
  top: 0;
  backdrop-filter: blur(30px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); // 얇은 그림자
`

const HeaderWrapper = styled.div`
  padding: 10px 0;
  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    height: 2rem;
    margin: 0 auto;
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`
// 진행 스크롤
// const ProgressBar = styled.div`
//   height: 0.2rem;
//   background-color: ${({ theme }) => theme.colors.gray11};
//   opacity: 0.6;
//   transition: width 0.3s ease-out;
// `
