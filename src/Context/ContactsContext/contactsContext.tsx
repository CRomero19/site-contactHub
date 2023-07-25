import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Services/api";
import { ContactType, IChildrenProps, IRegisterNewContactFormData, IUpdateUserFormData} from "../types/@types";
import { notifyFailed, notifySuccess } from "../../Notifications/notifications";
import { IContactContext } from "../interfaces/ContactsContext";

export const ContactsContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IChildrenProps) => {
 
  const navigate = useNavigate();
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
  }, [contacts]);

  const handleSubmitRegisterNewContact = async (formData: IRegisterNewContactFormData ) => {
    const token = localStorage.getItem("@USERTOKEN");

    try {
      await baseURL.post("/contacts", formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess("Cadastro realizado com sucesso!");
      navigate(`/contacts`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar o cadastro! Tente novamente.");
    }
  };

  const handleUpdateContact = async (contactId:number,formData: IUpdateUserFormData) => {
    const token = localStorage.getItem("@USERTOKEN")
    const userId = localStorage.getItem("@USERID")
    try {
      const response = await baseURL.patch(`/contacts/${contactId}/users/${userId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess("Atualizamos os dados!");
      setContacts([...contacts,response.data]) 
    } catch (error) {
      notifyFailed("Tente novamente mais tarde!");
    }
  }; 

  const handleDeleteContact = async (contactId:number) => {
    const userId = localStorage.getItem("@USERID")
    const token = localStorage.getItem("@USERTOKEN")
    try {
      await baseURL.delete(`/contacts/${contactId}/users/${userId}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess("Contato deletado.");
      /* SETAR OS CONTATOS NO REACT */
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar a deleção, tente mais tarde!");
    }
  };


  return (
    <ContactsContext.Provider
      value={{
        handleSubmitRegisterNewContact,
        handleUpdateContact,
        handleDeleteContact,
        contacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
