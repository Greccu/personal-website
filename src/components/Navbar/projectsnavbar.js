import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  PNavMenu,
  NavItem,
  NavLinkR,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={true} margin={true}>
          <NavbarContainer>
            <PNavMenu>
              <NavItem>
                <NavLinkR to="">Home</NavLinkR>
              </NavItem>
            </PNavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
