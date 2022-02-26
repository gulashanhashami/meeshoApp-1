
import './App.css';
import { Home } from './components/home/Home';
import {Routes,Route} from "react-router-dom";
import {Productdetails} from './components/productdetails/Productdetails'

import {CartNavbar} from './components/cart/CartNavbar'
function App() {
  return (
    <div >
      <CartNavbar/>
      
      {/* <Routes>
            <Route path='/' element={<Home/>} />
      </Routes> */}
      {/* <Productdetails/> */}
    </div>
  );
}
