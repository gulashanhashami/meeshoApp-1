import './Address.css'
import { Stepper, Step, StepLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import {Link} from 'react-router-dom'
export const Address = ()=>{
  
    const st = ["Cart","Address", "Payment", "Summary" ];
    const [steps, setSteps]  = useState(st)
    const [price , setPrice] = useState(0)
    const saved = localStorage.getItem("productPrice");
  const initialValue = JSON.parse(saved);

    // let a = localStorage.getItem(JSON.parse("productPrice"))
    console.log("rupee", initialValue)
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
              {/* Adding div and form */}
            <h3>Select Delivery Address</h3>
            <div id='left'>
              <h2>Contact details</h2>
              <form>
                <p>Name</p>
                <input type="text" placeholder='Name' />
                <p>Phone number</p>
                <input type="text" placeholder='Phone number' />
                <p>House no.</p>
                <input type="text" placeholder='House no./ Building Name' />
                <p>Area/ Colony</p>
                <input type="text" placeholder='Road/ Area/ Colony' />
                <p>Pincode</p>
                <input type="text" placeholder='Pincode' />
                <p>City</p>
                <input className='city' type="text" placeholder='City' /><span><input className='city' type="text" placeholder='State' /></span>
                <p>Nearby Location (optional)</p>
                <input type="text" placeholder='Nearby Location' />
                <Link to="/payment" >
                <input id='btn' type="submit"  value="Save Address & Continue"/>
                </Link>
              </form>
            </div>
            {/* Ending div and form */}
            </div>
            <div className='price-div'>
              <p>Price Details</p>
               <div className='price-div-list'>
                 <div>Product Charges</div>
                 <div>&#x20B9; {initialValue}</div>
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
                 <p> &#x20B9; {initialValue - 100}</p>
               </div>
                  <div style={{textAlign:"center", color:"gray"}}>Clicking on ‘Continue’ will not deduct any money</div>
                  <button className='continue-btn'>Continue</button>
                  <div className='btn-img-div'>
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt="" />
                  </div>
            </div>
        </div>
      </div>
    </>
}