import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='text-center text-success mt-4'>
            <img className='w-25' src="https://i.ibb.co/YypN0yq/sad.png" alt="" />
            <h1>404</h1>
            <h4 className='faded-text'>page not found</h4>
            <p>The page you are looking for does not exists or another error occurred <br />
                <b>Go Back</b> or head over to <b>https://fruit-warhouse.web.app</b> to choose a new direction</p>
        </div>
    );
};

export default NotFound;