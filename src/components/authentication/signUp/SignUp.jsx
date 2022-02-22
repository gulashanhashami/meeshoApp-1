// import './SignUp.css'
// import signUp_img from '../../../images/signUp-img.jpg'
// import { getAuth, RecaptchaVerifier } from "firebase/auth";
// export const SignUp = ()=>{

//    const auth = getAuth();
//    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// }, auth);


//     return <div className='signUp-body'>
//         <div id="signUp-container">
//         <div className="img-div">
//             <img src={signUp_img} alt="" />
//         </div>
//         <div className='input-div-container'>
//             <div className="input-div">
//             <h3>Sign Up to view your profile</h3>
//             <div >
//                     <p>Country</p>
//                     <div className='phone-div'>
//                         <div id='sign-in-button'></div>
//                     <label>IN +91</label>
//                     <input type="number" placeholder="Phone Number"/>
//                     </div>
//             </div>
//             <button className='otp-btn'>
//                 Send OTP
//             </button>
//             </div>
//         </div>
//     </div>
//     </div>
// }