import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = async e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        await signInWithEmailAndPassword(email, password);

    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error.message}</p>;
    }
    if (user) {
        toast('Successfully Registered');
        // Navigate('/home')

    }
    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Please Login</h1>
            <div className=' d-flex justify-content-center'>
                <Form onSubmit={handleLogin} className='w-50'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    {
                        loading ?
                            <Spinner animation="border" role="status">
                                <p className="visually-hidden text-center">Loading...</p>
                            </Spinner>
                            :
                            <Button className='w-100 mb-2' variant="primary" type="submit">
                                Login
                            </Button>
                    }
                    <p>Don't have an account? <span><Link to='/register'>Go to Register</Link></span></p>
                    <p>Forgot Password? <button className='btn btn-link pb-2'>Reset Password</button></p>
                    {errorMessage}
                </Form>
            </div>

        </div>
    );
};

export default Login;