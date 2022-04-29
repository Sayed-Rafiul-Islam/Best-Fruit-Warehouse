import React from 'react';
import { useNavigate } from 'react-router';
import './Item.css'

const Item = (props) => {
    const { _id, name, image, description, price, quantity, supplierName } = props.item;
    const navigate = useNavigate();

    const handleUpdate = _id => {
        navigate(`/inventory/:${_id}`)
    }

    return (
        <div className='col-12 col-lg-4 border border-dark height'>
            <div className='d-flex justify-center'>
                <img className="w-100 mx-auto" src={image} alt="" />
            </div>
            <div className='py-lg-2'>
                <h5>{name}</h5>
                <p><i>{description}</i></p>
                <p>${price}</p>
                <p>{quantity}</p>
                <p>{supplierName}</p>
                <button onClick={() => handleUpdate(_id)} className='btn btn-primary w-100'>Update</button>
            </div>
        </div>
    );
};

export default Item;