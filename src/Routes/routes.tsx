import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "../Pages/ContactsPage";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/Login";
import { RegisterContact } from "../Pages/RegisterContact";
import { RegisterUser } from "../Pages/RegisterUser";
import { UpdateUserPage } from "../Pages/UpdateUserPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/register" element={<RegisterUser/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/registercontact" element={<RegisterContact/>} />
      <Route path="/updateContact" element={<UpdateUserPage/>} />
      <Route path="/contacts" element={<ContactsPage/>} />
      <Route path="/updateuser" element={<UpdateUserPage/>} />
    </Routes>
  );
};
