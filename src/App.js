
// import React from "react";
// import { Login } from "./components/authentication/login/LogIn";
// import {Product} from "./components/productdetails/productdetails"
// import {Home} from './components/home/Home'

//  function App() {
//   return <div>
//     {/* <Product/>
//      <Login/> */}
    
//    <Home/>
  
     
//   </div>
   
  
// }
// export default App


import './App.css';
import { Home } from './components/home/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
            <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
