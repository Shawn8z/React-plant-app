

import SearchAndFilter from "../searchAndFilter/searchAndFilter";
import { useState } from "react";

import Button from 'react-bootstrap/Button';


function ProfileNavbar(props) {
    const [dataFromSearch, setDataFromSearch] = useState("");

    const takeDataFromSearch = (value) => setDataFromSearch(value); 

    return (
        <div>
            <div className="navbar d-flex flex-md-row p-3 px-md-4 bg-white border-bottom">

                <h3 className="my-0 mr-md-auto font-weight-normal">Grow App</h3>
                <nav className="my-2 my-sm-0 mr-md-3 ">
                    <Button variant="light" onClick={props.handleshowAddPlant}>
                        Add Plant
                    </Button>
                    <span>  |  </span>
                    <Button variant="light" >
                        LogOut
                    </Button>
                </nav>
                
            </div>
            
            <SearchAndFilter passDataToNav={props.passListToProfilePage}/>
            <div>{dataFromSearch}</div>
            
        </div>



    )
}

export default ProfileNavbar;