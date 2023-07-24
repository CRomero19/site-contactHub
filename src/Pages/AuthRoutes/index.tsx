import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../Context/hooks/useAuth";

export const AuthRoutes = () => {
  const { user } = useAuth();

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};