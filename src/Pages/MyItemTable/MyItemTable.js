import React from 'react';
import './MyItemTable.css'
const MyItemTable = (props) => {
    const { _id, name, price, quantity, supplierName, image } = props.myItem;
    const { handleMyItemDelete } = props;
    return (
        <tr>
            <td className='align-middle'>{_id}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{price}</td>
            <td className='align-middle'>{quantity}</td>
            <td className='align-middle'>{supplierName}</td>
            <td className='w-25'><img className='img-thumbnail img-width' src={image} alt="" /></td>
            <td className='align-middle'><button onClick={() => handleMyItemDelete(_id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default MyItemTable;