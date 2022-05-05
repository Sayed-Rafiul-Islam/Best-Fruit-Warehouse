import { Button, Spinner } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'

const Register = () => {

    // handle registration
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
    }

    // error message 
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>{error.message}</p>;
    }

    //  navigation section
    const navigate = useNavigate();
    if (user) {
        toast.info('Verification mail has been sent');
        navigate('/home')
    }

    return (
        <div className='container pt-5 mt-5'>
            <h1 className='text-center mb-4'>Please <span className='text-success'>Register</span></h1>
            <div className=' d-flex justify-content-center'>
                <Form onSubmit={handleRegister} className='width'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='name' type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
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
                                Register
                            </Button>
                    }
                    <p>Already have an account? <Link className='text-decoration-none' to='/login'><span className='text-success'>Go to Login</span></Link></p>
                    {errorMessage}
                </Form>

            </div>
        </div>
    );
};

export default Register;