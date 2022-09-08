import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

import Button from 'react-bootstrap/Button';

import { auth } from "../../firebase-config";
import { useAuth } from '../authStuff/AuthProvider';
import SearchAndFilter from "../searchAndFilter/searchAndFilter";


function ProfileNavbar(props) {
    const [dataFromSearch, setDataFromSearch] = useState("");

    const authContext = useAuth();

    // const takeDataFromSearch = (value) => setDataFromSearch(value); 

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                authContext.logout();
                authContext.setStatus(null);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                // console.log(errorCode);
                // console.log(errorMessage);
            })

    }


    return (
        <div>
            <div className="navbar d-flex flex-md-row p-3 px-md-4 bg-white border-bottom">

                <h3 className="my-0 mr-md-auto font-weight-normal">Grow App</h3>

                <nav className="my-2 my-sm-0 mr-md-3 ">

                    <Button variant="light" onClick={props.handleshowAddPlant}>
                        Add Plant
                    </Button>
                    <span>  |  </span>
                    <Button variant="light" onClick={handleSignOut} >
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