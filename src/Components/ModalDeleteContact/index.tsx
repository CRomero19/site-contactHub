import useAuth from "../../Context/hooks/useAuth";
import { StyledModalDeleteUser } from "./style";

interface Props {
  setVisibility: () => void;
  contactId:number;
}

export const ModalDeleteContact = ({setVisibility,contactId}:Props) => {
   const {handleDeleteContact} = useAuth()

   const hendleClickYes = () =>{
    handleDeleteContact(contactId)
    window.location.reload()
  }

  return (
    <StyledModalDeleteUser>
      <div className="container__modal">
        <p>Tem certeza que deseja deletar esse contato?</p> 
        <button onClick={hendleClickYes}>Sim</button> <button onClick={setVisibility}>Cancelar</button>
      </div> 
    </StyledModalDeleteUser>
  );
};
