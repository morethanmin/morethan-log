import { CONFIG } from "site.config"
import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  const link = { id: 1, name: "Privacy Policy", to: "/privacy-policy" }
  return (
    <StyledWrapper className={className}>
      <a
        href={`https://creativecommons.org/licenses/by-nc-nd/4.0/`}
        target="_blank"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
      <br></br>
      <Link href={link.to}>{link.name}</Link>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`
