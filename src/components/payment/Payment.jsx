
import './Payment.css' ;
import { Stepper, Step, StepLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import {ReactComponent as CashLogo} from '../svg/cashLogo.svg' ;
import {ReactComponent as PaymentLogo} from '../svg/paymentLogo.svg' ;

import { useNavigate } from 'react-router-dom'; 
export const Payment = ()=>{
    const st = ["Cart","Address", "Payment", "Summary" ];
    const [steps, setSteps]  = useState(st)
    const saved = localStorage.getItem("productPrice");
    const initialValue = JSON.parse(saved);
    let navigate = useNavigate()
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
                <div id='payment_head'>  Payment Method</div>
              </div>

              <div id='cod_section'>
                  <div>
                      <CashLogo width={50}/>
                  </div>

                  <div className='payment_text'>
                         Cash on Delivery
                  </div>

                  <div id='paymentlogo_margin'>
                        <PaymentLogo/>
                  </div>
              </div>

              
              <div id='reselling_section'>
                  <div>
                  <div id='reselling_section_left'>
                      <div id='reselling_head'>
                          Reselling the Order?
                      </div>

                      <div id='reselling_text'>
                      Click on 'Yes' to add Final Price
                      </div>
                  </div>


                  <div id='reselling_section_right'>
                      <div className='reselling_boolean_active'>
                          No
                      </div>

                      <div className='reselling_boolean'>
                          Yes
                      </div>
                  </div>
                  </div>
              </div>

              </div>

              
              <div id='reselling_section'>
                  <div>
                  <div id='reselling_section_left'>
                      <div id='reselling_head'>
                          Reselling the Order?
                      </div>

                      <div id='reselling_text'>
                      Click on 'Yes' to add Final Price
                      </div>
                  </div>


                  <div id='reselling_section_right'>
                      <div className='reselling_boolean_active'>
                          No
                      </div>

                      <div className='reselling_boolean'>
                          Yes
                      </div>
                  </div>
                  </div>
              </div>

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
                 <p> &#x20B9; {initialValue-100}</p>
               </div>
                  <div style={{textAlign:"center", color:"gray"}}>Clicking on ‘Continue’ will not deduct any money</div>
                  <button className='continue-btn' onClick={()=>{
                    alert("Your Order is Successfully Placed")
                    navigate("/")
                  }}>Continue</button>
                  <div className='btn-img-div'>
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt="" />
                  </div>
            </div>
        </div>
      
    </>
}









