import { useContext } from "react";
import { ContactsContext } from "../ContactsContext/contactsContext";

export default function useContact() {
  return useContext(ContactsContext);
}
