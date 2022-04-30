import axios from 'axios';
import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import TableItem from './TableItem/TableItem';

const ManageInventory = () => {

    const [loading, setLoading] = useState(false);
    const neverLoad = () => {
        const loadingItem = items[0]?._id;
        if (!loadingItem) {
            setLoading(true);
        }
    }
    setTimeout(neverLoad, 9000);



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
        <div className='mt-5 pt-5'>
            <h1 className='text-center mt-lg-0 mt-5 pt-lg-0 pt-5 mb-4'>MANAGE INVENTORY ITEMS</h1>

            <div className='container'>
                {
                    items[0]?._id ?
                        <Table hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Supplier Name</th>
                                    <th>Thumbnail</th>
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
                        <div>
                            {
                                loading ?
                                    <h1 className='text-danger'>No items to show !</h1>
                                    :
                                    <Spinner className="spinner-border mx-auto" role="status">
                                    </Spinner>
                            }
                        </div>
                }


            </div>
            <button onClick={navToAddInventoryItem} className='btn btn-success d-block w-50 mx-auto my-5'>Add New Item</button>
        </div>
    );
};

export default ManageInventory;