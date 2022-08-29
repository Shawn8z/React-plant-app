import { useState, createContext, useContext, useEffect } from "react";


const AuthContext = createContext(null);

function AuthProvider( props ) {

    const [loginStatus, setLoginStatus] = useState(null);

    const setUser = props.setUser

    useEffect(() => {

        let user = props.user;
        
        setLoginStatus(user);
    }, [])

    const login = (user) => {
        setLoginStatus(user);
        let strUser = JSON.stringify(user);
        localStorage.setItem("isLogged", strUser);
    }

    const logout = () => {
        setLoginStatus(null);
        localStorage.removeItem("isLogged");
    }

    return (
        <AuthContext.Provider value={{ loginStatus, login, logout, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}