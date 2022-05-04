import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import BestSupplier from "../BestSupplier/BestSupplier";
import Item from "../Item/Item";
import MostAskedQuestions from "../MostAskedQuestions/MostAskedQuestions";
import './Home.css'


const Home = () => {

    // loaded items from mongoDB
    const [items, setItems] = useState([]);
    const homeItems = items.slice(0, 6);

    // load data
    useEffect(() => {
        const getItems = async () => {
            const data = await axios.get('https://fast-sands-43043.herokuapp.com/item');
            setItems(data.data);
        }
        getItems();
    }, [])

    return (
        <div className="d-flex flex-column">
            {/* banner */}
            <div className="mb-5">
                <img className="img-fluid" src="https://i.ibb.co/7KwWTN5/banner.jpg" alt="" />
            </div>

            {/* Inventory Items section */}
            <h1 className="text-center ">INVENTORY <span className="text-success">ITEMS</span></h1>

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
                <button className="btn btn-success d-block mx-auto mt-3 w-50"><Link className="text-white text-decoration-none" to={'/manageInventory'}>MANAGE INVENTORIES</Link></button>
            </div>

            {/* Most Asked Questions Section  */}
            <div className="my-4 container">
                <h1 className="text-center my-4">MOST ASKED<span className="text-success"> QUESTIONS</span></h1>
                <div className="d-flex flex-lg-row flex-column-reverse flex-wrap align-items-center container">
                    <MostAskedQuestions></MostAskedQuestions>
                    <div className="width ps-2">
                        <img className="img-fluid" src="https://i.ibb.co/9cT0GLt/pic.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* Best Fruits Warehouse Founders section */}
            <div className="container my-4">
                <BestSupplier></BestSupplier>
                <div>

                </div>
            </div>

            {/* Footer  */}
            <div className="bg-dark w-100 mt-4 py-4 text-center text-light">
                <h3><span className="text-success">Best Fruit</span> Warehouse</h3>
                <small>Copyright © 2022 Best Fruit Warehouse</small> <br />
                <small>All rights reserved</small>
            </div>
        </div>
    );
};

export default Home;