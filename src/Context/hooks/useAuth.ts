import { useContext } from "react";
import { UserContext } from "../userContext";

export default function useAuth() {
  return useContext(UserContext);
}
