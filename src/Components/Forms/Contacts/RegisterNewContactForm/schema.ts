import * as yup from "yup";

export const schemaRegisterForm = yup
  .object({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Preencha com um e-mail válido"),
    telefone: yup.string().required("Telefone obrigatório!"),
  })
  .required();
