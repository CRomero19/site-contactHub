import { createContext, useState } from "react";
import { IHeaderContext } from "../interfaces/HeaderContext";
import { IChildrenProps } from "../types/@types";

export const HeaderContext = createContext({} as IHeaderContext);

export default function HeaderProvider({ children }: IChildrenProps) {
  const [navBarVisibility, setNavBarVisibility] = useState("hidden");

  const menuVisibility = () => {
    navBarVisibility == "hidden"
      ? setNavBarVisibility("visible")
      : setNavBarVisibility("hidden");
  };

  return (
    <HeaderContext.Provider value={{ menuVisibility, navBarVisibility }}>
      {children}
    </HeaderContext.Provider>
  );
}
