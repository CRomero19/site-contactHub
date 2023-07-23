import { WelcomePage } from "../../Components/WelcomePage";
import { StyledLandingPage } from "./style";

export const LandingLoginPage = () => {
  return (
    <StyledLandingPage>
      <WelcomePage form={"login"}/>
    </StyledLandingPage>
  );
};

