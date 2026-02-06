import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children:any }) => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;