
import { useState, createContext, useContext, useEffect } from "react";


const AuthContext = createContext(null);

function AuthProvider( props ) {

    const [loginStatus, setLoginStatus] = useState(null);
    const [userId, setUserId] = useState(null);

    const setStatus = props.setStatus

    useEffect(() => {

        setLoginStatus(props.status);
        setUserId(props.id)

    }, [props.status, props.id]);

    const login = (user) => {
        setLoginStatus(user);
        setUserId(user.uid);
        localStorage.setItem("isLogged", "1");
        localStorage.setItem("id", user.uid);
    }

    const logout = () => {
        setLoginStatus(null);
        localStorage.removeItem("isLogged");
        localStorage.removeItem("id");
    }

    const setUserState = (id, state) => {
        setUserId(id);
        setLoginStatus(state);
    }

    // this function is for debugging
    const handleClick = () => {
        console.log(loginStatus);
        console.log(userId);
    }

    return (
        <AuthContext.Provider value={{ loginStatus, userId, login, logout, setStatus }}>
            {props.children}
            <button onClick={handleClick}>id and status in authProvider</button>
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}