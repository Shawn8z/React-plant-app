import { useState } from 'react';
import { collection, addDoc, setDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useAuth } from '../authStuff/AuthProvider';


import Form from 'react-bootstrap/Form';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function AddPlantModal(props) {

    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [hardiness, setHardiness] = useState('');
    const [mature_size, setMature_size] = useState('');
    const [soil_type, setSoil_type] = useState('');
    const [sun_exporsure, setSunExporsure] = useState('');
    const [water, setWater] = useState('');

    const userPlantsCollection = collection(db, "Plants");
    const authContext = useAuth();

    let addPlantObjTemplate = {
        name: "",
        family: "",
        hardiness: "",
        mature_size: "",
        soil_type: "",
        sun_exposure: "",
        water: "",
    }


    const handleOnChange = (event) => {
        
        const target = event.target;
        const value = target.value;
        const key = target.name;
        
        addPlantObjTemplate[key] = value;

    }

    const handleAddPlantSubmit = (event) => {
        console.log(addPlantObjTemplate);
        appPlant();
        event.preventDefault();
    }


    const appPlant = async () => {
        
        let userDoc = doc(db, "users", authContext.userId);
        await updateDoc(userDoc, {
            
        })
        // console.log(userDoc.doc("Garden"));
      

        // console.log(docSnap.data());

    }


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
                
                <Form onSubmit={handleAddPlantSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="family">
                                    <Form.Label>Family</Form.Label>
                                    <Form.Control type="text" name="family" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="hardiness">
                                    <Form.Label>Hardiness</Form.Label>
                                    <Form.Control type="text" name="hardiness" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="water">
                                    <Form.Label>Water</Form.Label>
                                    <Form.Control type="text" name="water" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="size">
                                    <Form.Label>Mature Size</Form.Label>
                                    <Form.Control type="text" name="mature_size" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="soil">
                                    <Form.Label>Soil Type</Form.Label>
                                    <Form.Control type="text" name="soil_type" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="sun">
                                    <Form.Label>Sun Exposure</Form.Label>
                                    <Form.Control type="text" name="sun_exposure" onChange={handleOnChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control type="file" name="image" onChange={handleOnChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <ButtonGroup >
                                    <Button type="submit" variant="light">Add Plant</Button>
                                    <Button type="reset" variant="light" md="auto">Clear</Button>
                                </ButtonGroup>
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