import { css } from "@emotion/react"
import { respondMobile, variables } from "src/styles"

export const wrapperStyle = css`
  height: calc(100vh - ${variables.headerHeight + 16}px);
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  display: block;
  overflow: scroll;
  position: sticky;
  top: ${variables.headerHeight + 16 - 10}px;
  grid-column: span 3 / span 3;

  ${respondMobile} {
    display: none;
  }
`
