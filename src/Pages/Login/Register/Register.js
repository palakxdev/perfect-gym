import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <>
            <div className='login-container p-5 mt-5 mx-auto rounded-4 mb-5'>
                <h2 className='mt-4 mb-4'>REGISTER NOW !!!</h2>
                <div className="login-hr mb-4"></div>
                <Form>
                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicEmail">
                        <Form.Control className='login-control' type="text" placeholder="Your name" />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicEmail">
                        <Form.Control className='login-control' type="email" placeholder="Your email" />
                    </Form.Group>

                    <Form.Group className="mb-3 login-input mx-auto" controlId="formBasicPassword">
                        <Form.Control className='login-control' type="password" placeholder="Your Password" />
                    </Form.Group>

                    <div className='text-center'>
                        <Button className='mb-2 px-4  login-button' variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Register;