import { useState } from "react";
import { ModalDeleteUser } from "../../Components/ModalDeleteUser";
import { UserDashboard } from "../../Components/UserDashboard";
import { StyledUserInfoPage  } from "./style";
import useAuth from "../../Context/hooks/useAuth";
import { ModalUpdateUser } from "../../Components/ModalUpdateUser";

export const UserInfoPage = () => {

  const { user } = useAuth();

  const [modalDeleteUserVisibility, setModalDeleteUserVisibility] = useState("hidden-modal-delete");

  const handleVisibilityDeleteModal  = () => {
      modalDeleteUserVisibility == "hidden-modal-delete"
      ? setModalDeleteUserVisibility("visible-modal-delete")
      : setModalDeleteUserVisibility("hidden-modal-delete");
  };

  const [modalUpdateUserVisibility, setModalUpdateUserVisibility] = useState("hidden-modal-update");

  const handleVisibilityUpdateModal  = () => {
    modalUpdateUserVisibility == "hidden-modal-update"
      ? setModalUpdateUserVisibility("visible-modal-update")
      : setModalUpdateUserVisibility("hidden-modal-update");
  };

  return (
    <StyledUserInfoPage >

      <UserDashboard/>

      <div className="container__user-info">
        <h1> Suas informações </h1>
        {
          user?
          <div>
            <p> {user.name} </p>
            <p> {user.email} </p>
            <p> {user.telefone} </p>
          </div>
          :
          <p>Carregando...</p>
        }

        <button onClick={handleVisibilityUpdateModal}> Atualizar Informações </button>
        <button onClick={handleVisibilityDeleteModal}> Deletar conta </button>

      </div>

      <div className={modalDeleteUserVisibility}>
        <ModalDeleteUser setVisibility={handleVisibilityDeleteModal}/>
      </div>
      
      <div className={modalUpdateUserVisibility}>
        <ModalUpdateUser setVisibility={handleVisibilityUpdateModal}/>
      </div>

    </StyledUserInfoPage >
  );
};