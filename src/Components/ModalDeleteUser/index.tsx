import useAuth from "../../Context/hooks/useAuth";
import { StyledModalDeleteUser } from "./style";

interface Props {
  setVisibility: () => void;
}

export const ModalDeleteUser = ({setVisibility}:Props) => {
   const {handleDeleteAccount} = useAuth()

   const hendleClickYes = () =>{
    handleDeleteAccount()
    window.location.reload()
  }

  return (
    <StyledModalDeleteUser>
      <div className="container__modal">
        <p>Tem certeza que deseja deletar sua conta?</p> 
        <p>(Todos os contatos serão perdidos)</p>
        <button onClick={hendleClickYes}>Sim</button> <button onClick={setVisibility}>Cancelar</button>
      </div> 
    </StyledModalDeleteUser>
  );
};
