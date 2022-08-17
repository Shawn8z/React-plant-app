import { Table, Container, Row, Column} from "react-bootstrap";
import { Plants } from "../../plants";


function MyTable() {
    
    const columns = ["Name", "Family", "Hardiness", "Water", "Mature Size", "Soil Type", "Sun Exposure"];

   
    const dataObjs = [...Plants];


    return (
        <Container>
            <Row>
                <table>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th className="px-3">{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dataObjs.map( (obj) =>
                            (
                                <tr>
                                    {Object.values(obj)
                                            .filter((item, index) => index != 0)
                                                .map((item) => 
                                                    <td>{item}</td>
                                                )
                                    }
                                    
                                </tr>
                            )
                            
                            )
                        }
                    </tbody>
                </table>
            </Row>
        </Container>
    )
}


export default MyTable;