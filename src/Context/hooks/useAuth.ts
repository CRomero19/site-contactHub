import { useContext } from "react";
import { UserContext } from "../UserContext/userContext";

export default function useAuth() {
  return useContext(UserContext);
}
