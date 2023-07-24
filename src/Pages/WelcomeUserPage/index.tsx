import { UserDashboard } from "../../Components/UserDashboard";
import { StyledWelcomeUserPage } from "./style";

export const WelcomeUserPage = () => {
  return (
    <StyledWelcomeUserPage>
      <UserDashboard/>
      <h1> BEM VINDO USUÁRIO AQUI VC PODE ISSO ISSO E AQUILO </h1>
    </StyledWelcomeUserPage>
  );
};

