import { useState } from "react";
import Navbar from "../Components/navbars/navbar";
import LoginModal from "../Components/modals/login-modal";
import RegisterModal from "../Components/modals/register-modal";

function LandingPage() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);


    return (
        <div>
            {/* nav bar */}
            <Navbar 
                handleShowRegister={handleShowRegister}
                handleShowLogin={handleShowLogin}
            />

            {/* modals */}
            <LoginModal
                show={showLogin}
                onHide={() => handleCloseLogin(false)}
            />
            <RegisterModal
                show={showRegister}
                onHide={() => handleCloseRegister(false)}
            />


        </div>
    )
}

export default LandingPage;