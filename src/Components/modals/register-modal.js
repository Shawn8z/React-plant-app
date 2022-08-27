import { logDOM } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Register from '../login&register/register';

function RegisterModal(props) {
    
    return (
        <Modal
            {...props}
            size="md"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="register-modal">
                    Register Here
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Register />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default RegisterModal;