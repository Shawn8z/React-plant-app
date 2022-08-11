import Button from 'react-bootstrap/Button';


function MainNavbar(props) {



    return (
        <div className="navbar d-flex flex-column flex-md-row align-items-center p-3 mb-4 px-md-4 bg-white border-bottom shadow-sm">
            <h3 className="my-0 mr-md-auto font-weight-normal">Grow App</h3>
            <nav className="my-2 my-sm-0 mr-md-3">
                <Button variant="light" onClick={props.handleShowRegister}>
                    Register
                </Button>
                <span>  |  </span>
                <Button variant="light" onClick={props.handleShowLogin}>
                    Login
                </Button>
            </nav>
        </div>
    )
}

export default MainNavbar;