import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='h-line mx-auto mt-5'></div>
            <footer className='mt-4'>
                <div className='d-flex justify-content-evenly flex-wrap sm-center p-5'>
                    <div className='p-2'>
                        <h3>CONTACT ME</h3>
                        <p className='footer-text-color'>Email: perfectgymhelp@gmail.com <br />Cell: +1-212-456-7890</p>
                    </div>
                    <div className='p-2'>
                        <h3>FOLLOW ME ON</h3>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <a href="https://facebook.com" target='_blank' rel='noreferrer'><FaFacebook className='icon-width' /></a>
                            <a href="https://twitter.com" target='_blank' rel='noreferrer'><FaTwitter className='icon-width' /></a>
                            <a href="https://instagram.com" target='_blank' rel='noreferrer'><FaInstagram className='icon-width' /></a>
                            <a href="https://linkedin.com" target='_blank' rel='noreferrer'><FaLinkedinIn className='icon-width' /></a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom text-center'>
                    <span><small className='text-white'>&copy; PERFECT GYM {(new Date().getFullYear())}</small></span>
                </div>
            </footer>
        </>
    );
};

export default Footer;