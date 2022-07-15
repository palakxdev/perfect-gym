import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { ImGoogle3 } from "react-icons/im";
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='social-line'></div>
                <p className='text-white m-4'>or</p>
                <div className='social-line'></div>
            </div>

            <button className='social-button rounded-pill text-white d-flex align-items-center justify-content-center mx-auto py-2 px-4'>
                    <ImGoogle3 className='text-primary'></ImGoogle3>
                    <span className='ms-2'>GOOGLE SIGN IN</span>
            </button>
            <br />
            <button className='social-button rounded-pill text-white d-flex align-items-center justify-content-center mx-auto py-2 px-4'>
                <FaFacebook className='text-primary'></FaFacebook>
                <span className='ms-2'>FACEBOOK SIGN IN</span>
            </button>
        </>
    );
};

export default SocialLogin;