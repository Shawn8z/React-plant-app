import { Table, Container, Row, Column} from "react-bootstrap";
import { Plants } from "../../plants";


function FilteredTable(props) {
    
    const allKeys = Object.keys(Plants[0]).slice(1);
    const columns = allKeys.map((item) => item[0].toUpperCase() + item.slice(1));

    const filterdList = [...props.list]

    return (
        <Container className="mt-5">
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th className="px-3" key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filterdList.map( (obj) =>
                            (
                                <tr key={obj.name}>
                                    {Object.values(obj)
                                            .filter((item, index) => index != 0)
                                                .map((item) => 
                                                    <td key={item}>{item}</td>
                                                )
                                    }
                                    
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}


export default FilteredTable;