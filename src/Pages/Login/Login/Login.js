import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className='login-container w-50 p-5 mt-5 mx-auto rounded-4'>
                <h2 className='mt-4 mb-4'>Please Login!!!</h2>
                <div className="login-hr mb-4"></div>
                <Form>
                    <Form.Group className="mb-3 login-input" controlId="formBasicEmail">
                        <Form.Control className='login-control' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input" controlId="formBasicPassword">
                        <Form.Control className='login-control' type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='mb-2 px-4 login-button' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Login;