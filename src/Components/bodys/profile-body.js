
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import Table from 'react-bootstrap/Table';

import React, { useState } from "react";
import FullTable from '../tables/fullTable';
import FirebaseTable from '../tables/firebase_table';
import FilteredTable from '../tables/filteredTable';
import FirebaseObj from '../firebase-obj-tag/firebaseObj';

function ProfileBody(props) {

    

    return (
        <Container>
            <Row className="justify-content-md-center text-center" lg={6}>
                <Col lg={10}>
                    {/* <BasicTable /> */}

                    {/* <FullTable /> */}

                    <FirebaseTable />

                    <FilteredTable list = {props.incomingList} />

                    
                </Col>
            </Row>
        </Container>

    )
}

export default ProfileBody;