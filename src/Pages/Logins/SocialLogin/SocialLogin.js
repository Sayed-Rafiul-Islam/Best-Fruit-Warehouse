import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import axios from 'axios';

const SocialLogin = () => {
    // handle google sign in 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSocialLogins = async () => {
        await signInWithGoogle();
    }


        const getToken = async (email) => {
                // email sent to database and access token stored in local storage                
                const { data } = await axios.post('https://best-fruit-warehouse-server-side.vercel.app/login',  {email} )
                localStorage.setItem('accessToken', data.accessToken);
        }


    // navigation section
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        
        getToken(user.user.email);
        
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
                    <button onClick={()=>handleSocialLogins()} className='btn btn-outline-success w-100'>Google Login</button>

            }
            {errorMessage}
        </div>
    );
};

export default SocialLogin;