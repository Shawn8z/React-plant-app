import { logDOM } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../login&register/login';
import Register from '../login&register/register';

function RegisterModal(props) {
    
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="register-modal">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Register Modal</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
                {/* <Login /> */}
                <Register />
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>

    )
}

export default RegisterModal;