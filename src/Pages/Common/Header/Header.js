import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
            <Navbar className='my-nav' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center' href="#home"><img className='me-2' width={35} src={logo} alt="" />PERFECT GYM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#services"><span className="nav-text">Our services</span></Nav.Link>
                            <Nav.Link href="#about"><span className="nav-text">About us</span></Nav.Link>
                            <Nav.Link href="#login"><span className="nav-text">Login</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;