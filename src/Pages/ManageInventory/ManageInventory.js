import axios from 'axios';
import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import TableItem from './TableItem/TableItem';

const ManageInventory = () => {

    // if no data to show, ever spinning spinner handling section
    const [loading, setLoading] = useState(false);
    const neverLoad = () => {

        if (items.length) {
            setLoading(true);
        }
    }
    setTimeout(neverLoad, 15000);


    // navigation section
    const navigate = useNavigate();
    const navToAddInventoryItem = () => navigate('/addInventoryItem');

    // data loading section for table
    const [items, setItems] = useState([]);
    useState(() => {
        const getItems = async () => {
            const data = await axios.get('https://fast-sands-43043.herokuapp.com/item');
            setItems(data.data);
        }
        getItems();

        // delete item handling section
    }, [])
    const handleItemDelete = _id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://fast-sands-43043.herokuapp.com/item/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const newItems = items.filter(item => item?._id !== _id);
                    setItems(newItems);
                })
        }
    }

    return (
        <div className='mt-5 pt-lg-5'>
            <h1 className='text-center mb-4'>MANAGE INVENTORY <span className='text-success'>ITEMS</span></h1>

            <div className='container'>
                {
                    items.length ?
                        <Table hover variant='success' responsive="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Supplier Name</th>
                                    <th>Thumbnail</th>
                                    <th> </th>
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
                                    <Spinner className="spinner-border d-block mx-auto" variant='success' role="status">
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