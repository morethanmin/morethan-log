import { css } from "@emotion/react"
import { respondMobile } from "src/styles"

export const wrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: 2rem 0;
  gap: 1.5rem;

  ${respondMobile} {
    display: block;
  }
`
