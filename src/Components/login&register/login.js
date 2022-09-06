import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useAuth } from '../authStuff/AuthProvider';


function Login() {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const authContext = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loginError, setLoginError] = useState("");


    
    

    const redirectPath = location.state ?.path || "profilePage";

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePassWordChange = (event) => {
        setPassWord(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        // console.log(redirectPath);

        signInWithEmailAndPassword(auth, email, passWord)
            .then((userCredential) => {

                const user = userCredential.user;
                authContext.login(user);
                navigate(redirectPath, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginError(errorCode);
        
                
            })
        
    }

    return(
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>

                <Form.Control type="email" placeholder="Enter email..." onChange={handleEmailChange} required />

                {loginError === 'auth/user-not-found' && <Form.Text>Wrong Email</Form.Text> }
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Enter password..." onChange={handlePassWordChange} required />

                {loginError === "auth/wrong-password"  && <Form.Text>Wrong Password</Form.Text> }
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );
}

export default Login;