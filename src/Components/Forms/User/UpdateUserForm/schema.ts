import * as yup from "yup";

export const schemaUpdateForm = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  telefone: yup.string(),
});
