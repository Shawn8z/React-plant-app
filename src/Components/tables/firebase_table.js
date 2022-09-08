
import { Table, Container, Row } from "react-bootstrap";
import { ImCross, ImPencil } from "react-icons/im";

import "./firebase_table.css"
import { useAuth } from "../authStuff/AuthProvider";


function FirebaseTable() {



    const authContext = useAuth();
    let plants = authContext.garden;

    const handleEditOnClick = (event) => {
        console.log("you clicked edit");
    }

    const handleDeleteOnClick = (event) => {
        console.log("you clicked delete plant");
    }

    // prepare column names
    const columns = ["Name", "Family", "Hardiness", "Water", "Mature_size", "Soil_type", "Sun_exposure"];
    
    //prepare keys for calling plant attribute
    const keys = columns.map((item) => item.toLowerCase());
    let columnNames = columns.map((column) => <th className="px-3" key={column}>{column}</th>);
    
    let plantRows = null;
    if (plants) {
        plantRows = plants.map((plant) => 
            <tr key={plant.name}>
                {keys.map((key) => <td key={plant[key]}>{plant[key]}</td>)}
                <td >
                    <div className="pointer">
                        <ImPencil onClick={handleEditOnClick}/>
                    </div>
                </td>
                <td>
                    <div className="pointer">
                        <ImCross onClick={handleDeleteOnClick}/>
                    </div>
                </td>
            </tr>
        );
    }

    return (
        <>
        <Container>
            <Row>
                <Table striped bordered hover>
                
                    <thead>
                        <tr key="columnName">
                            {columnNames}
                            <th  colSpan={2}>Edit</th>
                        </tr>
                        
                    </thead>
                    <tbody>{plantRows}</tbody>

                </Table>
            </Row>
        </Container>
        </>
    )
}


export default FirebaseTable;