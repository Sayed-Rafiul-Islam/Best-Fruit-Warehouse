import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, FormControl, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

const Inventory = () => {
    const [item, setItem] = useState({});
    console.log(item)
    const { id } = useParams();

    useEffect(() => {
        const getItem = async () => {
            const data = await axios.get(`http://localhost:5000/inventory/${id}`);
            setItem(data.data);
        }
        getItem();
    }, [id])

    let { _id, name, image, description, quantity, price, supplierName } = item;
    quantity = parseInt(quantity);
    let [amount, setAmount] = useState(-2000);
    const [del, setDel] = useState(false);
    if (amount === -2000) {
        amount = quantity;
    }


    const handleRestock = e => {
        e.preventDefault();
        const add = parseInt(e.target.number.value);
        if (add > 0) {
            const newAmount = amount + add;
            setAmount(newAmount);
            alert('Restocking amount must be positive !!')
        }
    }


    const handleDelete = remove => {
        const newAmount = amount - remove;
        if (newAmount > 0) {
            setAmount(newAmount);
        }
        else {
            alert('This is the last piece ! If you want to Stock it out, please remove the item from manage inventory')
            setDel(true);
        }

    }

    quantity = amount;
    const updatedItem = { _id, name, image, description, quantity, price, supplierName };
    console.log(updatedItem);

    const handleUpdateItem = () => {
        fetch(`http://localhost:5000/inventory/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }









    const navigate = useNavigate();
    const navToManageInventory = () => navigate('/manageInventory');
    return (
        <div>
            <h1>inventory</h1>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='text-info'>
                            ID : {_id}
                        </Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price : ${price}</ListGroupItem>
                        <ListGroupItem>Quantity : {amount ? amount : quantity}</ListGroupItem>
                        <ListGroupItem>Supplier Name : {supplierName}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <Form onSubmit={handleRestock} className='w-75'>
                                <Form.Group className="mb-3" controlId="formBasicNumber">
                                    <Form.Control name='number' type="number" placeholder="Enter amount" required />
                                </Form.Group>
                                <Button className='w-100 mb-2' variant="success" type="submit">
                                    Restock
                                </Button>
                            </Form>
                        </InputGroup>
                        <button style={{ display: del === 'disable' && "none" }} onClick={() => handleDelete(1)} className='btn btn-danger'>Delete</button>
                        <button onClick={handleUpdateItem} className='btn btn-info'>Update</button>
                    </Card.Body>
                </Card>
                <button onClick={navToManageInventory} className='btn btn-dark'>Manage Inventory</button>
            </div>
        </div >
    );
};

export default Inventory;