import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterNewContactFormData } from "../../../../Context/types/@types";
import { ButtonSubmit } from "../../../ButtonSubmit";
import { schemaRegisterForm } from "./schema";
import { StyledRegisterForm } from "./style";
import useContact from "../../../../Context/hooks/useContacts";

export const RegisterNewContactForm = () => {
  const { handleSubmitRegisterNewContact } = useContact()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterNewContactFormData >({ resolver: yupResolver(schemaRegisterForm) });

  const submitRegister: SubmitHandler<IRegisterNewContactFormData > = (formData) => {
    console.log(formData);
    handleSubmitRegisterNewContact(formData);
  };

  return (
    <StyledRegisterForm>
      <h1>  Cadastre um novo contato!  </h1>
      <form action="" onSubmit={handleSubmit(submitRegister)}>
        <label htmlFor="name">
          Nome: <span className="yup-error"> {errors.name?.message} </span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nome do contato"
          {...register("name")}
        />

        <label htmlFor="email">
          Email: <span className="yup-error"> {errors.email?.message} </span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email do contato"
          {...register("email")}
        />

        <label htmlFor="telefone">
          Telefone: <span className="yup-error"> {errors.telefone?.message} </span>
        </label>
        <input
          id="telefone"
          type="text"
          placeholder="Telefone do contato"
          {...register("telefone")}
        />

        <ButtonSubmit text={"Cadastrar"} />
      </form>

     
    </StyledRegisterForm>
  );
};
