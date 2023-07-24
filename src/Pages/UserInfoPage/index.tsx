import { UserDashboard } from "../../Components/UserDashboard";
import { StyledUserInfoPage  } from "./style";

export const UserInfoPage = () => {
  return (
    <StyledUserInfoPage >
      <UserDashboard/>
      <div className="container__user-info">
        <h1> Suas informações </h1>
        <p> César Romero do Carmo Júnior </p>
        <p> roner@mail.com </p>
        <p> 33999205945 </p>
        <button> Atualizar </button>
        <button> Deletar conta </button>
      </div>
    </StyledUserInfoPage >
  );
};