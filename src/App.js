import './App.css';
import { useState, useEffect } from "react";
import AuthProvider from './Components/authStuff/AuthProvider';

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, } from "react-router-dom";

import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profilePage';
import { RequireAuth } from './Components/authStuff/RequireAuth';



function App() {


  let [loggedStatus, setLoggedStatus] = useState("null");
  let [userId, setUserId] = useState(null);
  

  useEffect(() => {

    console.log("app rendered");
    let status = localStorage.getItem("isLogged");
    let id = localStorage.getItem("id");
    setLoggedStatus(status);
    setUserId(id);
    console.log(loggedStatus);
    console.log(userId);
    
  }, [])


  return (
    <div className="App">
        {/* pass these props because the component with the logout function need 
          to set the savedUserObj to empty when logging out, other wise line 38
         condition will always be true */}
        <AuthProvider status={loggedStatus} setStatus={setLoggedStatus} id={userId} >

          <Routes>
            
            <Route path="/" element={ loggedStatus ? <ProfilePage /> : <LandingPage />} />
            <Route 
              path="profilePage" 
              element={<RequireAuth> <ProfilePage /> </RequireAuth>}
            />
            
          </Routes>
          

          {/* <TempLanding /> */}
        
        </AuthProvider>

    </div>
  );
}

export default App;
