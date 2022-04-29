import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './Item.css'

const Item = (props) => {
    const { _id, name, image, description, price, quantity, supplierName } = props.item;
    const navigate = useNavigate();

    const handleUpdate = _id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className='col-12 col-lg-4'>
            {/* <div className='d-flex justify-center'>
                <img className="w-100 mx-auto" src={image} alt="" />
            </div>
            <div className='py-lg-2'>
                <h5>{name}</h5>
                <p><i>{description}</i></p>
                <p>${price}</p>
                <p>{quantity}</p>
                <p>{supplierName}</p>
                <button onClick={() => handleUpdate(_id)} className='btn btn-outline-dark w-100'>Update</button>

            </div> */}
            <Card className="position-relative card bg-dark text-white overflow-hidden">
                <Card.Img className='card-img' src={image} alt="Card image" />
                <Card.ImgOverlay className='dark-overlay'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='extra-info'>
                        <Card.Text>Price : ${price}</Card.Text>
                        <Card.Text>Quantity : {quantity}</Card.Text>
                        <Card.Text>Supplier Name : {supplierName}</Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <button onClick={() => handleUpdate(_id)} className='btn btn-dark w-100'>Update</button>
        </div>
    );
};

export default Item;