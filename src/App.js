
import './App.css';
import { Home } from './components/home/Home';
import {Routes,Route} from "react-router-dom";
import {Productdetails} from './components/productdetails/Productdetails'

import {CartNavbar} from './components/cart/CartNavbar'
import { Navbar } from './components/navbar/Navbar';
function App() {
  return (
    <div >
      {/* <CartNavbar/> */}
      <Navbar/>
      {/* <Routes>
            <Route path='/' element={<Home/>} />
      </Routes> */}
      {/* <Productdetails/> */}
    </div>
  );
}
export default App