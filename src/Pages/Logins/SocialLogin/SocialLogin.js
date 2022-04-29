import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const navigate = useNavigate();
    if (user) {
        toast('Login Successful');
        navigate('/home');
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>;
    }
    return (
        <div>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <p className="visually-hidden text-center">Loading...</p>
                    </Spinner>
                    :
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary w-100'>Google Login</button>

            }
            {errorMessage}
        </div>
    );
};

export default SocialLogin;