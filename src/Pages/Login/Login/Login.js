import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className='login-container p-5 mt-5 mx-auto rounded-4 mb-5'>
                <h2 className='mt-4 mb-4'>PLEASE LOGIN !!!</h2>
                <div className="login-hr mb-4"></div>
                <Form>
                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicEmail">
                        <Form.Control className='login-control' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicPassword">
                        <Form.Control className='login-control' type="password" placeholder="Password" required />
                    </Form.Group>

                    <div className='text-center'>
                        <Button className='mb-2 px-4  login-button' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <div className='text-white mt-4'>
                        <p>NEW TO PERFECT GYM? <span className='text-primary'>PLEASE REGISTER.</span></p>
                        <p>FORGET YOUR PASSWORD? <span className='text-primary'>RESET PASSWORD.</span></p>
                    </div>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Login;