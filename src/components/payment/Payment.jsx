
import './Payment.css'
import { Stepper, Step, StepLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
export const Payment = ()=>{
    const st = ["Cart","Address", "Payment", "Summary" ];
    const [steps, setSteps]  = useState(st)
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
                <h2>Payment Method</h2>
              </div>
              <div className='product-details'>
                  
              </div>
            </div>
            <div className='price-div'>
              <p>Price Details</p>
               <div className='price-div-list'>
                 <div>Product Charges</div>
                 <div>&#x20B9; 482</div>
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
                 <p> &#x20B9; 382</p>
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