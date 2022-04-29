import React from 'react';
import { useNavigate } from 'react-router';

const Inventory = () => {
    const navigate = useNavigate();
    const navToManageInventory = () => navigate('/manageInventory');
    return (
        <div>
            <h1>inventory</h1>
            <button onClick={navToManageInventory} className='btn btn-dark'>Manage Inventory</button>

        </div>
    );
};

export default Inventory;