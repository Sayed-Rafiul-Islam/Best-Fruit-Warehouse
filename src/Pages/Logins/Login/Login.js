import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

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
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>;
    }
    if (user) {
        toast('Successfully Registered');
        navigate(from, { replace: true });

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
                            <Spinner className='d-block mx-auto' animation="border" role="status">
                            </Spinner>
                            :
                            <Button className='w-100 mb-2' variant="primary" type="submit">
                                Login
                            </Button>
                    }
                    {errorMessage}
                    <SocialLogin></SocialLogin>

                </Form>

            </div>
            <p className='text-center'>Don't have an account? <span><Link to='/register'>Go to Register</Link></span></p>
            <p className='text-center'>Forgot Password? <button onClick={async () => {
                await sendPasswordResetEmail(email);
                toast('Sent email');
            }} className='btn btn-link pb-2'>Reset Password</button></p>

        </div>
    );
};

export default Login;