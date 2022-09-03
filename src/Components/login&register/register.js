import { useState } from 'react';
import { db, auth } from "../../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, } from 'firebase/firestore';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [passWordCheck, setPassWordCheck] = useState("");


    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePassWordChange = (event) => {
        setPassWord(event.target.value);
    }
    const handlePassWordCheckChange = (event) => {
        setPassWordCheck(event.target.value);
    }

        
    let userObjTemplate = {
        Garden: [],
        userName: userName,
    }
    
    const addUserObj = async (userId) => {
        let usersRef = doc(db, "users", userId);
        await setDoc(usersRef, userObjTemplate);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, passWord)
            .then((userCredential) => {
                let userId = userCredential.user.uid;
                addUserObj(userId);
            })      
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

        
    }

    return(
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>userName</Form.Label>

                <Form.Control type="text" placeholder="Enter user name..." onChange={handleUserNameChange} required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>

                <Form.Control type="email" placeholder="Enter email..." onChange={handleEmailChange} required />


                <Form.Text className="text-muted">
                    Create your new account
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Enter password..." onChange={handlePassWordChange} required />


            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
                <Form.Label>Repeat Password</Form.Label>

                <Form.Control type="password" placeholder="Repeat password..." onChange={handlePassWordCheckChange} required />

            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );
}

export default Register;