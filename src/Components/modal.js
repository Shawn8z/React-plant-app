import React, {useState} from "react"
import "./modal.css";
import "bootstrap/dist/css/bootstrap.min.css"
function Modal({ closeModal }) {


    return (
        <div className="modalBackground bg-secondary">
            
            <div className="container">

                <div className="modalContainer  ">
                    <button onClick={() => closeModal(false)}> X </button>
                    <div className="title">
                        <h1>You sure want to continue?</h1>
                    </div>
                    <div className="body">
                        <p>This is the modal body</p>
                    </div>
                    <div className="footer">
                        <button>Submit</button>
                        <button onClick={() => closeModal(false)} >Cancel</button>
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default Modal;