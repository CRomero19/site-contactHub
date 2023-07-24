import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdateUserFormData } from "../../../../Context/types/@types";
import useAuth from "../../../../Context/hooks/useAuth";
import { ButtonSubmit } from "../../../ButtonSubmit";
import { schemaUpdateForm } from "./schema";
import { StyledUpdateUserForm } from "./style";

export const UserUpdateForm = () => {
  const { handleUpdateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState:{}
  } = useForm<IUpdateUserFormData | any>({ resolver: yupResolver(schemaUpdateForm) });

  const submitRegister: SubmitHandler<IUpdateUserFormData> = (formData) => {
    console.log(formData);
    handleUpdateUser(formData);
  };

  return (
    <StyledUpdateUserForm>
      <h1>  Atualizar informações  </h1>
      <form action="" onSubmit={handleSubmit(submitRegister)}>
        <label htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />

        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />

        <label htmlFor="name">
          Telefone 
        </label>
        <input
          id="telefone"
          type="text"
          placeholder="Digite seu telefone"
          {...register("telefone")}
        />

        <ButtonSubmit text={"Atualizar"} />
      </form>

     
    </StyledUpdateUserForm>
  );
};
