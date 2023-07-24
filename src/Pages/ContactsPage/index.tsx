import { StyledContactPage } from "./style";
import useAuth from "../../Context/hooks/useAuth";
import { UserDashboard } from "../../Components/UserDashboard";
import { ContactCard } from "../../Components/ContactCard";
import { useEffect, useState } from "react";
import { baseURL } from "../../Services/api";
import { ContactType } from "../../Context/types/@types";
import { ClapSpinner } from "react-spinners-kit"

export const ContactsPage = () => {

  const { user } = useAuth();
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    const getUserContacts = async () => {
      const token = localStorage.getItem("@USERTOKEN")
      const iduser = localStorage.getItem("@USERID")
      try {
          const response = await baseURL.get(`/users/${iduser}/contacts`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          setContacts(response.data)
      } catch (error) {
          console.log(error)
      }
    };
      getUserContacts();
  }, []);
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
        {
          contacts ?
          contacts.map((contact) => (
            <li key={contact.id}> <ContactCard contactInfo={contact} /> </li>
          ))
          :
          <ClapSpinner size={60}/>
        }
        </ul>
      </div>
      <UserDashboard/>
    </StyledContactPage>
  );
}; 