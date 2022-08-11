import Form from "react-bootstrap/Form";

function TooltipContent() {
    return (
        <div>
            {["Name", "Family", "Water", "MatureSize"].map((item) => (
                <div key={`inline-${item}`} >
                    <Form.Check inline type="checkbox" label={item} id={`inline-${item}`} />
                </div>
            ))}
        </div>
    )
}

export default TooltipContent