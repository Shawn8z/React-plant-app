// import React, { useState, useRef } from 'react';

import Form from "react-bootstrap/Form";


import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => 
        console.log("totally custom!"),
    );

    return (
        <Button
            variant="light"
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    )
}


function ProfileNavbar() {


    

    return (
        <div>
            <div className="navbar d-flex flex-md-row p-3 px-md-4 bg-white border-bottom">

                <h3 className="my-0 mr-md-auto font-weight-normal">Grow App</h3>
                <nav className="my-2 my-sm-0 mr-md-3 ">
                    <Button variant="light" ClassName="col-md-6" >
                        Add Plant
                    </Button>
                    <span>  |  </span>
                    <Button variant="light" >
                        LogOut
                    </Button>
                </nav>
                
                
            </div>

            <div className="search-bar d-flex flex-row p-3 mb-4 px-md-4 bg-white border-bottom shadow-sm">

                    <Accordion defaultActiveKey="0" className="col-md-6 mx-auto">
                        <Form className="align-items-center">
                            <div className="search-bar d-flex flex-row mx-auto">
                                <Form.Control 
                                    type="search" 
                                    placeholder="Search..."
                                    className="me-2" 
                                />
                                
                                <ButtonGroup className="col-4">
                                    <Button variant="light" type="submit">Search</Button>
                                    <CustomToggle eventKey="1">Filter</CustomToggle>
                                </ButtonGroup>
                            </div>

                            <Accordion.Collapse eventKey="1">
                                <div className="d-flex flex-row justify-content-center mx-auto mt-3">
                                    {[  
                                        "Name", 
                                        "Family", 
                                        "Hardiness",
                                        "Water"
                                    ].map( (item) => (
                                        item === "Name" ? 
                                        <div key={`${item} checkbox`}>
                                            <Form.Check
                                                inline
                                                label={item}
                                                type="checkbox"
                                                name={item}
                                                checked
                                            />
                                        </div> 
                                        :
                                        <div key={`${item} checkbox`}>
                                            <Form.Check
                                                inline
                                                label={item}
                                                type="checkbox"
                                                name={item}
                                            />
                                        </div>
                                        ))}
                                </div>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="1">
                                <div className="d-flex flex-row justify-content-center mx-auto mt-3">
                                    {[
                                        "Mature Size", 
                                        "Soil Type", 
                                        "Sun Exposure",
                                    ].map( (item) => (
                                        <div key={`${item} checkbox`}>
                                            <Form.Check
                                                inline
                                                label={item}
                                                type="checkbox"
                                                name={item}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Accordion.Collapse>
                            
                        </Form>
                    </Accordion>

            </div>

        </div>



    )
}

export default ProfileNavbar;