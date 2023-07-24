import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "../Pages/ContactsPage";
import { LandingLoginPage } from "../Pages/LandingPage";
import { RegisterContact } from "../Pages/RegisterContact";
import { RegisterUser } from "../Pages/RegisterUser";
import { UserInfoPage  } from "../Pages/UserInfoPage";
import { WelcomeUserPage } from "../Pages/WelcomeUserPage";
import { PublicRoutes } from "../Pages/PublicRoutes";
import { AuthRoutes } from "../Pages/AuthRoutes";
import { NotFound } from "../Pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LandingLoginPage/>} />
        <Route path="/register" element={<RegisterUser/>} />
      </Route>

      <Route path="/" element={<AuthRoutes />}>
        <Route path="welcomeuser" element={<WelcomeUserPage />}/>
        <Route path="/registercontact" element={<RegisterContact/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        <Route path="/updateuser" element={<UserInfoPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );

 
};


  