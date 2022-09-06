import { useState, useEffect } from 'react';
import { collection, setDoc, doc, updateDoc, getDoc, } from 'firebase/firestore';
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

    // const [name, setName] = useState('');
    // const [family, setFamily] = useState('');
    // const [hardiness, setHardiness] = useState('');
    // const [mature_size, setMature_size] = useState('');
    // const [soil_type, setSoil_type] = useState('');
    // const [sun_exporsure, setSunExporsure] = useState('');
    // const [water, setWater] = useState('');
    const [newObj, setNewObj] = useState({});
    const [userPlants, setUserPlants] = useState([]);

    const authContext = useAuth();
    const id = authContext.userId;

    let userId = authContext.userId;
    
    const testFunction = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
    }
    
    

        


    useEffect(() => {
        // const id = authContext.userId;
        // if (id) {
        //     console.log(id);
        // } else {
        //     console.log("id not ready yet");
        // }
        // testFunction()
    }, [userId])

    let addPlantObjTemplate = {
        name: "",
        family: "",
        hardiness: "",
        mature_size: "",
        soil_type: "",
        sun_exposure: "",
        water: "",
    }

    let testObj = {
        test: "this is a test obj1"
    }

    // const getUserPlants = async () => {
    //     let result = await getDoc(userDoc);
    //     return result.data();
    // }

    const handleOnChange = (event) => {
        
        const target = event.target;
        const value = target.value;
        const key = target.name;
        
        addPlantObjTemplate[key] = value;

    }

    const handleAddPlantSubmit = (event) => {
        // console.log(newObj);
        // appPlant();
        event.preventDefault();
    }

    // const getGarden = async () => {
        
    //     let result = await getDoc(userDoc);
    //     console.log(result);
    // }

    const appPlant = async () => {
        
        // await updateDoc(userDoc, {
        //     Garden: [ testObj ]
        // })


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