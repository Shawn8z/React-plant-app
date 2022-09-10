
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import { useState } from "react";
import FullTable from '../tables/fullTable';
import FirebaseTable from '../tables/firebase_table';
import FilteredTable from '../tables/filteredTable';

import EditPlantModal from '../modals/editPlant-modal';

function ProfileBody(props) {

    const [showEditPlant, setShowEditPlant] = useState(false);

    const handleCloseEditPlant = () => setShowEditPlant(false);
    const handleshowEditPlant = () => {
        setShowEditPlant(true);
        // console.log("you clicked show");
    }

    return (
        <Container>
            <Row className="justify-content-md-center text-center" lg={6}>
                <Col lg={10}>
                    {/* <BasicTable /> */}

                    {/* <FullTable /> */}

                    <EditPlantModal 
                        show={showEditPlant}
                        onHide={() => handleCloseEditPlant(false)}
                    />

                    <FirebaseTable show={() => handleshowEditPlant()}/>

                    <FilteredTable list = {props.incomingList} />

                    
                </Col>
            </Row>
        </Container>

    )
}

export default ProfileBody;