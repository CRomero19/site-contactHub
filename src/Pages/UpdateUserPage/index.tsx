import { UserDashboard } from "../../Components/UserDashboard";
import { StyledUpdateUser } from "./style";

export const UpdateUserPage = () => {
  return (
    <StyledUpdateUser>
      <UserDashboard/>
      <h1> Pagina de atualização de usuário </h1>
    </StyledUpdateUser>
  );
};