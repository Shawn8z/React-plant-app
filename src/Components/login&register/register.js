import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Register</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    Create your new account
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );
}

export default Register;