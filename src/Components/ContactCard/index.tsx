import { useState } from "react";
import { ContactType } from "../../Context/types/@types";
import { ModalDeleteContact } from "../ModalDeleteContact";
import { ModalUpdateContact } from "../ModalUpdateContact";
import { StyledContactCard } from "./style";

interface Props {
  contactInfo: ContactType;
}

export const ContactCard = ({contactInfo}:Props) => {
  
  const [modalUpdateContactVisibility, setModalUpdateContactVisibility] = useState("hidden-modal-update-contact");

  const handleVisibilityUpdateContactModal  = () => {
    modalUpdateContactVisibility == "hidden-modal-update-contact"
      ? setModalUpdateContactVisibility("visible-modal-update-contact")
      : setModalUpdateContactVisibility("hidden-modal-update-contact");
  };

  const [modalDeleteContactVisibility, setModalDeleteContactVisibility] = useState("hidden-modal-delete-contact");

  const   handleVisibilityDeleteContactModal  = () => {
    modalDeleteContactVisibility == "hidden-modal-delete-contact"
      ? setModalDeleteContactVisibility("visible-modal-delete-contact")
      : setModalDeleteContactVisibility("hidden-modal-delete-contact");
  };
  
  return (
    <StyledContactCard>
        <p> {contactInfo.name} </p> 
        <p> {contactInfo.telefone} </p>
        <p> {contactInfo.email}</p>
        <div> <button onClick={handleVisibilityUpdateContactModal}> Edit </button> <button onClick={handleVisibilityDeleteContactModal}> Delete </button> </div>


        <div className={modalUpdateContactVisibility}>
          <ModalUpdateContact contactInfo={contactInfo} setVisibility={handleVisibilityUpdateContactModal}/>
        </div>

        <div className={modalDeleteContactVisibility}>
            <ModalDeleteContact contactId={contactInfo.id} setVisibility={handleVisibilityDeleteContactModal}/>
        </div>
    </StyledContactCard>
  );
};
