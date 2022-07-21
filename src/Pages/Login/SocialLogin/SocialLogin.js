import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { ImGoogle3 } from "react-icons/im";
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Common/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorelement;

    const navigateToHome = () => {
        navigate('/home')
    }

    if (googleUser || facebookUser) {
        // console.log(googleUser, facebookUser);
        return (
            <div className='text-center p-4 successful-regesterer m-4'>
                <h2 className='text-success'>Congratulation!!!</h2>
                <h2 className='mb-5 text-success'>You're successfuly registered.</h2>
                <Link to="/home" className='text-decoration-none' onClick={navigateToHome}>----Go to home page----</Link>
            </div>
        );
    }

    if (googleLoading || facebookLoading) {
        return (
            <div className='text-center m-5 p-5'>
                <Loading></Loading>
                <p>Loading...</p>
            </div>
        );
    }

    if (GoogleError || facebookError) {
        errorelement = <div>
            <p className='text-danger text-center'>sign-in error! {GoogleError?.message} {facebookError?.message}</p>
        </div>
    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='social-line'></div>
                <p className='text-white m-4'>or</p>
                <div className='social-line'></div>
            </div>

            {errorelement}

            <button onClick={() => signInWithGoogle()} className='social-button rounded-pill text-white d-flex align-items-center justify-content-center mx-auto py-2 px-4'>
                <ImGoogle3 className='text-primary'></ImGoogle3>
                <span className='ms-2'>GOOGLE SIGN IN</span>
            </button>
            <br />
            <button onClick={() => signInWithFacebook()} className='social-button rounded-pill text-white d-flex align-items-center justify-content-center mx-auto py-2 px-4'>
                <FaFacebook className='text-primary'></FaFacebook>
                <span className='ms-2'>FACEBOOK SIGN IN</span>
            </button>
        </>
    );
};

export default SocialLogin;