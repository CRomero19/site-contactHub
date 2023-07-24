import { Link } from "react-router-dom";
import { StyledNavBar } from "./style";
import useHeader from "../../Context/hooks/useHeader";
import { FaSignOutAlt } from "react-icons/fa";

export const NavBar = () => {
  const { menuVisibility } = useHeader();
  
  return (
    <StyledNavBar>
      <ul>
        <li onClick={menuVisibility}> <Link to="/contacts"> Gerenciar contatos </Link> </li>
        <li onClick={menuVisibility}> <Link to="/registercontact"> Novo contato </Link> </li>
        <li onClick={menuVisibility}> <Link to="/updateuser"> Minhas informações </Link> </li>
        <li onClick={menuVisibility}> <button type="button" className="btn-logout"> <FaSignOutAlt/> </button> </li>
      </ul>
    </StyledNavBar>
  );
};
