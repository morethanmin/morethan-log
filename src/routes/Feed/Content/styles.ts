import { css } from "@emotion/react"
import { respondMobile } from "src/styles"

export const wrapperStyle = css`
  grid-column: span 7 / span 7;

  ${respondMobile} {
    grid-column: span 12 / span 12;
  }
`

export const tagListStyle = css`
  display: none;

  ${respondMobile} {
    display: block;
  }
`

export const footerStyle = css`
  display: none;
  ${respondMobile} {
    padding-bottom: 2rem;
  }
`
