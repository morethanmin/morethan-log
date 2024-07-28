import { css } from "@emotion/react"
import { respondMobile, variables } from "src/styles"

export const wrapperStyle = css`
  height: calc(100vh - ${variables.headerHeight + 16}px);
  overflow: scroll;
  position: sticky;
  grid-column: span 2 / span 2;
  top: ${variables.headerHeight + 16 - 10}px;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  display: block;

  ${respondMobile} {
    display: none;
  }
`
