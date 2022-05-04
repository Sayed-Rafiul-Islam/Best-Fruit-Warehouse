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
        <div className='col-12 col-lg-4 my-2'>
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
                        <button onClick={() => handleUpdate(_id)} className='btn btn-success w-100'>Update</button>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Item;