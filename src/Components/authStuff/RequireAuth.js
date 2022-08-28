import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom"

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = useAuth();
}