
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../login&register/login';


function LoginModal(props) {
    
    
    return (
        <Modal
            {...props}
            size="md"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="login-modal">
                    Login Here
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Login />
                
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default LoginModal;