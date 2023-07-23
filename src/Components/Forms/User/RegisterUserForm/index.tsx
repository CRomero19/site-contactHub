import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormData } from "../../../../Context/types/@types";
import useAuth from "../../../../Context/hooks/useAuth";
import { ButtonSubmit } from "../../../ButtonSubmit";
import { schemaRegisterForm } from "./schema";
import { StyledRegisterForm } from "./style";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";


export const RegisterForm = () => {
  const { handleSubmitRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({ resolver: yupResolver(schemaRegisterForm) });

  const submitRegister: SubmitHandler<IRegisterFormData> = (formData) => {
    console.log(formData);
    handleSubmitRegister(formData);
  };

  const [iconPassword, setIconPassword] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState('password')
  
  const handleTogglePasswordType = () =>{
    if(passwordInputType == 'password'){
      setPasswordInputType('text')
      setIconPassword(true)
    }
    else{
      setPasswordInputType('password')
      setIconPassword(false)
    }
  }
  const [iconConfirmPassword, setIconConfirmPassword] = useState(false)

  const [confirmPasswordInputType, setConfirmPasswordInputType] = useState('password')
  const handleToggleConfirmPasswordType = () =>{
    if(confirmPasswordInputType == 'password'){
      setConfirmPasswordInputType('text')
      setIconConfirmPassword(true)
    }
    else{
      setConfirmPasswordInputType('password')
      setIconConfirmPassword(false)
    }
  }

  return (
    <StyledRegisterForm>
      <h1>  Cadastre-se  </h1>
      <form action="" onSubmit={handleSubmit(submitRegister)}>
        <label htmlFor="name">
          Nome completo <span className="yup-error"> {errors.name?.message} </span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />

        <label htmlFor="email">
          Email <span className="yup-error"> {errors.email?.message} </span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />

        <label htmlFor="name">
          Telefone <span className="yup-error"> {errors.telefone?.message} </span>
        </label>
        <input
          id="telefone"
          type="text"
          placeholder="Digite seu telefone"
          {...register("telefone")}
        />

        <label htmlFor="password">
          Senha (8 ou mais caracteres) <span className="yup-error"> {errors.password?.message} </span>
        </label>
        <div className="input-password">
          <input
            id="password"
            type={passwordInputType}
            placeholder="Digite sua senha"
            {...register("password")}
          />
            <button onClick={handleTogglePasswordType} type="button">{iconPassword ? <FiEye/> : <FiEyeOff/>}</button>
        </div>

        <label htmlFor="confirmPassword">
          Confirmar senha <span className="yup-error"> {errors.confirmPassword?.message} </span>{" "}
        </label>
        <div className="input-password">
          <input
            id="confirmPassword"
            type={confirmPasswordInputType}
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
            <button onClick={handleToggleConfirmPasswordType} type="button"> {iconConfirmPassword ? <FiEye/> : <FiEyeOff/>} </button>
        </div>
        
        <p> Já é cadastrado? <Link to="/" className="link"> Clique aqui! </Link></p>

        <ButtonSubmit text={"Cadastre-se"} />
      </form>

     
    </StyledRegisterForm>
  );
};
