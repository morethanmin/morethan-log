import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "Categories", to: "/categories" },
    { id: 2, name: "Tags", to: "/tags" },
    { id: 3, name: "About", to: "/about" }
  ]
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
      
      a {
        font-size: 1rem;
        text-decoration: none;
        color: inherit;
        
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
        
        @media (max-width: 480px) {
          font-size: 0.85rem;
        }
      }
      
      @media (max-width: 480px) {
        margin-left: 0.75rem;
      }
    }
  }
`
