import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import axios from 'axios';

const Login = () => {
    // navigation section
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // reset password auth
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    //  sign in with mail handle
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async e => {
        e.preventDefault();

        // taken values via form
        const email = e.target.email.value;
        const password = e.target.password.value;

        await signInWithEmailAndPassword(email, password);

        // email sent to database and access token stored in local storage
        const { data } = await axios.post('https://bestfruits.cyclic.app/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }

    // error message and toast if user logs in
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>;
    }
    if (user) {
        toast.success('Successfully Logged In');
        navigate(from, { replace: true });
    }
    return (
        <div className='container mt-5 pt-5'>
            <h1 className='text-center mb-4'>Please <span className='text-success'>Login</span></h1>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={handleLogin} className='width'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    {
                        loading ?
                            <Spinner className='d-block mx-auto' variant='success' animation="border" role="status">
                            </Spinner>
                            :
                            <Button className='w-100 mb-2' variant="success" type="submit">
                                Login
                            </Button>
                    }
                    {errorMessage}
                    <SocialLogin></SocialLogin>

                </Form>

            </div>
            <p className='text-center mt-3'>Don't have an account? <Link className='text-decoration-none' to='/register'><span className='text-success'>Go to Register</span></Link></p>
            <p className='text-center'>Forgot Password? <button onClick={async () => {
                await sendPasswordResetEmail(email);
                toast.info('Reset Password Link Sent via Email');
            }} className='btn btn-link pb-2 text-decoration-none  text-success'>Reset Password</button></p>

        </div>
    );
};

export default Login;