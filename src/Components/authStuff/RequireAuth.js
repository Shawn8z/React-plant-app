import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom"



export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const authContext = useAuth();

    
    if (!authContext.loginStatus) {
        return <Navigate to="/" state={{ path: location.pathname }} />
    }

    return (
        children
    )
}