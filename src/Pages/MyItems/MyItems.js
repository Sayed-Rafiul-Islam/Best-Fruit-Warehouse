import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import MyItemTable from '../MyItemTable/MyItemTable';

const MyItems = () => {
    // navigation section
    const navigate = useNavigate();

    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);


    // if no data to show, ever spinning spinner handling section
    const [loading, setLoading] = useState(false);
    const neverLoad = () => {

        if (myItems.length) {

            setLoading(true);
        }
    }
    setTimeout(neverLoad, 15000);


    // user's added table show filtered using email and restrict unauthorized access using access token
    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            if (email) {

                try {
                    const { data } = await axios.get(`https://fast-sands-43043.herokuapp.com/myItems?email=${email}`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    });
                    console.log(data)
                    setMyItems(data)
                }
                catch (error) {
                    console.log(error)
                    if (error.response.status === 403 || error.response.status === 401) {
                        signOut(auth);
                        navigate('/login');
                    }
                }
            }
        }
        getItem();
    }, [user])

    // handle specific item delete using specific id 
    const handleMyItemDelete = _id => {
        const proceed = window.confirm('Are you sure?')
        if (true) {
            const url = `https://fast-sands-43043.herokuapp.com/item/${_id}`;
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