import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";


const Home = () => {
    const [items, setItems] = useState([]);
    const homeItems = items.slice(0, 6);

    const getItems = async () => {
        const data = await axios.get('http://localhost:5000/item');
        setItems(data.data);
    }
    getItems();


    return (
        <div className="d-flex flex-column justify-center">
            <div className="mb-5">
                <img className="img-fluid" src="https://i.ibb.co/gSC7pyN/banner.jpg" alt="" />
            </div>

            {/* Inventory Items section */}

            <Spinner style={{ display: `${items[0]?._id ? 'none' : 'block'}` }} className="spinner-border mx-auto" role="status">
            </Spinner>
            <div className="container-fluid">
                <div className="row mx-auto">
                    {
                        homeItems.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
                <button className="btn btn-success d-block mx-auto mt-3"><Link className="text-white text-decoration-none" to={'/manageInventory'}>Manage Inventory</Link></button>
            </div>

            <div><p>section-1</p></div>
            <div><p>section-2</p></div>
            <div><p>footer</p></div>
        </div>
    );
};

export default Home;