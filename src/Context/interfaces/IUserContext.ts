import { ILoginFormData, IRegisterFormData, IRegisterNewContactFormData, IUpdateUserFormData, IUser } from "../types/@types";

export interface IUserContext {
  user?: IUser | null | undefined;
  userId?: number;
  handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
  handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
  handleLogout: () => void;
  handleSubmitRegisterNewContact: (formData: IRegisterNewContactFormData ) => Promise<void>;
  handleUpdateUser:(formData: IUpdateUserFormData ) => Promise<void>;
  handleDeleteAccount:()=>Promise<void>;
}