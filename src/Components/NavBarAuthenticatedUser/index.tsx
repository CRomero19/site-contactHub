import { Link } from "react-router-dom";
import { StyledNavBarAuthenticated } from "./style";
import useHeader from "../../Context/hooks/useHeader";

export const NavBarAuthenticatedUser = () => {
  const { menuVisibility } = useHeader();
  
  return (
    <StyledNavBarAuthenticated>
      <ul>
        <li onClick={menuVisibility}> <Link to="/registercontact"> Criar contato </Link> </li>
        <li onClick={menuVisibility}> <Link to="/contacts"> Gerenciar contatos </Link> </li>
        <li onClick={menuVisibility}> <Link to="/updateContact"> Atualizar contato </Link> </li>
        <li onClick={menuVisibility}> <Link to="/updateuser"> Atualizar user </Link> </li>
      </ul>
    </StyledNavBarAuthenticated>
  );
};
