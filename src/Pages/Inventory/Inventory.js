import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, InputGroup, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const Inventory = () => {

    //  loaded data for specific id
    const [item, setItem] = useState({});
    let { _id, name, image, description, quantity, price, supplierName } = item;

    const { id } = useParams();
    useEffect(() => {
        const getItem = async () => {
            const data = await axios.get(`https://fast-sands-43043.herokuapp.com/inventory/${id}`);
            setItem(data.data);
        }
        getItem();
    }, [id])


    // handle quantity and amount
    quantity = parseInt(quantity);
    let [amount, setAmount] = useState(-2000);
    const [del, setDel] = useState(false);
    if (amount === -2000) {
        amount = quantity;
    }

    // handle restock form filed 
    const handleRestock = e => {
        e.preventDefault();
        const add = parseInt(e.target.number.value);
        if (add > 0) {
            const newAmount = amount + add;
            setAmount(newAmount);
        }
        if (add < 0) {
            alert('Restocking amount must be positive !!')
        }
    }

    // handle delete button
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

    // update item 
    quantity = amount;
    const updatedItem = { _id, name, image, description, quantity, price, supplierName };

    //  updated data send to  mongoDB
    const handleUpdateItem = () => {
        fetch(`https://fast-sands-43043.herokuapp.com/inventory/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('Item updated')
                }
            })
    }
    return (
        <div className='my-5 pt-lg-5 text-center'>
            <h1 className='text-success'>INVENTORY</h1>
            <p><i className='text-success mb-4'>Update Item</i></p>
            <div className=''>
                {
                    item?._id ?
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title className='text-success'>{name}</Card.Title>
                                <Card.Text className='text-success'>
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
                                <div className=''>
                                    <InputGroup className="">
                                        <Form onSubmit={handleRestock} className='w-100'>
                                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                                <Form.Control name='number' type="number" placeholder="Enter amount" required />
                                            </Form.Group>
                                            <Button className='w-100 mb-2' variant="success" type="submit">
                                                Restock
                                            </Button>
                                        </Form>
                                    </InputGroup>
                                </div>
                                <button style={{ display: del === 'disable' && "none" }} onClick={() => handleDelete(1)} className='btn btn-danger d-block w-100 mb-5'>Delete</button>
                                <button onClick={handleUpdateItem} className='btn btn-outline-success'>Update</button>
                            </Card.Body>
                        </Card>
                        :
                        <Spinner className="spinner-border mx-auto" variant='success' role="status">
                        </Spinner>
                }
            </div>
        </div >
    );
};

export default Inventory;