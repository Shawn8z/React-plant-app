import { Table } from "react-bootstrap";

function MyTable() {
    const columns = ["Name", "Family", "Hardiness", "Water", "Mature Size", "Soil Type", "Sun Exposure"];

    const items = [
        ["plant1", "abcs", "9-10", "till the soil drys", "6-9inchs tall", "well-drain", "full sun"],
        ["plant2", "bba4", "2-4", "1 inch per week", "1-3inchs tall", "sandy", "indrect sun"],
        ["plant3", "dddc", "3-6", "mist 3 times per week", "7inchs tall", "grainy", "indoors"],
        ["plant4", "zzza", "4-6", "twice a week", "1-3inchs tall", "hard soil", "indirect sun"],
    ]
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th className="px-3">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr>
                        {item.map((val) => (
                            <td>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default MyTable;