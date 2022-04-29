import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>{error.message}</p>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    }

    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Please Register</h1>
            <div className=' d-flex justify-content-center'>
                <Form onSubmit={handleRegister} className='w-50'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='name' type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 mb-2' variant="primary" type="submit">
                        Register
                    </Button>
                    <p>Already have an account? <span><Link to='/login'>Go to Login</Link></span></p>
                    {errorMessage}
                </Form>
            </div>
        </div>
    );
};

export default Register;