import React from 'react';

const Item = (props) => {
    const { name, image, description, price, quantity, supplierName } = props.item;

    return (
        <div className='col-lg-4'>
            <img className="card-img-top w-25" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><i>{description}</i></p>
                <p>${price}</p>
                <p>{quantity}</p>
                <p>{supplierName}</p>
                <button className='btn btn-primary'>Update</button>
            </div>
        </div>
    );
};

export default Item;