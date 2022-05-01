import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemTable from '../MyItemTable/MyItemTable';

const MyItems = () => {

    const [myItems, setMyItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const neverLoad = () => {

        if (myItems.length) {
            setLoading(true);
        }
    }
    setTimeout(neverLoad, 15000);




    const [user] = useAuthState(auth);

    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            if (email) {
                const { data } = await axios.get(`http://localhost:5000/myItems?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data)
            }
        }
        getItem();
    }, [user])

    const handleMyItemDelete = _id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/item/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const newItems = myItems.filter(myItem => myItem?._id !== _id);
                    setMyItems(newItems);
                })
        }


    }
    return (
        <div className='mt-5 pt-lg-5 text-center mb-4'>
            <h1 className='mb-4' >MY <span className='text-success'>ITEMS</span></h1>
            <div className='container'>
                {
                    myItems.length ?
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
                                    myItems.map(myItem => <MyItemTable
                                        key={myItem._id}
                                        myItem={myItem}
                                        handleMyItemDelete={handleMyItemDelete}
                                    ></MyItemTable>)
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
        </div>
    );
};

export default MyItems;