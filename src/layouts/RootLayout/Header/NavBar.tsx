import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "Resume", to: "https://drive.google.com/file/d/1ZDuj3J7Ex6q1e68_Zs1VORQn3aHaefTu/view" }]
  // 원래 라우팅은 /about 로 밀기.
  // https://drive.google.com/file/d/1ZDuj3J7Ex6q1e68_Zs1VORQn3aHaefTu/view
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
