import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import { db } from './firebase-config';
import { doc, getDoc, } from 'firebase/firestore';




import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profilePage';
import AuthProvider from './Components/authStuff/AuthProvider';
import { useAuth } from './Components/authStuff/AuthProvider';
import { RequireAuth } from './Components/authStuff/RequireAuth';




function App() {


  let [loggedStatus, setLoggedStatus] = useState(null);
  let [userId, setUserId] = useState(null);
  let [userGarden, setUserGarden] = useState(null);
  
  
  const handleClick = () => {
    console.log(loggedStatus);
    console.log(userId);
}

  useEffect(() => {
    // console.log("app fired");
    let status = localStorage.getItem("isLogged");
    let id = localStorage.getItem("id");
    setLoggedStatus(status);
    setUserId(id);
    if(id) {
      testFunction(id)
      .then(res => console.log(res["Garden"]));
      // console.log(garden);
    }
    // console.log(userGarden);

  }, [userId, loggedStatus]);

  const testFunction = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
  }

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
      <button onClick={handleClick}>app status and id</button>
    </div>
  );
}

export default App;
