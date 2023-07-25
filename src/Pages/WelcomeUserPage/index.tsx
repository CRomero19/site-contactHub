import { UserDashboard } from "../../Components/UserDashboard";
import useAuth from "../../Context/hooks/useAuth";
import { StyledWelcomeUserPage } from "./style";

export const WelcomeUserPage = () => {

  const {user} = useAuth()
  
  return (
    <StyledWelcomeUserPage>
      <UserDashboard/>
      <div className="container__greetings">
        <h1> Bem vindo, {user && user.name} </h1>
        <p>Se você está procurando uma maneira fácil de manter seus contatos pessoais ou profissionais em ordem, você veio ao lugar certo.</p>
        <p>Recursos Principais:</p>
        <ol>
          <li><strong>1. Armazenamento Seguro:</strong> Mantenha seus contatos em um ambiente seguro e protegido. Utilizamos as mais avançadas medidas de segurança para garantir a privacidade e confidencialidade dos seus dados.</li>
          <li><strong>2. Organização Inteligente:</strong> Categorize seus contatos em grupos personalizados, facilitando o acesso e a busca rápida. Nunca mais perca informações importantes!</li>
          <li><strong>3. Edição Simplificada:</strong> Atualize as informações dos seus contatos com facilidade. Nosso sistema intuitivo permite que você faça alterações de forma rápida e precisa.</li>
          <li><strong>4. Comunicação Integrada:</strong> Comunique-se diretamente com seus contatos através da plataforma. Envie e-mails ou mensagens instantâneas para manter-se conectado.</li>
          <li><strong>5. Sincronização Multiplataforma:</strong> Acesse seus contatos em qualquer lugar, a qualquer momento. Nossa plataforma é compatível com diversos dispositivos, garantindo que você esteja sempre atualizado.</li>
        </ol>
        <p>Estamos aqui para ajudar a simplificar suas interações e manter você conectado com quem mais importa!!</p>
      </div>
    </StyledWelcomeUserPage>
  );
};

