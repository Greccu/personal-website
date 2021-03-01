import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinkR,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={true} margin={true}>
          <NavbarContainer>
            <NavMenu>
              <NavItem>
                <NavLinkR to="">Home</NavLinkR>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
