import { Link } from "react-router-dom";
import { StyledNavBar } from "./style";
import useHeader from "../../Context/hooks/useHeader";
import { FaSignOutAlt } from "react-icons/fa";

export const NavBar = () => {
  const { menuVisibility } = useHeader();
  
  return (
    <StyledNavBar>
      <ul>
        <li onClick={innerWidth < 1024 ? menuVisibility : undefined}> <Link to="/contacts"> Gerenciar contatos </Link> </li>
        <li onClick={innerWidth < 1024 ? menuVisibility : undefined}> <Link to="/registercontact"> Novo contato </Link> </li>
        <li onClick={innerWidth < 1024 ? menuVisibility : undefined}> <Link to="/updateuser"> Minhas informações </Link> </li>
        <li> <button type="button" className="btn-logout" onClick={innerWidth < 1024 ? menuVisibility : undefined}> <FaSignOutAlt/> </button> </li>
      </ul>
    </StyledNavBar>
  );
};
