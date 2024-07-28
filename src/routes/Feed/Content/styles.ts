import { css } from "@emotion/react"

export const wrapperStyle = css`
  grid-column: span 12 / span 12;

  @media (min-width: 1024px) {
    grid-column: span 7 / span 7;
  }
`

export const footerStyle = css`
  padding-bottom: 2rem;
  @media (min-width: 1024px) {
    display: none;
  }
`
