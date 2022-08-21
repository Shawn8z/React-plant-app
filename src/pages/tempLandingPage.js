import { ReactDOM } from "react";
import { Link, Outlet } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";


function TempLanding() {


    return (
        <div className="text-center my-auto">
            <h1>Routes</h1>
            <nav >
                <Link to="/mainPage">MainPage</Link>
                <Link to="/profilePage">ProfilePage</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default TempLanding;