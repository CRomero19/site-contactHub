import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Context/hooks/useAuth";

export const PublicRoutes = () => {
  const { user } = useAuth()

  return <>{user ? <Navigate to="/welcomeuser" /> : <Outlet/>}</>;
};