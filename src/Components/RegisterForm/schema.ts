import * as yup from "yup";

export const schemaRegisterForm = yup
  .object({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Preencha com um e-mail válido"),
    telefone: yup.string().required("Telefone obrigatório!"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter pelo menos 1 número!")
      .matches(/[a-z]/, "Deve conter pelo menos 1 letra minuscula!")
      .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula!")
      .matches(/(\W|_)/, "Deve conter pelo menos 1 carácter especial!")
      .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres!")
      .required("Digite a senha!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Falha na confirmação da senha!")
      .required("Confirme a senha!"),
  })
  .required();
