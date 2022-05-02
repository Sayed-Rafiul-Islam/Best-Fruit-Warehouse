import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    // toggle menu bar button function for small devices
    const [visible, setVisible] = useState(false);

    // sign Out 
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='my-lg-3 header fixed-top d-flex align-items-center'>
            <button onClick={() => setVisible(!visible)} className='fixed-top w-25 header-btn btn btn-link text-decoration-none text-light'>MENU</button>
            <div className={visible ? 'nav-1' : 'nav-2'}>
                <nav className='header-bg d-flex flex-lg-row flex-column align-items-center container justify-content-evenly'>
                    <div className='d-flex flex-lg-row flex-column'>
                        <CustomLink className='link' to='/home'><span className='link'>HOME</span></CustomLink>
                        <CustomLink className='link' to='/blogs'><span className='link'>BLOGS</span></CustomLink>
                    </div>
                    <div className='d-flex'>
                        {
                            user ?
                                <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <CustomLink className='link' to='/addInventoryItem'><span className='link'>ADD ITEM</span></CustomLink>
                                    <CustomLink className='link' to='/manageInventory'><span className='link'>MANAGE INVENTORIES</span></CustomLink>
                                    <CustomLink className='link' to='/myItems'> <span className='link'>MY ITEMS</span></CustomLink>
                                    <CustomLink className='link' to='/home'><button onClick={handleLogout} className='btn btn-link text-decoration-none text-dark'><span className='link' style={{ color: 'white' }}>LOG OUT</span></button></CustomLink>
                                </div>
                                :
                                <CustomLink className='link' to='/login'><span className='link'>LOG IN</span></CustomLink>
                        }
                    </div>
                </nav >
            </div>
        </div >
    );
};

export default Header;