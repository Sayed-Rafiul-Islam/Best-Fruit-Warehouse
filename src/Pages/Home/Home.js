import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Item from "../Item/Item";

const Home = () => {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const data = await axios.get('http://localhost:5000/item');
        setItems(data.data);
    }
    getItems();

    /* https://i.ibb.co/Y2BjR2g/fruit-7.png */
    return (
        <div className="d-flex flex-column justify-center">
            <div>
                <p>banner</p>
            </div>
            <Header></Header>
            <div style={{ display: `${items[0]?._id ? 'none' : 'block'}` }} className="spinner-border mx-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="row container-fluid mx-auto">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
                <button><Link to={'/manageInventory'}>Manage Inventory</Link></button>
            </div>
            <div><p>section-1</p></div>W
            <div><p>section-2</p></div>
            <div><p>footer</p></div>
        </div>
    );
};

export default Home;