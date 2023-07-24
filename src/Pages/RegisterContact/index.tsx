import { RegisterNewContactForm } from "../../Components/Forms/Contacts/RegisterNewContactForm";
import { UserDashboard } from "../../Components/UserDashboard";
import { StyledRegisterContactPage } from "./style";

export const RegisterContact = () => {
  return (
    <StyledRegisterContactPage>
      <UserDashboard/>
      <RegisterNewContactForm/>
    </StyledRegisterContactPage>
  );
};

