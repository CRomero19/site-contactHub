export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number | null | undefined;
  email: string;
  name: string;
  dateBirth?: string;
  isPremium: boolean;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  name: string;
  password: string;
  email: string;
  dateBirth: string;
  confirmPassword: string;
}

export interface IUpdateUserFormData {
  name: string;
  email: string;
  password: string;
}
