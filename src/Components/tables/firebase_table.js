import { Table, Container, Row, Column} from "react-bootstrap";
// import { Plants } from "../../plants";
import { useAuth } from "../authStuff/AuthProvider";


function FirebaseTable() {
    
    const authContext = useAuth();
    let plants = authContext.garden;
    
    console.log(Object.keys(plants[0]));
    const allKeys = Object.keys(plants[0]).slice(1);
    
    const columns = allKeys.map((item) => item[0].toUpperCase() + item.slice(1));

    const dataObjs = [...plants];


    return (
        <Container>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th className="px-3" key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    {/* <tbody>
                        {dataObjs.map( (obj) =>
                            (
                                <tr key={obj.name}>
                                    {Object.values(obj)
                                                .map((item) => 
                                                    <td key={item}>{item}</td>
                                                )
                                    }
                                    
                                </tr>
                            )
                        )}
                    </tbody> */}
                </Table>
            </Row>
        </Container>
    )
}


export default FirebaseTable;