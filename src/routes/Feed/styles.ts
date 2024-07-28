import { css } from "@emotion/react"

export const HEADER_HEIGHT = 73

export const wrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: 2rem 0;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }
`
