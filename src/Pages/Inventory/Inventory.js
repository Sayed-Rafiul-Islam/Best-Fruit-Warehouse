import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, InputGroup, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {

    const navigate = useNavigate();

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
    if (amount === -2000) {
        amount = quantity;
    }

    // stockout button show
    const [stockout, setStockout] = useState(false);

    // update item 
    quantity = amount;




    // handle restock form filed 
    const handleRestock = e => {
        e.preventDefault();
        setStockout(false);
        const add = parseInt(e.target.number.value);
        amount = parseInt(amount);

        if (add > 0) {
            const newAmount = parseInt(amount) + add;
            console.log(newAmount)
            handleUpdateItem(newAmount)
            toast('Item Restocked')
            e.target.number.value = '';
        }
        if (add < 0) {
            alert('Restocking amount must be positive !!')
        }
    }

    // handle Delivered button
    const handleDelivered = remove => {
        const newAmount = amount - remove;

        if (newAmount > 0) {
            handleUpdateItem(newAmount);
            toast('Item Delivered')
        }
        else if (newAmount === 0) {
            setStockout(true);
            setAmount(0)
        }
    }



    //  updated data send to  mongoDB
    const handleUpdateItem = (quantity) => {

        if (quantity !== 0) {
            quantity = `${quantity}`
            let updatedItem = { _id, name, image, description, quantity, price, supplierName };

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
                        setAmount(quantity);
                    }
                })
        }
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
                                <ListGroupItem>Quantity : {quantity}</ListGroupItem>
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
                                {stockout ?
                                    <button disabled className='btn btn-dark d-block w-100 mb-5'>StockOut</button>
                                    :
                                    <button onClick={() => handleDelivered(1)} className='btn btn-danger d-block w-100 mb-5'>Delivered</button>
                                }

                            </Card.Body>
                        </Card>
                        :
                        <Spinner className="spinner-border mx-auto" variant='success' role="status">
                        </Spinner>
                }
            </div>
            <button className="btn btn-success d-block mx-auto mt-3 w-50"><Link className="text-white text-decoration-none" to={'/manageInventory'}>MANAGE INVENTORIES</Link></button>
        </div >
    );
};

export default Inventory;