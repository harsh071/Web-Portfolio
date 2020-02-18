import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';


const MyNavbar = () => {
    return (
        <>  
            <Navbar className="nav" expand="md" variant="light" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className='nav-center'  id="basic-navbar-nav">
                    <Nav className="nav-color">
                        <Nav.Link href="#link"> My Projects  </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MyNavbar;