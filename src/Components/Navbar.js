import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import Social from "./Social";


const MyNavbar = () => {
    return (
        <>
            <Navbar className="nav" expand="md" variant="light" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="   /HLogo.png"
                        width="35"
                        height="30"
                        className=""
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className='nav-center'  id="basic-navbar-nav">
                    <Nav className="nav-color">
                        <Nav.Link className={'about'} href="#link"> About  </Nav.Link>
                        <Nav.Link href="#projects"> Projects  </Nav.Link>
                        <Nav.Link href="#work"> Work  </Nav.Link>
                        <Nav.Link  href="#contact"> Contact  </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};

export default MyNavbar;