
import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Login } from "./components/authentication/login/LogIn";

import { Home } from "./components/home/Home";
// import {Product} from "./components/Product";
// import { Navbar } from "./components/navbar/Navbar";
import { CartNavbar } from './components/cart/CartNavbar';
import {Payment} from './components/payment/Payment'
import {Address} from './components/address/Address'
import {Product} from './components/productdetails/Product'
import {ShowProduct} from "./components/productdetails/ShowProduct"
import {LogIn} from './components/authentication/login/LogIn'
 function App() {
  return <div>

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<LogIn/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<ShowProduct/>}></Route>
    <Route path='/cart' element= {<CartNavbar/>}/>
    <Route path="/addToCart/:id" element={<CartNavbar/>}></Route>
    <Route path="/address" element={<Address/>}></Route>
    <Route path="/payment" element={<Payment/>}></Route>
    </Routes>
  </div>
 }

export default App

