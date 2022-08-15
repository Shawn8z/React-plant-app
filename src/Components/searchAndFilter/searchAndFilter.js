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


function SearchAndFilter() {

    return (
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
                                    // default search filter is name, its checked by default
                                    item === "Name" ? 
                                    <div key={`${item} checkbox`}>
                                        <Form.Check
                                            inline
                                            label={item}
                                            type="checkbox"
                                            name={item}
                                            checked
                                            value = {item.toLowerCase()}
                                        />
                                    </div> 
                                    :
                                    <div key={`${item} checkbox`}>
                                        <Form.Check
                                            inline
                                            label={item}
                                            type="checkbox"
                                            name={item}
                                            value = {item.toLowerCase()}
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
                                            value = {item.toLowerCase()}
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