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

  // this function is for debugging
  // const handleClick = () => {
  //   console.log(loggedStatus);
  //   console.log(userId);
  // }

  const authContext = useAuth();


  useEffect(() => {

    let status = localStorage.getItem("isLogged");
    let id = localStorage.getItem("id");

    setLoggedStatus(status);
    setUserId(id);

    // only run this when id is not null;
    if(id) {
      getGarden(id)
      .then((res) => {
        // console.log(res["Garden"]);
        setUserGarden(res[["Garden"]]);
      });
    }


  }, [userId, loggedStatus]);

  const getGarden = async (userId) => {
    const userRef = doc(db, "users", userId);
    const usersSnap = await getDoc(userRef);

    if (usersSnap.exists()) {
      return usersSnap.data();
    }
  }

  return (
    <div className="App">
      {/* pass these props because the component with the logout function need 
        to set the savedUserObj to empty when logging out, other wise line 38
        condition will always be true */}
      <AuthProvider
        status={loggedStatus}
        setStatus={setLoggedStatus}
        id={userId}
        setId={setUserId}
        garden={userGarden}
        setGarden={setUserGarden}
        getGarden={getGarden}
      >

        <Routes>

          <Route path="/" element={loggedStatus ? <ProfilePage /> : <LandingPage />} />
          <Route
            path="profilePage"
            element={<RequireAuth> <ProfilePage /> </RequireAuth>}
          />

        </Routes>


        {/* <TempLanding /> */}

      </AuthProvider>


      {/* this button is for debuging */}
      {/* <button onClick={handleClick}>app status and id</button> */}

    </div>
  );
}

export default App;
