import { Link } from "react-router-dom";
import { StyledNavBarUnauthenticated } from "./style";
import useHeader from "../../Context/hooks/useHeader";

export const NavBarUnauthenticatedUser = () => {
  const { menuVisibility } = useHeader();
  
  return (
    <StyledNavBarUnauthenticated>
      <ul>
        <li onClick={menuVisibility}> <Link to="/login"> login </Link> </li>
        <li onClick={menuVisibility}> <Link to="/register"> Criar conta </Link> </li>
      </ul>
    </StyledNavBarUnauthenticated>
  );
};
