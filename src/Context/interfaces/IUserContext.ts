import { ILoginFormData, IRegisterFormData, IUser } from "../types/@types";

export interface IUserContext {
  user?: IUser | null | undefined;
  userId?: number;
  handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
  handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
  handleLogout: () => void;
}