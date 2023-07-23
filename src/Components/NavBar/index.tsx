import useAuth from "../../Context/hooks/useAuth";
import { NavBarAuthenticatedUser } from "../NavBarAuthenticatedUser";
import { NavBarUnauthenticatedUser } from "../NavBarUnauthentucatedUser";
import { StyledNavBar } from "./style";

export const NavBar = () => {
  const { user } = useAuth();

  const handleNavLinks = () => {
    if (!user) {
      return <NavBarUnauthenticatedUser />;
    }
    if (user) {
      return <NavBarAuthenticatedUser />;
    }
  }; 

  return <StyledNavBar> { handleNavLinks() } </StyledNavBar>;
};
