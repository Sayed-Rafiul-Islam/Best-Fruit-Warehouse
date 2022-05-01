import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddInventoryItem.css'

const AddInventoryItem = () => {

    // email taken for my item's filtering 
    const [user] = useAuthState(auth);
    const email = user?.email;

    // handle add item 
    const handleAddItem = async e => {
        // data taken 
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;

        // field clear
        e.target.name.value = '';
        e.target.image.value = '';
        e.target.description.value = '';
        e.target.price.value = '';
        e.target.quantity.value = '';
        e.target.supplierName.value = '';


        // data converged in an objects
        const newItem = {
            name: name,
            image: image,
            description: description,
            price: price,
            quantity: quantity,
            supplierName: supplierName,
            email: email
        }

        // data send to backend 
        await axios.post(`https://fast-sands-43043.herokuapp.com/addInventoryItem`, newItem)
            .then(response => {
                const { data } = response;
                console.log(data.insertedId)
                if (data.insertedId) {
                    toast('Item Added')
                }
            })

    }
    return (
        <div className='mt-5 pt-lg-5'>
            <h1 className='text-center mb-4'>ADD <span className='text-success'>ITEMS</span></h1>
            <Form onSubmit={handleAddItem} className='mt-lg-4 mx-auto sm-width'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control name='name' type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Control name='image' type="url" placeholder="Image Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control name='description' type="text" placeholder="Description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control name='price' type="number" placeholder="Price $" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control name='quantity' type="number" placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control name='supplierName' type="text" placeholder="Supplier Name" required />
                </Form.Group>
                <Button className='w-100 mb-2' variant="success" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
};

export default AddInventoryItem;