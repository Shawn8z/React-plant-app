import { useState, createContext, useContext, useEffect } from "react";


const AuthContext = createContext(null);

function AuthProvider( props ) {

    const [loginStatus, setLoginStatus] = useState(null);
    const [userId, setUserId] = useState(null);

    const setStatus = props.setStatus

    useEffect(() => {

        let status = props.status;
        setLoginStatus(status);

    }, [])

    const login = (user) => {
        setLoginStatus(user);
        setUserId(user.uid);
        localStorage.setItem("isLogged", "1");
    }

    const logout = () => {
        setLoginStatus(null);
        localStorage.removeItem("isLogged");
    }

    return (
        <AuthContext.Provider value={{ loginStatus, userId, login, logout, setStatus }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}