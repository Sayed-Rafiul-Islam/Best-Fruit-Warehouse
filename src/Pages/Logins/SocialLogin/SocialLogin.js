import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    // handle google sign in 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // navigation section
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        toast.success('Login Successful');
        navigate(from, { replace: true });
    }

    //  error message 
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>;
    }
    return (
        <div>
            {
                loading ?
                    <Spinner className='d-block mx-auto' animation="border" role="status">
                    </Spinner>
                    :
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline-success w-100'>Google Login</button>

            }
            {errorMessage}
        </div>
    );
};

export default SocialLogin;