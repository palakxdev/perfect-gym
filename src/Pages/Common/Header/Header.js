import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className='my-nav' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center' as={Link} to="/home"><img className='me-2' width={35} src={logo} alt="" />PERFECT GYM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home#services"><span className="nav-text">Our services</span></Nav.Link>
                            <Nav.Link as={Link} to="/about"><span className="nav-text">About us</span></Nav.Link>
                            <Nav.Link as={Link} to="/login"><span className="nav-text">Login</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;