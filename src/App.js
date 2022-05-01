import { Route, Routes } from 'react-router';
import './App.css';
import AddInventoryItem from './Pages/AddInventoryItem/AddInventoryItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Logins/Login/Login';
import Register from './Pages/Logins/Register/Register';
import RequireAuth from './Pages/Logins/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './Pages/MyItems/MyItems';
import Header from './Pages/Header/Header';
import { useState } from 'react';

function App() {

  // className='fixed-top nav' style={{ left: visible ? '-300px' : '-550px' }}
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addInventoryItem' element={<AddInventoryItem></AddInventoryItem>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;
