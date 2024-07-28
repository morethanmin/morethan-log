import { css } from "@emotion/react"
import { HEADER_HEIGHT } from "../styles"

export const wrapperStyle = css`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  display: none;
  overflow: scroll;
  position: sticky;
  top: ${HEADER_HEIGHT - 10}px;

  @media (min-width: 1024px) {
    display: block;
    grid-column: span 3 / span 3;
  }
`
