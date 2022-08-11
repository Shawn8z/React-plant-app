import './App.css';
import React, {useState} from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

// import Modal from "./Components/modal";
import MainNavbar from './Components/navbars/main-navbar';
import MainBody from './Components/bodys/main-body';
import LoginModal from './Components/modals/login-modal';
import RegisterModal from './Components/modals/register-modal';




function App(props) {

  // const [openModal, setOpenModal] = useState(false);
  // const [show, setShow] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);


const handleCloseLogin = () => setShowLogin(false);
const handleShowLogin = () => setShowLogin(true);

const handleCloseRegister = () => setShowRegister(false);
const handleShowRegister = () => setShowRegister(true);




  return (
    <div className="App">


      <MainNavbar 
        handleShowRegister={handleShowRegister}
        handleShowLogin={handleShowLogin}
      />

      <LoginModal
        show={showLogin}
        onHide={() => handleCloseLogin(false)}
      />
      <RegisterModal
        show={showRegister}
        onHide={() => handleCloseRegister(false)}
      />


      <MainBody />
    
      

    </div>
  );
}

export default App;
