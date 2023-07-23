import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/index.css";
import { NavBar } from "../NavBar";
import { StyledHeader } from "./style";
import useHeader from "../../Context/hooks/useHeader";

interface HeaderProps {
  style?: React.CSSProperties;
}

export const Header = ({ style }: HeaderProps) => {
  const { menuVisibility, navBarVisibility } = useHeader();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  
  return (
    <StyledHeader style={style}>
      <img
        src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fbr%2Fvetor%2Flogotipo-de-bolo-preto-e-branco-lindamente-projetado-%25C3%25A9-ideal-para-qualquer-neg%25C3%25B3cio-gm1456707966-491663313&psig=AOvVaw31PGTaiZ2iWQdzffcPNnka&ust=1690204883037000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjz7P71pIADFQAAAAAdAAAAABAD"}
        alt="logo"
        onClick={() => {
          goToHome();
        }}
      />

      <div className={navBarVisibility}>
        <NavBar />
      </div>

      <div className="hamburger" onClick={() => menuVisibility()}>
        <FaBars size={35} color={"black"} />
      </div>
    </StyledHeader>
  );
};
