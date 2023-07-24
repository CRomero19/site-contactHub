import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/index.css";
import { StyledHeader } from "./style";
import useHeader from "../../Context/hooks/useHeader";
import { TfiAgenda } from "react-icons/tfi";
import { NavBar } from "../NavBar";

interface HeaderProps {
  style?: React.CSSProperties;
}

export const UserDashboard = ({ style }: HeaderProps) => {
  const { menuVisibility, navBarVisibility } = useHeader();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/contacts");
  };
  
  return (
    <StyledHeader style={style}>
      <p onClick={() => {
          goToHome();
        }} className="logo"> < TfiAgenda /> Contact Hub</p>

      <div className={navBarVisibility}>
        <NavBar />
      </div>

      <div className="hamburger" onClick={() => menuVisibility()}>
        <FaBars size={35} color={"black"} />
      </div>
    </StyledHeader>
  );
};
