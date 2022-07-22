import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Common/Loading/Loading';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let errorelement;

    const navigateToLogin = () => {
        navigate('/login')
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setEmail(email);
        console.log(email);
    }

    const handlePasswordBlur = event => {
        const password = event.target.value;
        setPassword(password);
        console.log(password);
    }

    if (user) {
        return (
            <div className='text-center p-4 successful-regesterer m-4'>
                <h2 className='text-success'>Congratulation!!!</h2>
                <h2 className='mb-5 text-success'>You're successfuly registered.</h2>
                <Link to="/home" className='text-decoration-none' onClick={navigateToLogin}>----Go to home page----</Link>
            </div>
        );
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

    const handleFormSubmit = (event) => {
        createUserWithEmailAndPassword(email, password);
        event.preventDefault();
    }

    return (
        <>
            <div className='login-container p-5 mt-5 mx-auto rounded-4 mb-5'>
                <h2 className='mt-4 mb-4'>REGISTER NOW !!!</h2>
                <div className="login-hr mb-4"></div>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3 login-input mx-auto" controlId="yourName">
                        <Form.Control className='login-control' type="text" placeholder="Your name" />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicEmail">
                        <Form.Control className='login-control' onBlur={handleEmailBlur} type="email" name='email' placeholder="Your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicPassword">
                        <Form.Control className='login-control' onBlur={handlePasswordBlur} type="password" name='password' placeholder="Your Password" required />
                    </Form.Group>

                    {errorelement}

                    <div className='text-center'>
                        <Button className='mb-2 px-4 login-button' variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
                <div className='text-white mt-4'>
                    <p>ALREADY REGISTERD? <span className='text-primary register-toggler' onClick={navigateToLogin}>PLEASE LOGIN.</span></p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Register;