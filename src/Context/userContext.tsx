import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../Services/api";
import { IUserContext } from "./interfaces/IUserContext";
import { IChildrenProps, ILoginFormData, IRegisterFormData, IUser,} from "./types/@types";
import { notifyFailed, notifyLoading, notifySuccess } from "../Notifications/notifications";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState<IUser | null | undefined>(null);

  const navigate = useNavigate();

  const handleSubmitLogin = async (formData: ILoginFormData) => {
    try {
      const response = await baseURL.post("/login", formData);
      notifySuccess("Login realizado com sucesso!");
      localStorage.setItem("@USERTOKEN", response.data.token);
      localStorage.setItem(
        "@AUTH:USER",
        `${response.data.id} - ${response.data.email}`
      );
      setUser(response.data);
      navigate(`/`);
    } catch (error) {
      notifyFailed(
        "Ocorreu um erro ao validar suas credenciais! Tente novamente."
      );
    }
  };

  const handleSubmitRegister = async (formData: IRegisterFormData) => {
    notifyLoading("Registrando cadastro no servidor...");
    try {
      await baseURL.post("/user", formData);
      notifySuccess("Cadastro realizado com sucesso!");
      navigate(`/login`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar o cadastro! Tente novamente.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    notifySuccess("Logout realizado com sucesso!");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleSubmitLogin,
        handleSubmitRegister,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
