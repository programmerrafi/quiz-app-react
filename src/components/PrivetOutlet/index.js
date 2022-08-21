import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function PrivetRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivetRoute;
