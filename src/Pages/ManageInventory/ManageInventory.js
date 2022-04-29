import React from 'react';
import { useNavigate } from 'react-router';

const ManageInventory = () => {
    const navigate = useNavigate();
    const navToAddInventoryItem = () => navigate('/addInventoryItem');
    return (
        <div>
            <h1>manage inventory</h1>
            <button onClick={navToAddInventoryItem} className='btn btn-dark'>Add New Item</button>
        </div>
    );
};

export default ManageInventory;