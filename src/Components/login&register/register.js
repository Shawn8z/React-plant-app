import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [passWordCheck, setPassWordCheck] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassWordChange = (event) => {
        setPassWord(event.target.value);
    }
    const handlePassWordCheckChange = (event) => {
        setPassWordCheck(event.target.value);
    }

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, passWord)
            .then((userObj) => {
                const user = userObj;
                console.log(user);
                console.log(user.uid)
            })
    }

    return(
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>

                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} required />


                <Form.Text className="text-muted">
                    Create your new account
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Password" onChange={handlePassWordChange} required />


            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
                <Form.Label>Repeat Password</Form.Label>

                <Form.Control type="password" placeholder="Password" onChange={handlePassWordCheckChange} required />

            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );
}

export default Register;