import { WelcomePage } from "../../Components/WelcomePage";
import { StyledRegisterUserPage } from "./style";

export const RegisterUser = () => {
  return (
    <StyledRegisterUserPage>
      <WelcomePage form={"register"}/>
    </StyledRegisterUserPage>
  );
};