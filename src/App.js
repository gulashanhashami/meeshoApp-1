
import React from "react";
import { Login } from "./components/authentication/login/LogIn";
import {Product} from "./components/productdetails/productdetails"
import {Home} from './components/home/Home'

 function App() {
  return <div>
    <Product/>
     <Login/>
    
   {/* <Home/> */}
  
     
  </div>
   
  
}
export default App