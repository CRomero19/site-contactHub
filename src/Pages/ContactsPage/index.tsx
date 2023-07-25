import { StyledContactPage } from "./style";
import useAuth from "../../Context/hooks/useAuth";
import { UserDashboard } from "../../Components/UserDashboard";
import { ContactCard } from "../../Components/ContactCard";
import useContacts from "../../Context/hooks/useContacts";

export const ContactsPage = () => {

  const { user } = useAuth();
  const { contacts }= useContacts()

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
        { contacts!.length > 0  ? 
          <p> Contatos registrados:</p>  
          :
          <p> Ainda não há contatos registrados</p>
        }
        
        <ul className="container__contacts-list">
        {
          contacts ?
          contacts.map((contact) => (
            <li key={contact.id}> <ContactCard contactInfo={contact}/> </li>
          ))
          :
          <p> Carregando...</p>
        }
        </ul>
      </div>

      <UserDashboard/>

    </StyledContactPage>
  );
}; 