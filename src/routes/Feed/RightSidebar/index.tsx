import { FC } from "react"
import Footer from "../components/Footer"
import ContactCard from "./ContactCard"
import ProfileCard from "./ProfileCard"
import ServiceCard from "./ServiceCard"
import { wrapperStyle } from "./styles"

const RightSidebar: FC = () => {
  return (
    <div css={wrapperStyle}>
      <ProfileCard />
      <ServiceCard />
      <ContactCard />
      <Footer css={{ paddingTop: "1rem" }} />
    </div>
  )
}

export default RightSidebar
