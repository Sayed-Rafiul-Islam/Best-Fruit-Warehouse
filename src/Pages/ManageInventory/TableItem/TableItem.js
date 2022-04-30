import React from 'react';

const TableItem = (props) => {
    const { _id, name, price, quantity, supplierName, image } = props.item;
    const { handleItemDelete } = props;
    return (
        <tr>
            <td className='align-middle'>{_id}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{price}</td>
            <td className='align-middle'>{quantity}</td>
            <td className='align-middle'>{supplierName}</td>
            <td className='w-25'><img className='img-thumbnail w-25' src={image} alt="" /></td>

            <td className='align-middle'><button onClick={() => handleItemDelete(_id)} className='btn btn-danger'>Delete</button></td>

        </tr>
    );
};

export default TableItem;