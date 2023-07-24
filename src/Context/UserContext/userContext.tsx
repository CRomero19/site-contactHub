import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Services/api";
import { IUserContext } from "../interfaces/IUserContext";
import { IChildrenProps, ILoginFormData, IRegisterFormData, IRegisterNewContactFormData, IUser} from "../types/@types";
import { notifyFailed, notifyLoading, notifySuccess } from "../../Notifications/notifications";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [userId, setUserId] = useState<number>(0);
  const [user, setUser] = useState(null as IUser | null);
  const navigate = useNavigate();

  const autoLogin = async () => {
    const token = localStorage.getItem("@USERTOKEN")
    const iduser = localStorage.getItem("@USERID")
    try {
        const response = await baseURL.get(`/users/${iduser}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data)
        setUser(response.data);
    } catch (error) {
        localStorage.removeItem("@USERTOKEN");
        localStorage.removeItem("@USERID");
    }
  };

  useEffect(() => {
      const token = localStorage.getItem("@USERTOKEN");
      if (token) {
          autoLogin();
      }
  }, []);

  const handleSubmitLogin = async (formData: ILoginFormData) => {
    try {
      const response = await baseURL.post("/login", formData);
      notifySuccess("Login realizado com sucesso!");
      localStorage.setItem("@USERTOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.userId);

      const iduser = Number(localStorage.getItem("@USERID"))

      setUserId(iduser);
      
      navigate(`/welcomeuser`);
    } catch (error) {
      notifyFailed(
        "Ocorreu um erro ao validar suas credenciais! Tente novamente."
      );
    }
  };

  const handleSubmitRegister = async (formData: IRegisterFormData) => {
    notifyLoading("Registrando cadastro no servidor...");
    try {
      await baseURL.post("/users", formData);
      notifySuccess("Cadastro realizado com sucesso!");
      navigate(`/`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar o cadastro! Tente novamente.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    notifySuccess("Logout realizado com sucesso!");
    setUserId(0);
    navigate("/");
  };

  const handleSubmitRegisterNewContact = async (formData: IRegisterNewContactFormData ) => {
    notifyLoading("Registrando cadastro no servidor...");
    const token = localStorage.getItem("@USERTOKEN");

    try {
      await baseURL.post("/contacts", formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess("Cadastro realizado com sucesso!");
      navigate(`/contacts`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar o cadastro! Tente novamente.");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userId,
        handleSubmitLogin,
        handleSubmitRegister,
        handleLogout,
        handleSubmitRegisterNewContact
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
