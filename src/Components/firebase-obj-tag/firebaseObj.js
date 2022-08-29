import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

function FirebaseObj() {

    const [userPlants, setUserPlants] = useState([]);
    const userPlantsCollection = collection(db, "Plants");

    useEffect(() => {

        const getPlants = async () => {
            const data  = await getDocs(userPlantsCollection);
            setUserPlants(data.docs.map((doc) => ( {...doc.data(), id: doc.id} ) ));
            // console.log(data.docs.map((doc) => ( { ...doc.data(), id: doc.id}) ))
        }

        getPlants()

    }, [])


    return (
        <div>
            {userPlants.map((item) => 
                <h3 key={item.name}>{item.name}</h3>
            )}
        </div>
    )
}

export default FirebaseObj;