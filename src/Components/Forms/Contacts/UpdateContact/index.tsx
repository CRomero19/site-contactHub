import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdateUserFormData } from "../../../../Context/types/@types";
import useAuth from "../../../../Context/hooks/useAuth";
import { ButtonSubmit } from "../../../ButtonSubmit";
import { schemaUpdateForm } from "./schema";
import { StyledUpdateContactForm } from "./style";

interface Props {
  contactId:number;
}

export const UpdateContactForm = ({contactId}:Props) => {
  const { handleUpdateContact } = useAuth();

  const {
    register,
    handleSubmit,
    formState:{}
  } = useForm<IUpdateUserFormData | any>({ resolver: yupResolver(schemaUpdateForm) });

  const submitRegister: SubmitHandler<IUpdateUserFormData> = (formData) => {
    console.log(formData)
    console.log(contactId)
    handleUpdateContact(contactId,formData);
  };

  return (
    <StyledUpdateContactForm>
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

        <label htmlFor="telefone">
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

     
    </StyledUpdateContactForm>
  );
};
