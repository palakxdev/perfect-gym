import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="h-line mx-auto mt-5"></div>
            <footer className="mt-4">
                {/* ---------------SITE LOGO---------------- */}
                <div className="d-flex align-items-center justify-content-center text-white pt-4 ms-lg-5 me-lg-0 me-2">
                    <img className="me-2" width={35} src={logo} alt="" />
                    PERFECT GYM
                </div>
                <hr className="text-primary" />
                <div className="d-flex justify-content-evenly flex-wrap sm-center p-5">
                    <div className="p-2">
                        <h3>CONTACT ME</h3>
                        <p className="footer-text-color">
                            Email: perfectgymhelp@gmail.com <br />
                            Cell: +1-212-456-7890
                        </p>
                    </div>
                    {/* ---------------IMPORTANT LINKS---------------- */}
                    <div className="d-flex flex-column">
                        <h3>IMPORTANT LINKS</h3>
                        <button className="btn btn-link">
                            {' '}
                            <Link to="/about">About Me</Link>{' '}
                        </button>
                        <button className="btn btn-link">Privacy Policy</button>
                        <button className="btn btn-link">
                            Terms & Condition
                        </button>
                        <button className="btn btn-link">Disclaimer</button>
                    </div>
                    {/* ---------------SOCIAL MEDIA---------------- */}
                    <div className="p-2">
                        <h3>FOLLOW ME ON</h3>
                        <div className="d-flex align-items-center justify-content-evenly">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook className="icon-width" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter className="icon-width" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram className="icon-width" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn className="icon-width" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* ---------------COPY RIGHT---------------- */}
                <div className="footer-bottom text-center">
                    <span className="ms-lg-5">
                        <small className="text-white ms-lg-4">
                            &copy; PERFECT GYM {new Date().getFullYear()}
                        </small>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
