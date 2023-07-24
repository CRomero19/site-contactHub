import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "../Pages/ContactsPage";
import { LandingLoginPage } from "../Pages/LandingPage";
import { RegisterContact } from "../Pages/RegisterContact";
import { RegisterUser } from "../Pages/RegisterUser";
import { UserInfoPage  } from "../Pages/UserInfoPage";
import { WelcomeUserPage } from "../Pages/WelcomeUserPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLoginPage/>} />
      <Route path="/register" element={<RegisterUser/>} />
      <Route path="/welcomeuser" element={<WelcomeUserPage />} />
      <Route path="/registercontact" element={<RegisterContact/>} />
      <Route path="/contacts" element={<ContactsPage/>} />
      <Route path="/updateuser" element={<UserInfoPage />} />
    </Routes>
  );
};
