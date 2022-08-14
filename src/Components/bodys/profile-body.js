
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';


import Table from 'react-bootstrap/Table';

import React, { useMemo } from "react";
import { BasicTable } from './BasicTable';


function ProfileBody() {

    return (
        <container>
            <Row className="justify-content-md-center text-center" lg={6}>
                <Col lg={10}>
                    <BasicTable />
                </Col>
            </Row>
        </container>

    )
}

export default ProfileBody;