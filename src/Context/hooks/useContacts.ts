import { useContext } from "react";
import { ContactsContext } from "../ContactsContext/contactsContext";

export default function useAuth() {
  return useContext(ContactsContext);
}
