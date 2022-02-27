import './LogIn.css'
import signUp_img from '../../../images/signUp-img.jpg'
import  { useState} from 'react'
import {authentication} from '../../../firebase'
import {RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../navbar/Navbar';
export function LogIn() {

  const countryCode = "+91";
  const [phoneNumber, setPhoneNumber] = useState(countryCode)
  const [exandForm, setExpandForm] = useState(true)
  const [OTP, setOTP] = useState("")

  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        
      }
    },  authentication);
  }
 let navigate = useNavigate()

  const requestOTP = (e)=>{
    e.preventDefault()
    if(phoneNumber.length >=12){
      console.log(phoneNumber)
      
      generateRecaptcha()
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log("OTP has been sent on this number")
         setExpandForm(false);
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });
    }
  }

  const verifyOTP = (e)=>{
    e.preventDefault()
    // let otp = e.target.value
    // setOTP(otp)
    if(OTP.length ===6){
      let confirmationResult = window.confirmationResult

     
      confirmationResult.confirm(OTP).then((result) => {
      // User signed in successfully.
       const user = result.user;
       console.log(user)
      // ...
      alert("Login Successful")
      navigate("/")
      }).catch((error) => {
      // User couldn't sign in (bad verification code?)
     // ...
     alert("Enter Correct OTP")
     console.log(error)
     });
    }
  }

  // checking 
    return  exandForm ? 
    <div className='signUp-body'>
    <div id="signUp-container">
     <div className="img-div">
         <img src={signUp_img} alt="" />
     </div>
         <div className='input-div-main'>
             <h6 className='input-div-content'>Sign Up to view your profile</h6>
             <div id="input-all">
                 <div className='span-div'>
                     <span style={{color:'gray'}}>Country</span>
                     <span>+91</span>
                 </div>
                 <div className='input-div'>
                 <form onSubmit={requestOTP}  className="form">
                 <div id='sign-in-button'></div>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number" value={phoneNumber} onChange={(e)=>{
              setPhoneNumber(e.target.value)
            }}/>
                    <label htmlFor='name' className="form-label">Phone Number</label>
                 </div>
                 <button  className='otp-btn'>Send OTP</button>
                 </form>
                 </div>
             </div>
         </div>
    </div>
 </div>

 :
 
  <div className='signUp-body'>
  <div id="signUp-container">
   <div className="img-div">
       <img src={signUp_img} alt="" />
   </div>
       <div className='input-div-main'>
           <h6 className='input-div-content'>Enter OTP sent to </h6>
           <div id="input-all">
              
               <div className='input-div'>
               <form className="form" onSubmit={verifyOTP}>
              
                  <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Enter OTP" value={OTP} onChange={(e)=>setOTP(e.target.value)}/>
                  <label htmlFor='tel' className="form-label">Enter OTP</label>
                  {/* <p>Resend OTP in {resend}</p> */}
               </div>
               <button onClick={verifyOTP} className='otp-btn'>Verify</button>
               </form>
               </div>
           </div>
           
       </div>
  </div>
</div>


}


// return <div>
// <form onSubmit={requestOTP}>
//   <div id='sign-in-button'></div>
//     <input type="tel" name="mobile" placeholder="enter number" value={phoneNumber} onChange={(e)=>{
//       setPhoneNumber(e.target.value)
//     }}/>
//     <button>Submit</button>
// </form>
// <form onSubmit={verifyOTP}>
//     <input type="number" name="otp" placeholder="enter otp" value={OTP} onChange={(e)=>setOTP(e.target.value)}/>
//     <button>Submit</button>
// </form>
// </div>