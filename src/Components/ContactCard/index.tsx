import { ContactType } from "../../Context/types/@types";
import { StyledContactCard } from "./style";

interface Props {
  contactInfo: ContactType;
}

export const ContactCard = ({contactInfo}:Props) => {
  
  return (
    <StyledContactCard>
        <p> {contactInfo.name} </p> 
        <p> {contactInfo.telefone} </p>
        <p> {contactInfo.email}</p>
        <button> Edit </button>
    </StyledContactCard>
  );
};
