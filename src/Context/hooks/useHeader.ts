import { useContext } from "react";
import { HeaderContext } from "../HeaderContext/HeaderContext";

export default function useHeader() {
  return useContext(HeaderContext);
}
