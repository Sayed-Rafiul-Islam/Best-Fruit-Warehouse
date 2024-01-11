import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import TableItem from './TableItem/TableItem';
import './ManageInventory.css'
import { Modal } from 'bootstrap';
import { toast } from 'react-toastify';

const ManageInventory = () => {

    // if no data to show, ever spinning spinner handling section
    const [loading, setLoading] = useState(false);
    const neverLoad = () => {

        if (items.length) {
            setLoading(true);
        }
    }
    setTimeout(neverLoad, 15000);


    // pagination
    const [page, setPage] = useState(0);

    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        const getPageCount = async () => {
            const { data } = await axios.get('https://best-fruit-warehouse-server-side.vercel.app/itemCount');
            const count = data.count;
            const pages = Math.ceil(count / 10);
            setPageCount(pages)
        }
        getPageCount();
    }, [])


    // navigation section
    const navigate = useNavigate();
    const navToAddInventoryItem = () => navigate('/addInventoryItem');

    // data loading section for table
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const data = await axios.get(`https://best-fruit-warehouse-server-side.vercel.app/item?page=${page}`);
            setItems(data.data);
        }
        getItems();
    }, [page])



    // delete item handling section
    const handleItemDelete = _id => {
        const url = `https://best-fruit-warehouse-server-side.vercel.app/item/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const newItems = items.filter(item => item?._id !== _id);
                setItems(newItems);
                toast.error('Item Deleted')
            })
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
                                <Spinner className="spinner-border d-block mx-auto" variant='success' role="status">
                                </Spinner>
                                :
                                <h1 className='text-danger'>No items to show !</h1>
                            }
                        </div>
                }


            </div>
            <div className='container'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'bg-success text-white btn btn-outline-success mx-1 mb-2' : 'btn btn-outline-success mx-1 mb-2'}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
            </div>
            <button onClick={navToAddInventoryItem} className='btn btn-success d-block w-50 mx-auto my-5'>ADD NEW ITEM</button>

        </div>
    );
};

export default ManageInventory;