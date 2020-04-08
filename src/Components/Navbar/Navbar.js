import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import {Link} from 'react-router-dom'

const MyNavbar = () => {
    return (
        <>
            <Navbar className="nav" expand="md" variant="light" >
                <Navbar.Brand href="#home">
                    <Link className={'about'} to={'/'}> <img
                        alt=""
                        src="/HLogo.png"
                        width="35"
                        height="30"
                        className=""
                    />  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className='nav-center'  id="basic-navbar-nav">
                    <Nav className="nav-color nav-links">
                        <Link className={'about'} to={'Work'}> About  </Link>
                        <Link className={'about'} to={'Work'}> Project  </Link>
                        <Link className={'about'} to={'Work'}> Work </Link>
                        <Link className={'about'} to={'Work'}> Contact  </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};

export default MyNavbar;