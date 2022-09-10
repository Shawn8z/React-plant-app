
import { Table, Container, Row } from "react-bootstrap";
import { ImCross, ImPencil } from "react-icons/im";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../../firebase-config";



import "./firebase_table.css"
import { useAuth } from "../authStuff/AuthProvider";
import { useEffect, useState } from "react";


function FirebaseTable( props ) {

    const authContext = useAuth();
    let plantsArr = authContext.garden;
    // console.log(plantsArr);
    let [plants, setPlants] = useState(plantsArr)
    // console.log(plants);


    useEffect(() => {

        plantsArr = authContext.garden;
        setPlants(plantsArr);

    }, [plantsArr]);

    const handleDeleteOnClick = (event) => {
        
        // console.log(event.target.parentElement.id)
        let elementIndex = event.target.parentElement.id;
        let filtedArr = plants.filter((item, index) => index != elementIndex);
        // console.log(filtedArr);

        authContext.setGarden(filtedArr);
        removePlant(filtedArr);

    }

    const removePlant = async (arr) => {
        let id = authContext.userId;
        const userRef = doc(db, "users", id);
        await updateDoc(userRef, { Garden: arr })
            .then((res) => {
                authContext.getPlants(id)
                .then((data) => {
                    
                    setPlants(data["Garden"]);
                })
            });
        
    }




    // prepare column names
    const columns = ["Name", "Family", "Hardiness", "Water", "Mature_size", "Soil_type", "Sun_exposure"];
    
    //prepare keys for calling plant attribute
    const keys = columns.map((item) => item.toLowerCase());
    let columnNames = columns.map((column) => <th className="px-3" key={column}>{column}</th>);
    
    let plantRows = null;
    if (plants) {
        plantRows = plants.map((plant, index) => 
            <tr key={index} >
                {keys.map((key) => <td key={plant[key]}>{plant[key]}</td>)}
                <td >
                    <div className="pointer">
                        <ImPencil onClick={props.show} />
                    </div>
                </td>
                <td>
                    <div className="pointer" id={index}>
                        <ImCross onClick={handleDeleteOnClick} id={index}/>
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