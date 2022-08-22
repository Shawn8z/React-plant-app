import { useState } from "react";
import MainNavbar from "../Components/navbars/main-navbar";
import MainBody from "../Components/bodys/main-body";
import LoginModal from "../Components/modals/login-modal";
import RegisterModal from "../Components/modals/register-modal";

export default function MainPage() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);


    return (
        <div>
            {/* nav bar */}
            <MainNavbar 
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


            {/* body */}
            <MainBody />
        </div>
    )
}