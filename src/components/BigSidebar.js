import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks"
import Logo from "./Logo"
import { useSelector } from "react-redux"

const BigSidebar = () => {
    const {isSidebarOpen}= useSelector((state)=>state.user);

  return (
    <Wrapper>
        <div className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
        <header>
        <Logo/>
        </header>

        <NavLinks/>
        </div>
        
        </div>
    </Wrapper>
  )
}

export default BigSidebar
