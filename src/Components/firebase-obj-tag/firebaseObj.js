import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useAuth } from "../authStuff/AuthProvider";

function FirebaseObj() {

    const [userPlants, setUserPlants] = useState([]);
    const userPlantsCollection = collection(db, "Plants");
    const authContext = useAuth();

    useEffect(() => {

        const getPlants = async () => {
            const data  = await getDocs(userPlantsCollection);
            // setUserPlants(data.docs.map((doc) => ( {...doc.data(), id: doc.id} ) ));
            // console.log(data.docs.map((doc) => ( { ...doc.data(), id: doc.id}) ))
        }

        // getPlants()

    }, [])


    return (
        <div>
            <h1>{authContext.userId}</h1>
            {/* {userPlants.map((item) => 
                <h3 key={item.name}>{item.name}</h3>
            )} */}
        </div>
    )
}

export default FirebaseObj;