import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../Context/hooks/useAuth";

export const AuthRoutes = () => {
  const { userId } = useAuth();

  return <>{userId ? <Outlet /> : <Navigate to="/" />}</>;
};