import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "../Pages/ContactsPage";
import { LandingLoginPage } from "../Pages/LandingPage";
import { RegisterContact } from "../Pages/RegisterContact";
import { RegisterUser } from "../Pages/RegisterUser";
import { UpdateUserPage } from "../Pages/UpdateUserPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLoginPage/>} />
      <Route path="/register" element={<RegisterUser/>} />
      <Route path="/registercontact" element={<RegisterContact/>} />
      <Route path="/updateContact" element={<UpdateUserPage/>} />
      <Route path="/contacts" element={<ContactsPage/>} />
      <Route path="/updateuser" element={<UpdateUserPage/>} />
    </Routes>
  );
};
