import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='my-3 header fixed-top d-flex align-items-center'>
            <nav className='d-flex align-items-center justify-content-between container'>
                <div className='d-flex'>
                    <CustomLink className='link' to='/home'><span className='link'>Home</span></CustomLink>
                    <CustomLink className='link' to='/inventory'><span className='link'>INVENTORY</span></CustomLink>
                    <CustomLink className='link' to='/blogs'><span className='link'>BLOGS</span></CustomLink>
                </div>
                <div className='d-flex'>
                    {
                        user ?
                            <div className='d-flex align-items-center'>
                                <CustomLink className='link' to='/addInventoryItem'><span className='link'>ADD ITEM</span></CustomLink>
                                <CustomLink className='link' to='/manageInventory'><span className='link'>MANAGE ITEMS</span></CustomLink>
                                <CustomLink className='link' to='/myItem'><span className='link'>MY ITEMS</span></CustomLink>
                                <CustomLink className='link' to='/home'><button onClick={handleLogout} className='btn btn-link text-decoration-none text-dark'><span className='link'>LOG OUT</span></button></CustomLink>
                            </div>
                            :
                            <CustomLink className='link' to='/login'><span className='link'>LOG IN</span></CustomLink>
                    }
                </div>
            </nav >
        </div >
    );
};

export default Header;