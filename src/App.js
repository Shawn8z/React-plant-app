import './App.css';
import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from "./Components/modal";




function App() {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="App">

      

      <div className="navbar d-flex flex-column flex-md-row align-items-center p-3 mb-4 px-md-4 bg-white border-bottom shadow-sm">
        <h3 className="my-0 mr-md-auto font-weight-normal">Grow App</h3>
        <nav className="my-2 my-sm-0 mr-md-3">
          <a className="p-2 " href="http://localhost:3000/">Register</a>
          <span>  |  </span>
          <a className="p-2 " href="http://localhost:3000/">login</a>
        </nav>
      </div>

      {/* <button 
        className="openModalBtn" 
          onClick={() => {setOpenModal(!openModal);}
        }
      >Open</button> */}

      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}

      <div className="info-block px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          "Here at Grow, we inform you with all the necessary knowledge you need
          to take greate care of the plants around you. Find the plant you are after, 
          and get all the key knowledge that will help you to take care of your green friend.
          Also feel free to check out what others are growing in their garden."
        </p>
      </div>
      
      <div className="container col-md-8 mt-5 text-center">
        <h2 className="display-4">Gardens</h2>

        <div className="row mt-4 mx-auto">

          <div className="col-sm-4">
            <div className="card">
              <img src={require("./img/placeholder-image.jpg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Garden Name1</h5>
                <p className="card-text">Garden Detail</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <img src={require("./img/placeholder-image.jpg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Garden Name2</h5>
                <p className="card-text">Garden Detail</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <img src={require("./img/placeholder-image.jpg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Garden Name2</h5>
                <p className="card-text">Garden Detail</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
