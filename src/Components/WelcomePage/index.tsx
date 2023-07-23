import { LoginForm } from "../Forms/User/LoginUserForm";
import { RegisterForm } from "../RegisterForm";
import { StyledWelcomePage } from "./style";

interface Props {
  form: string;
}

export const WelcomePage = ({form}:Props) => {
  return (
    <StyledWelcomePage>
      
      <div>
        <h1> ContactHub </h1>
        <p> Simplifique o gerenciamento de contatos com o ContactHub! Cadastre e organize seus contatos em um só lugar, mantendo-se conectado de forma prática. Experimente agora e otimize sua vida digital! </p>
      </div>

      <div>
        {
          form == 'login' && <LoginForm/>
        }
        {
          form == 'register' && <RegisterForm/>
        }
      </div>
    </StyledWelcomePage>
  );
};

