import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useAuth } from "../authStuff/AuthProvider";

function FirebaseObj() {

    const authContext = useAuth();
    let garden = authContext.garden;
    // console.log(garden);

    useEffect(() => {

    }, [])


    return (
        <div>
            {/* <h1>{authContext.userId}</h1> */}
            {/* {userPlants.map((item) => 
                <h3 key={item.name}>{item.name}</h3>
            )} */}
        </div>
    )
}

export default FirebaseObj;