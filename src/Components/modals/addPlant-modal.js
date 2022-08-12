import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AddPlantModal(props) {
    
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="register-modal">
                    AddPlant
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="family">
                                    <Form.Label>Family</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="hardiness">
                                    <Form.Label>Hardiness</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="water">
                                    <Form.Label>Water</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="size">
                                    <Form.Label>Mature Size</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="soil">
                                    <Form.Label>Soil Type</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="sun">
                                    <Form.Label>Sun Exposure</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Container>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>

    )
}

export default AddPlantModal;