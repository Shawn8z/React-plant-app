
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';


import Table from 'react-bootstrap/Table';

import React, { useState } from "react";
// import { BasicTable } from '../tables/BasicTable';
import FullTable from '../tables/fullTable';
import FilteredTable from '../tables/filteredTable';

function ProfileBody() {

    

    return (
        <container>
            <Row className="justify-content-md-center text-center" lg={6}>
                <Col lg={10}>
                    {/* <BasicTable /> */}
                    {/* <Table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table> */}

                    {/* <FullTable /> */}

                    <FilteredTable />
                </Col>
            </Row>
        </container>

    )
}

export default ProfileBody;