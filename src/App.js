import './App.css';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"

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
        <h1>Info block component</h1>
      </div>

      <div class="garden">
        <div>
          <h1>List of users garden component</h1>
        </div>
      </div>

    </div>
  );
}

export default App;
