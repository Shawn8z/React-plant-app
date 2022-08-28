import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [error, setError] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePassWordChange = (event) => {
        setPassWord(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, passWord)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return(
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>

                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} required />

            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Password" onChange={handlePassWordChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );
}

export default Login;