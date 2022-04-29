import React from 'react';

const TableItem = (props) => {
    const { _id, name, price, quantity, supplierName } = props.item;
    const { handleItemDelete } = props;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td><button onClick={() => handleItemDelete(_id)} className='btn btn-danger'>Delete</button></td>

        </tr>
    );
};

export default TableItem;