import { colors } from "../styles/colors"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

const colorArray = [
  colors.light.red4,
  colors.light.amber4,
  colors.light.green4,
  colors.light.blue4,
  colors.light.indigo4,
  colors.light.purple4,
  colors.light.pink4,
]

type Props = {
  children: string
  tag_id: number
}

const Tag: React.FC<Props> = ({ children, tag_id }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }

  const StyledTag = styled.div`
    background-color: ${colorArray[tag_id % colorArray.length]};
    color: ${colors.light.gray10};
    padding: 0.25rem 0.5rem;
    border-radius: 50px;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
    cursor: pointer;
  `

  return <StyledTag onClick={() => handleClick(children)}>{children}</StyledTag>
}

export default Tag
