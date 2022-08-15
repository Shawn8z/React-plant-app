import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import { useState,  } from "react";
import { Plants } from "../../plants";

// toggle function for UI
function CustomToggle({ children, eventKey }) {
    
    const decoratedOnClick = useAccordionButton(eventKey, () => 
        console.log()
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


function SearchAndFilter() {

    const allKeys = Object.keys(Plants[0]);

    const [query, setQuery] = useState("");
    const [checkedState, setCheckedState] = useState(
        allKeys.map(item => item = false)
    );
    const [queryKeys, setQueryKeys] = useState([]);


    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    }

    const handleCheckBoxChange = (event) => {
        const target = event.target;
        const value = target.checked;
        const index = target.value;

        let tempStateArr = checkedState;
        tempStateArr[index] =value;
        setCheckedState(tempStateArr);

        let tempKeyArr = [];
        checkedState.forEach((bool, index) => {
            if (bool) {
                tempKeyArr.push(allKeys[index])
            }
        })
        setQueryKeys(tempKeyArr);
        // console.log(tempKeyArr);
    }

    const handleSubmit = (event) => {
        alert("a query string was submitted: " + query);
        console.log(queryKeys);
        event.preventDefault();
    }



    return (
        <div className="search-bar d-flex flex-row p-3 mb-4 px-md-4 bg-white border-bottom shadow-sm">

                <Accordion defaultActiveKey="0" className="col-md-6 mx-auto">
                    <Form className="align-items-center" onSubmit={handleSubmit}>
                        <div className="search-bar d-flex flex-row mx-auto">
                            <Form.Control 
                                type="search" 
                                placeholder="Search..."
                                className="me-2"
                                onChange={handleQueryChange}
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
                                ].map( (item, index) => (
                                    <div key={`${item} checkbox`}>
                                        <Form.Check
                                            key={index + 1}
                                            inline
                                            label={item}
                                            type="checkbox"
                                            name={item}
                                            value = {index + 1}
                                            onChange = {handleCheckBoxChange}
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
                                ].map( (item, index) => (
                                    <div key={`${item} checkbox`}>
                                        <Form.Check
                                            // key={index + 5}
                                            inline
                                            label={item}
                                            type="checkbox"
                                            name={item}
                                            value = {index + 5}
                                            onChange = {handleCheckBoxChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Accordion.Collapse>
                        
                    </Form>
                </Accordion>

        </div>
    )
}


export default SearchAndFilter;