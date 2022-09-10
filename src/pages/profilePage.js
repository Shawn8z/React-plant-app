import { useState } from "react";


import ProfileBody from "../Components/bodys/profile-body";
import ProfileNavbar from "../Components/navbars/profile-navbar";
import AddPlantModal from "../Components/modals/addPlant-modal";
import EditPlantModal from "../Components/modals/editPlant-modal";

export default function ProfilePage() {

    const [filteredList, setFilteredList] = useState("");
    const [showAddPlant, setShowAddPlant] = useState(false);
    

    const getListFromSearch = (value) => setFilteredList(value);

    const handleCloseAddPlant = () => setShowAddPlant(false);
    const handleshowAddPlant = () => setShowAddPlant(true);
    

    return (
        <div className="text-center align-middle">
                {/* navBar */}
                <ProfileNavbar 
                    handleshowAddPlant={() => handleshowAddPlant()}
                    passListToProfilePage={getListFromSearch} 
                />
                

                {/* modals */}
                <AddPlantModal 
                    show={showAddPlant}
                    onHide={() => handleCloseAddPlant(false)}
                />


                {/* body */}
                <ProfileBody incomingList={filteredList}/>
                
        </div>
    )
}