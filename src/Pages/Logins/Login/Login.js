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

        await signInWithEmailAndPassword(email, password);

        console.log()
        const { data } = await axios.post('http://localhost:5000/login', { email })
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>;
    }
    if (user) {
        toast('Successfully Logged In');
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
            <p className='text-center mt-3'>Don't have an account? <Link to='/register'><span className='text-success'>Go to Register</span></Link></p>
            <p className='text-center'>Forgot Password? <button onClick={async () => {

                await sendPasswordResetEmail(email);
                toast('Sent email');
            }} className='btn btn-link pb-2  text-success'>Reset Password</button></p>

        </div>
    );
};

export default Login;