export interface IChildrenProps {
  children: React.ReactNode;
}
export interface IUserResponse{
  token:string;
  userId:number;
}

export interface IUser {
  id: number | null | undefined;
  email: string;
  name: string;
  telefone:string;
  admin:boolean;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  name: string;
  password: string;
  email: string;
  telefone: string;
  confirmPassword: string;
}

export interface IUpdateUserFormData {
  name: string;
  email: string;
  password: string;
}

/* contact */

export interface IRegisterNewContactFormData {
  name: string;
  email: string;
  telefone: string;
}
