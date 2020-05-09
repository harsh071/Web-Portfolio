import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, useLocation} from 'react-router-dom'

const MyNavbar = () => {
    let location = useLocation();
    console.log(location)
    return (
        <Navbar className="nav" expand="md" variant="dark"
                style={{backgroundColor: '#FF5F6D', color: 'white', marginRight: '10px', width: '100%'}} sticky>
            <Navbar.Brand href="#home">
                <Link className={'about'} to={'/'}> <img
                    alt=""
                    src={`${process.env.PUBLIC_URL}/HLogo.png`}
                    width="45"
                    height="40"
                    className=""
                /> </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
                <Nav className="nav-color ml-auto">
                    {location.pathname !== '/' &&
                    <Link className={'about'} to={''}
                          style={{color: 'white', marginRight: '20px', fontSize: '20px'}}> Home </Link>
                    }
                    {location.pathname !== '/ProjectGrid' && <Link className={'about'} to={'ProjectGrid'} style={{
                        color: 'white',
                        marginRight: '20px',
                        fontSize: '20px'
                    }}> Projects </Link>}
                    {location.pathname !=='/Work' && <Link className={'about'} to={'Work'}
                          style={{color: 'white', marginRight: '20px', fontSize: '20px'}}> Work </Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;