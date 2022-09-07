
import { useState, createContext, useContext, useEffect } from "react";
import { db } from "../../firebase-config";
import { doc, getDoc } from 'firebase/firestore';


const AuthContext = createContext(null);

function AuthProvider( props ) {

    const [loginStatus, setLoginStatus] = useState(null);
    const [userId, setUserId] = useState(null);
    const [garden, setGarden] = useState(null);

    const setStatus = props.setStatus;

    useEffect(() => {

        setLoginStatus(props.status);
        setUserId(props.id);
        setGarden(props.garden);

    }, [props.status, props.id, props.garden]);

    const login = (user) => {
        //set local state with user and user id
        setLoginStatus(user);
        setUserId(user.uid);

        // set Status and Id from App
        props.setStatus(user);
        props.setId(user.uid);

        localStorage.setItem("isLogged", "1");
        localStorage.setItem("id", user.uid);

    }

    const logout = () => {
        setLoginStatus(null);
        localStorage.removeItem("isLogged");
        localStorage.removeItem("id");
        localStorage.removeItem("Garden");
    }


    // this function is for debugging
    // const handleClick = () => {
    //     console.log(loginStatus);
    //     console.log(userId);
    // }

    return (
        <AuthContext.Provider value={{ loginStatus, userId, login, logout, setStatus, garden }}>
            {props.children}
            {/* this button is for debuging */}
            {/* <button onClick={handleClick}>id and status in authProvider</button> */}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}