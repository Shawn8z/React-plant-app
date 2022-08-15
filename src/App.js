import './App.css';
import React, {useState} from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


import MainNavbar from './Components/navbars/main-navbar';
import ProfileNavbar from './Components/navbars/profile-navbar';

import MainBody from './Components/bodys/main-body';
import ProfileBody from './Components/bodys/profile-body';

import LoginModal from './Components/modals/login-modal';
import RegisterModal from './Components/modals/register-modal';
import AddPlantModal from './Components/modals/addPlant-modal';




function App(props) {


const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);
const [showAddPlant, setShowAddPlant] = useState(false);


const handleCloseLogin = () => setShowLogin(false);
const handleShowLogin = () => setShowLogin(true);

const handleCloseRegister = () => setShowRegister(false);
const handleShowRegister = () => setShowRegister(true);

const handleCloseAddPlant = () => setShowAddPlant(false);
const handleshowAddPlant = () => setShowAddPlant(true);



  return (
    <div className="App">

      {/* =====navbars===== */}
      {/* <MainNavbar 
        handleShowRegister={handleShowRegister}
        handleShowLogin={handleShowLogin}
      /> */}
      <ProfileNavbar
        handleshowAddPlant={handleshowAddPlant}
      />


      {/* =====modals===== */}
      <LoginModal
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
      />



      {/* =====bodys===== */}
      {/* <MainBody /> */}
      <ProfileBody />
    
      

    </div>
  );
}

export default App;
