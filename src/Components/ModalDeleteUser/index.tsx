import { StyledModalDeleteUser } from "./style";

interface Props {
  setVisibility: () => void;
}

export const ModalDeleteUser = ({setVisibility}:Props) => {
   
  return (
    <StyledModalDeleteUser>
      <div className="container__modal">
        <p>Tem certeza que deseja deletar sua conta?</p> 
        <button onClick={setVisibility}>Sim</button> <button onClick={setVisibility}>Cancelar</button>
      </div> 
    </StyledModalDeleteUser>
  );
};
