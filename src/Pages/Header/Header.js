import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='my-3'>
            <nav className='d-flex justify-content-between container'>
                <div className='d-flex'>
                    <CustomLink to='/home'>HOME</CustomLink>
                    <CustomLink to='/inventory'>INVENTORY</CustomLink>
                </div>
                <div className='d-flex'>
                    <CustomLink to='/signup'>SIGN UP</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;