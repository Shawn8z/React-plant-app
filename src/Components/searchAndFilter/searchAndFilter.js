import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import { useState,  } from "react";
import { Plants } from "../../plants";


// toggle function for UI
// >>>need research<<<
function CustomToggle({ children, eventKey }) {
    
    const decoratedOnClick = useAccordionButton(eventKey, () => 
        eventKey
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

function SearchAndFilter({ passDataToNav }) {

    const testList = <h1>This is testList from search</h1>;
    

    // put all the column names into an array
    const allKeys = Object.keys(Plants[0]).slice(1);
    const columnNames = allKeys.map((item) => item[0].toUpperCase() + item.slice(1));

    // query holds the input value of the search input box
    const [query, setQuery] = useState("");

    const [checkedState, setCheckedState] = useState(
        // create an array with the same lenth as number of columns on the individual plant object, but filled with boolean false
        allKeys.map(item => item = false)
    );
    //queryKeys is an array of column names that are put together based on the checkbox input
    const [queryKeys, setQueryKeys] = useState("empty");

    const handleQueryChange = (event) => {
        setQuery(event.target.value.toLowerCase());
    }

    const handleCheckBoxChange = (event) => {
        const target = event.target;
        const value = target.checked;
        const index = target.value;

        // change the boolean with the according index on the checkedState array,  with the updated checkbox state
        let tempStateArr = checkedState;
        tempStateArr[index] = value;
        setCheckedState(tempStateArr);

        // on checking a checkbox, recreate a new keys array and update querykeys
        let tempKeyArr = [];
        checkedState.forEach((bool, index) => {
            if (bool) {
                tempKeyArr.push(allKeys[index])
            }
        })
        setQueryKeys(tempKeyArr);

    }

    
    const rawQueryChecker = () => {
        let queryArr = [];

        if (query.includes(", ")) {
            queryArr = query.split(", ");
            return queryArr;
        } else {
            queryArr.push(query);
            return queryArr;
        }
    }

    // these search work with query as a whole string
    const search = (dataObj) => {
        return dataObj.filter((itemObj) => 
            queryKeys.some((key) => itemObj[key].toLowerCase().includes(query)
        ))
    }
    const searchAll = (dataObj) => {
        return dataObj.filter((itemObj) => (
            allKeys.some((key) => itemObj[key].toLowerCase().includes(query)
            )
        ))
    }

    // these search support query seperated with ", "
    const searchWithArrQuery = (dataObj, queryList) => {
        return dataObj.filter((item) => 
            queryKeys.some((key) => 
                queryList.some((queryItem) => item[key].toLowerCase().includes(queryItem))
            )
        )
    }
    const searchAllWithArrQuery = (dataObj, queryList) => {
        return dataObj.filter((itemObj) => (
            allKeys.some((key) => 
                queryList.some((quertItem) => itemObj[key].toLowerCase().includes(quertItem))
            )
        ))
    }

    const passDataOut = passDataToNav.bind(this);

     // >>>> note to self, your search only work on string values <<<<
    const handleSubmit = (event) => {
        let val = rawQueryChecker();
        let isFiltered = checkedState.some((item) => item === true);


        if (isFiltered) {
            passDataOut(searchWithArrQuery(Plants, val));
        } else {
            passDataOut(searchAllWithArrQuery(Plants, val));
        }

        event.preventDefault();
    }


    const clearSearchResult = () => { 
        passDataOut('');
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
                                <Button variant="light" type="button" onClick={clearSearchResult}>Clear</Button>
                            </ButtonGroup>
                        </div>

                        <Accordion.Collapse eventKey="1">
                            <div className="d-flex flex-row justify-content-center mx-auto mt-3">
                                {columnNames.slice(0, 4).map((item, index) => (
                                    <div key={`${item} checkbox`}>
                                        <Form.Check
                                            inline
                                            label={item}
                                            type="checkbox"
                                            name={item}
                                            value = {index}
                                            onChange = {handleCheckBoxChange}
                                        />
                                    </div>
                                    ))}
                            </div>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <div className="d-flex flex-row justify-content-center mx-auto mt-3">
                                {columnNames.slice(4).map( (item, index) => (
                                    <div key={`${item} checkbox`}>
                                        <Form.Check
                                            inline
                                            label={item}
                                            type="checkbox"
                                            name={item}
                                            value = {index + 4}
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