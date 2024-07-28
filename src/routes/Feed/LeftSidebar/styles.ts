import { css } from "@emotion/react"
import { HEADER_HEIGHT } from "../styles"

export const wrapperStyle = css`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  display: none;
  overflow: scroll;
  position: sticky;
  grid-column: span 2 / span 2;
  top: ${HEADER_HEIGHT - 10}px;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`
