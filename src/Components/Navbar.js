import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Navbar.css';


const MyNavbar = () => {
    return (
        <>
            <Navbar className="try" expand="md" variant="light" sticky="top">
                <Navbar.Brand className="col" href="#home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="left" id="basic-navbar-nav">
                    <Nav className="nav-color">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">My Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MyNavbar;