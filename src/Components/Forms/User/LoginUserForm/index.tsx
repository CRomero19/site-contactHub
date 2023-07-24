import { StyledLoginForm } from "./style";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { schemaLoginForm } from "./schema";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { UserContext } from "../../../../Context/UserContext/userContext";
import { ButtonSubmit } from "../../../ButtonSubmit";
import { ILoginFormData } from "../../../../Context/types/@types";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { handleSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: yupResolver(schemaLoginForm) });

  const submitLogin: SubmitHandler<ILoginFormData> = (formData) => {
    handleSubmitLogin(formData);
  };

  const [iconPassword, setIconPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  const handleTogglePasswordType = () => {
    if (passwordInputType == "password") {
      setPasswordInputType("text");
      setIconPassword(true);
    } else {
      setPasswordInputType("password");
      setIconPassword(false);
    }
  };

  return (
    <StyledLoginForm>
      <h1>  Entre e divirta-se!  </h1>
      <form action="" onSubmit={handleSubmit(submitLogin)}>
        <label htmlFor="email">
          Email <span className="yup-error"> {errors.email?.message} </span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />

        <label htmlFor="password">
          Senha <span className="yup-error"> {errors.password?.message} </span>
        </label>
        <div className="input-password">
          <input
            id="password"
            type={passwordInputType}
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button onClick={handleTogglePasswordType} type="button">
            {iconPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        <p> Ainda não é cadastrado? <Link to="/register" className="link"> Clique aqui!</Link></p>
        <ButtonSubmit text={"Entre"} />
      </form>
    </StyledLoginForm>
  );
};
