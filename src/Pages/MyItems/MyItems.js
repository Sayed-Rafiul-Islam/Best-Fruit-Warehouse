import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemTable from '../MyItemTable/MyItemTable';

const MyItems = () => {

    const [loading, setLoading] = useState(false);
    const neverLoad = () => {
        const loadingItem = myItems[0]?._id;
        if (!loadingItem) {
            setLoading(true);
        }
    }
    setTimeout(neverLoad, 9000);


    const [myItems, setMyItems] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            const { data } = await axios.get(`http://localhost:5000/myItems?email=${email}`);
            setMyItems(data)
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
                    console.log(newItems)
                    setMyItems(newItems);
                })
        }


    }
    return (
        <div className='mt-5 pt-5 text-center mb-4'>
            <h1 className='mt-lg-0 pt-lg-0 mt-5 pt-5' >MY ITEMS</h1>
            <div className='container'>
                {
                    myItems[0]?._id ?
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
                                    <h1 className='text-danger'>You did not add any items</h1>
                                    :
                                    <Spinner className="spinner-border mx-auto" role="status">
                                    </Spinner>
                            }
                        </div>

                }


            </div>
        </div>
    );
};

export default MyItems;