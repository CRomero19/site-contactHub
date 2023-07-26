import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Services/api";
import { IUserContext } from "../interfaces/IUserContext";
import { IChildrenProps, ILoginFormData, IRegisterFormData, IRegisterNewContactFormData, IUpdateUserFormData, IUser} from "../types/@types";
import { notifyFailed, notifySuccess } from "../../Notifications/notifications";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [userId, setUserId] = useState<number>(0);
  const [user, setUser] = useState(null as IUser | null);
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("@USERTOKEN")
      const iduser = localStorage.getItem("@USERID")
      try {
          const response = await baseURL.get(`/users/${iduser}/`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          setUser(response.data);
      } catch (error) {
          localStorage.removeItem("@USERTOKEN");
          localStorage.removeItem("@USERID");
      }
    };
    const token = localStorage.getItem("@USERTOKEN")
    if (token) {
        const iduser = Number(localStorage.getItem("@USERID"))
        setUserId(iduser);
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

  const handleUpdateUser = async (formData: IUpdateUserFormData) => {
    const token = localStorage.getItem("@USERTOKEN")
    const userId = localStorage.getItem("@USERID")
    
    try {
      const response = await baseURL.patch(`/users/${userId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess("Atualizamos seus dados!");
      setUser(response.data)
      navigate(`/updateuser`);
    } catch (error) {
      notifyFailed("Tente novamente mais tarde!");
    }
  }; 

  const handleSubmitRegister = async (formData: IRegisterFormData) => {
    
    try {
      await baseURL.post("/users", formData);
      notifySuccess("Cadastro realizado com sucesso!");
      navigate(`/`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar o cadastro! Tente novamente.");
    }
  };

  const handleDeleteAccount = async () => {
    const userId = localStorage.getItem("@USERID")
    const token = localStorage.getItem("@USERTOKEN")
    try {
      await baseURL.delete(`/users/${userId}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess("Usuário deletado.");
      localStorage.clear();
      navigate(`/`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar a deleção, tente mais tarde!");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    notifySuccess("Logout realizado com sucesso!");
    setUserId(0);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userId,
        handleSubmitLogin,
        handleSubmitRegister,
        handleUpdateUser,
        handleLogout,
        handleDeleteAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
