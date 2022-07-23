import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <>
            <Navbar className='my-nav' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center' as={Link} to="/home"><img className='me-2' width={35} src={logo} alt="" />PERFECT GYM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home#services"><span className="nav-text">My services</span></Nav.Link>
                            <Nav.Link as={Link} to="/about"><span className="nav-text">About me</span></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><span className="nav-text">Blogs</span></Nav.Link>
                            {
                                user?
                                <button onClick={handleSignOut} className='banner-button rounded-pill px-3 py-1 text-white'>Sign out</button>
                                :
                                <Nav.Link as={Link} to="/login"><span className="nav-text">Sign in</span></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;