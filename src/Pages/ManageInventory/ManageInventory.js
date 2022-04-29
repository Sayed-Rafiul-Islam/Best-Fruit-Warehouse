import axios from 'axios';
import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import TableItem from './TableItem/TableItem';

const ManageInventory = () => {
    const navigate = useNavigate();
    const navToAddInventoryItem = () => navigate('/addInventoryItem');

    const [items, setItems] = useState([]);

    useState(() => {
        const getItems = async () => {
            const data = await axios.get('http://localhost:5000/item');
            setItems(data.data);
        }
        getItems();

    }, [])
    const handleItemDelete = _id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const newItems = items.filter(item => item?._id !== _id);
                    console.log(newItems)
                    setItems(newItems);
                })
        }
    }

    return (
        <div>
            <h1>manage inventory</h1>

            <div className='container'>
                {
                    items[0]?._id ?
                        <Table responsive="lg">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Supplier Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map(item => <TableItem
                                        key={item._id}
                                        item={item}
                                        handleItemDelete={handleItemDelete}
                                    ></TableItem>)
                                }
                            </tbody>
                        </Table>
                        :
                        <Spinner className="spinner-border mx-auto" role="status">
                        </Spinner>
                }


            </div>
            <button onClick={navToAddInventoryItem} className='btn btn-dark'>Add New Item</button>
        </div>
    );
};

export default ManageInventory;