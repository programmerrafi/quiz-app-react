import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function PublicRoute() {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute;
