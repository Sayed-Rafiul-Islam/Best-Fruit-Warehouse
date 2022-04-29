import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Please Login</h1>
            <div className=' d-flex justify-content-center'>
                <Form className='w-50'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                    <p>Don't have an account? <span><Link to='/register'>Go to Register</Link></span></p>
                    <p>Forgot Password? <button className='btn btn-link pb-2'>Reset Password</button></p>
                </Form>
            </div>

        </div>
    );
};

export default Login;