import './App.css';
import { useState, useEffect } from "react";
import AuthProvider from './Components/authStuff/AuthProvider';

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, } from "react-router-dom";

import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profilePage';
import { RequireAuth } from './Components/authStuff/RequireAuth';



function App() {


  const [loggedStatus, setLoggedStatus] = useState(null);
  

  useEffect(() => {

    let status = localStorage.getItem("isLogged");
    setLoggedStatus(status);
    
  }, [])


  return (
    <div className="App">
        {/* pass these props because the component with the logout function need 
          to set the savedUserObj to empty when logging out, other wise line 77
         condition will always be true */}
        <AuthProvider status={loggedStatus} setStatus={setLoggedStatus}>

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
