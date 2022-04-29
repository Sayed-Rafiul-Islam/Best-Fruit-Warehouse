import React from 'react';
import { useNavigate } from 'react-router';

const Item = (props) => {
    const { _id, name, image, description, price, quantity, supplierName } = props.item;
    const navigate = useNavigate();

    const handleUpdate = _id => {
        navigate(`/inventory/:${_id}`)
    }

    return (
        <div className='col-lg-4'>
            <img className="card-img-top w-25" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><i>{description}</i></p>
                <p>${price}</p>
                <p>{quantity}</p>
                <p>{supplierName}</p>
                <button onClick={() => handleUpdate(_id)} className='btn btn-primary'>Update</button>
            </div>
        </div>
    );
};

export default Item;