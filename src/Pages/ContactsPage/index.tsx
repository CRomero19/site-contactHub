import { StyledContactPage } from "./style";
import useAuth from "../../Context/hooks/useAuth";

export const ContactsPage = () => {
  const { user } = useAuth();

  console.log(user)
  return (
    <StyledContactPage>
      <h1> Bem vindo!{user!.name}</h1>
    </StyledContactPage>
  );
};
