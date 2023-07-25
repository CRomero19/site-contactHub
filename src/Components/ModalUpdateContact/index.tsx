import { ContactType } from "../../Context/types/@types";
import { UpdateContactForm } from "../Forms/Contacts/UpdateContact";
import { StyledModalUpdateContact } from "./style";

interface Props {
  contactInfo: ContactType;
  setVisibility: () => void;
}

export const ModalUpdateContact = ({contactInfo,setVisibility}:Props) => {
  return (
    <StyledModalUpdateContact>
      <div className="container__modal">
        <UpdateContactForm contactId={contactInfo.id}/>
        <button onClick={setVisibility} className="close-btn">x</button>
      </div>
    </StyledModalUpdateContact>
  );
};
