import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">

      <div class="navbar d-flex flex-column flex-md-row align-items-center p-3 mb-4 px-md-4 bg-white border-bottom shadow-sm">
        <h3 class="my-0 mr-md-auto font-weight-normal">Grow App</h3>
        <nav class="my-2 my-sm-0 mr-md-3">
          <a class="p-2 " href="#">Register</a>
          <span>  |  </span>
          <a class="p-2 " href="#">login</a>
        </nav>
      </div>

      <div class="info-block px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
        <h1 class="display-4">About Us</h1>
        <p class="lead">
          "Here at Grow, we inform you with all the necessary knowledge you need
          to take greate care of the plants around you. Find the plant you are after, 
          and get all the key knowledge that will help you to take care of your green friend.
          Also feel free to check out what others are growing in their garden."
        </p>
      </div>
      
      <div class="container">


        <div class="card-deck text-center">

            <div class="card m">
              <p>Card 1</p>
            </div>


            <div class="card">
              <p>Card 2</p>
            </div>


            <div class="card">
              <p>Card 3</p>
            </div>
            
        </div>
        
        

      </div>
        







  </div>
  );
}

export default App;
