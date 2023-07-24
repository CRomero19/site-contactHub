import { StyledContactPage } from "./style";
import useAuth from "../../Context/hooks/useAuth";
import { UserDashboard } from "../../Components/UserDashboard";
import { ContactCard } from "../../Components/ContactCard";

export const ContactsPage = () => {

  const { user } = useAuth();

  return (
    <StyledContactPage>
      <div>
        <h1> Bem vindo, { 
          user?
          <span> {user.name}!</span>
          :
          <span> usuario</span>
        }</h1>
      </div>
      
      
      <div>
        <h2>Contatos registrados:</h2>
        <ul className="container__contacts-list">
          <li>  <ContactCard/> </li>
          <li>  <ContactCard/> </li>
        </ul>
      </div>
      <UserDashboard/>
    </StyledContactPage>
  );
}; 