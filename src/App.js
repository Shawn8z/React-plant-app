import './App.css';
import { useState } from "react";
import AuthProvider from './Components/authStuff/AuthProvider';

import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, } from "react-router-dom";


import MainNavbar from './Components/navbars/main-navbar';
import ProfileNavbar from './Components/navbars/profile-navbar';

import MainBody from './Components/bodys/main-body';
import ProfileBody from './Components/bodys/profile-body';
import FilteredTable from './Components/tables/filteredTable';


import LoginModal from './Components/modals/login-modal';
import RegisterModal from './Components/modals/register-modal';
import AddPlantModal from './Components/modals/addPlant-modal';
import TempLanding from './pages/tempLandingPage';
import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profilePage';



function App(props) {


const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);
const [showAddPlant, setShowAddPlant] = useState(false);
const [filteredList, setFilteredList] = useState("");


const handleCloseLogin = () => setShowLogin(false);
const handleShowLogin = () => setShowLogin(true);

const handleCloseRegister = () => setShowRegister(false);
const handleShowRegister = () => setShowRegister(true);

const handleCloseAddPlant = () => setShowAddPlant(false);
const handleshowAddPlant = () => setShowAddPlant(true);

const getListFromSearch = (value) => setFilteredList(value);


  return (
    <div className="App">
        <AuthProvider>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="profilePage" element={<ProfilePage />} />
          </Routes>
          

          {/* <TempLanding /> */}
        
        </AuthProvider>



      {/* =====navbars===== */}
      

      {/* <MainNavbar 
        handleShowRegister={handleShowRegister}
        handleShowLogin={handleShowLogin}
      /> */}

      {/* <ProfileNavbar
        handleshowAddPlant={() => handleshowAddPlant()}
        passListToApp={getListFromSearch}
      /> */}


      {/* =====modals===== */}
      {/* <LoginModal
        show={showLogin}
        onHide={() => handleCloseLogin(false)}
      />
      <RegisterModal
        show={showRegister}
        onHide={() => handleCloseRegister(false)}
      />
      <AddPlantModal 
        show={showAddPlant}
        onHide={() => handleCloseAddPlant(false)}
      /> */}


      {/* =====bodys===== */}
      {/* <MainBody /> */}
      {/* <ProfileBody incomingList={filteredList}/> */}

    </div>
  );
}

export default App;
