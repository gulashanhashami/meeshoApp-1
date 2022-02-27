
import './App.css';
import { Home } from './components/home/Home';

import {Productdetails} from './components/productdetails/Productdetails'
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Login } from "./components/authentication/login/LogIn";

// import { Home } from "./components/home/Home";
import {Product} from "./components/Product";
// import { Navbar } from "./components/navbar/Navbar";
import { CartNavbar } from './components/cart/CartNavbar';
import {Payment} from './components/payment/Payment'
import {Address} from './components/address/Address'
 function App() {
  return <div>
    <Address/>
    {/* <Payment/> */}
    {/* <CartNavbar/> */}
     {/* <Login/>
     
     <Home/> */}
     {/* <Routes>
     <Route path="/" element={<Navbar />}></Route>

     <Route path="/product" element={<Product/>}></Route>

     </Routes> */}
  </div>
 }

export default App

