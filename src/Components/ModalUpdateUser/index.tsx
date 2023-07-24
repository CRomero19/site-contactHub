import { UserUpdateForm } from "../Forms/User/UpdateUserForm";
import { StyledModalUpdateUser } from "./style";

interface Props {
  setVisibility: () => void;
}

export const ModalUpdateUser = ({setVisibility}:Props) => {
   
  return (
    <StyledModalUpdateUser>
      <div className="container__modal">
        <UserUpdateForm/>
        <button onClick={setVisibility} className="close-btn">x</button>
      </div> 
    </StyledModalUpdateUser>
  );
};
