import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import MostAskedQuestions from "../MostAskedQuestions/MostAskedQuestions";


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
                <img className="img-fluid" src="https://i.ibb.co/BVv30Wc/banner.jpg" alt="" />
            </div>

            {/* Inventory Items section */}
            <h1 className="text-center my-4">INVENTORY <span className="text-success">ITEMS</span></h1>

            <Spinner style={{ display: `${items[0]?._id ? 'none' : 'block'}` }} className="spinner-border text-success mx-auto" role="status">
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
                <button className="btn btn-success d-block mx-auto mt-3 w-50"><Link className="text-white text-decoration-none" to={'/manageInventory'}>Manage Inventory</Link></button>
            </div>

            {/* Most Asked Questions Section  */}
            <div>
                <h1 className="text-center my-4">MOST ASKED<span className="text-success"> QUESTIONS</span></h1>
                <div className="d-flex flex-wrap align-items-center container">
                    <MostAskedQuestions></MostAskedQuestions>
                    <div className="w-50 ps-2">
                        <img className="img-fluid" src="https://i.ibb.co/BVv30Wc/banner.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center my-4">MEET THE<span className="text-success"> TEAM</span></h1>
            </div>
            <div><p>footer</p></div>
        </div>
    );
};

export default Home;