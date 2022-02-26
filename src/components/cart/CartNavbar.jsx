import './CartNavbar.css'
import { Stepper, Step, StepLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
export const CartNavbar = ()=>{
    const st = ["Cart","Address", "Payment", "Summary" ];
    const [steps, setSteps]  = useState(st)
    return <>
        <div className='navbar-div'>
            <div className='logo-div'>
                <h1>meesho</h1>
            </div>
            <div className='step-div'>
            <Box style={{ border:"1px solid red"}}>
   <Stepper activeStep={1} alternativeLabel>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>
   </Box>
            </div>
   <div className='empty-div'>
      
   </div>
        </div>
    </>
}