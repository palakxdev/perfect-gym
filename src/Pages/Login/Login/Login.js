import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const navigateToRegister = () => {
        navigate('/register')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorelement;

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return (
            <div className='text-center m-5 p-5'>
                <Loading></Loading>
                <p className='text-primary'>Loading...</p>
            </div>
        );
    }

    if (error) {
        errorelement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            <div className='login-container p-5 mt-5 mx-auto rounded-4 mb-5'>
                <h2 className='mt-4 mb-4'>PLEASE LOGIN !!!</h2>
                <div className="login-hr mb-4"></div>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} className='login-control' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} className='login-control' type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorelement}
                    <div className='text-center'>
                        <Button className='mb-2 px-4  login-button' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <div className='text-white mt-4'>
                        <p>NEW TO PERFECT GYM? <span className='text-primary register-toggler' onClick={navigateToRegister}>PLEASE REGISTER.</span></p>
                        <p>FORGET YOUR PASSWORD? <span className='text-primary'>RESET PASSWORD.</span></p>
                    </div>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Login;