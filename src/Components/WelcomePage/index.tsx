import { LoginForm } from "../Forms/User/LoginUserForm";
import { RegisterForm } from "../Forms/User/RegisterUserForm";
import { StyledWelcomePage } from "./style";

interface Props {
  form: string;
}

export const WelcomePage = ({form}:Props) => {
  return (
    <StyledWelcomePage>
      
      <div>
        <h1> ContactHub </h1>
        <p> Simplifique o gerenciamento de contatos com o ContactHub! Cadastre e organize seus contatos em um só lugar, mantendo-se conectado de forma prática. Experimente agora e otimize sua vida! </p>
      </div>

      <div className="form">
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

