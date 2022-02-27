import './CartNavbar.css'
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import { Stepper, Step, StepLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { Navigate, Link } from 'react-router-dom';
import {Address} from '../address/Address'
export const CartNavbar = ()=>{
    const st = ["Cart","Address", "Payment", "Summary" ];
    const [steps, setSteps]  = useState(st)
    const  {id} =useParams()
    const [data,setData]=useState([])
    const [image,setImage]=useState([])
    
    
  useEffect(()=>{
    axios.get(`https://meesho-clone-123.herokuapp.com/proudcts/${id}`)
.then(({data})=>{
  
  setData(data)
  setImage(data.images)
  })
  },[])
  localStorage.setItem("productPrice", JSON.stringify(data.discounted_price))
  // console.log("AmitGf", data.images[0])
    return <>
       <div id="navbar-main">
         <div className='navbar-div'>
            <div className='logo-div'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxBx_qV2aTUPJ_faUXY0jSHYgkOaW6l-9bDo1uRllHveesA1MNFu6Ne8QOEaEo29rqQ&usqp=CAU'/>
            </div>
            <div className='step-div'>
            <Box>
   <Stepper activeStep={1} alternativeLabel>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>
   </Box>
            </div>
   <div className='empty-div'></div>
        </div>
        <div className='cart-products'>
            <div className='cart-item'>
              <div>
              <span className="span">Cart</span> <span className="span span-color">|1 Item</span>
              </div>
              <div className='product-details'>
                  <div className='img-div'>
                    <img src={image[0]} alt="" />
                  </div>
                  <div className='content-div'>
                    <h5>{data.title}</h5>
                    <span>Size: Free Size</span> <span>Qty: 1</span>
                    <h4>₹ {data.discounted_price}</h4>
                  </div>
                  <div className='edit'>Edit</div>
              </div>
              <h3 style={{fontSize:"18px", color:"grey"}}>Supplier : SHIVAM ENTERPRISES SUP</h3>
            </div>
            <div className='price-div'>
              <p>Price Details</p>
               <div className='price-div-list'>
                 <div>Product Charges</div>
                 <div>&#x20B9; {data.discounted_price}</div>
               </div>
               <div className='price-div-list'>
                 <div>Delivery Charges</div>
                 <div>+ &#x20B9; 0</div>
               </div>
               <div className='price-div-list'>
                 <div>COD Charges</div>
                 <div>+ &#x20B9; 0</div>
               </div>
               <div className='price-div-list'>
                 <div>1st Order Discount</div>
                 <div>- &#x20B9; 100</div>
               </div>
               <div className='total-price'>
                 <p>Order Total</p>
                 <p> &#x20B9; {data.discounted_price -100}</p>
               </div>
                  <div style={{textAlign:"center", color:"gray"}}>Clicking on ‘Continue’ will not deduct any money</div>
                  <Link to="/address">
                  <button className='continue-btn'>Continue</button>
                  </Link>
                  <div className='btn-img-div'>
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt="" />
                  </div>
            </div>
        </div>
      </div>
    </>
}


