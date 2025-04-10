import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/inloggen" />;
  return children;
};

export default PrivateRoute;
