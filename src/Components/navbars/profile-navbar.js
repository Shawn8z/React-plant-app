import React, { useState, useRef } from 'react';

import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import TooltipContent from '../tooltipContent';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const popover = (
    <Popover id = "popover-basic">
        <Popover.Header as="h3">Popover bottom</Popover.Header>
        <Popover.Body>
        
           <div className="d-flex ">

                {["Name", "Family", "Water", "MatureSize"].map((item) => (
                <div key={`inline-${item}`} >
                    <Form.Check inline type="checkbox" label={item} id={`inline-${item}`} />
                </div>
            ))}
           </div>

        </Popover.Body>
    </Popover>
);

function ProfileNavbar() {
    const [showOption, setShowOption] = useState(false);
    const target = useRef(null);

    return (
        <div>
            <div className="navbar d-flex flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom">

                <h3 className="my-0 mr-md-auto font-weight-normal">Grow App</h3>
                <nav className="my-2 my-sm-0 mr-md-3">
                    <Button variant="light" >
                        XXX
                    </Button>
                    <span>  |  </span>
                    <Button variant="light" >
                        XXX
                    </Button>
                </nav>
                
                
            </div>
            <div className="search-bar d-flex justify-content-center p-3 mb-4 px-md-4 bg-white border-bottom shadow-sm">
                
                    <Form className="d-flex">
                        <Form.Control 
                            type="search" 
                            placeholder="Search..."
                            className="me-2" 
                        />
                        <ButtonGroup>
                            <Button variant="light" type="submit">Search</Button>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <Button variant="light" 
                                        type="button" 
                                        ref={target} 
                                        onClick={()=>{setShowOption(!showOption)}}
                                >
                                        Filter
                                </Button>
                            </OverlayTrigger>
                        </ButtonGroup>

                    </Form>
                </div>
            </div>

    )
}

export default ProfileNavbar;