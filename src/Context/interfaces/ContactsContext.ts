import { ContactType, IRegisterNewContactFormData, IUpdateUserFormData } from "../types/@types";

export interface IContactContext {
  contacts?: ContactType[] | null | undefined;
  handleSubmitRegisterNewContact: (formData: IRegisterNewContactFormData ) => Promise<void>;
  handleUpdateContact:(contactId:number,formData: IUpdateUserFormData ) => Promise<void>;
  handleDeleteContact:(contactId:number)=>Promise<void>;
}