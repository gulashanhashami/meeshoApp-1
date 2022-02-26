
<<<<<<< HEAD
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
=======
// import React from "react";
// import { Login } from "./components/authentication/login/LogIn";
// import {Product} from "./components/productdetails/productdetails"
// import {Home} from './components/home/Home'

//  function App() {
//   return <div>
//     {/* <Product/>
//      <Login/> */}
    
//    <Home/>
  
     
//       confirmationResult.confirm(OTP).then((result) => {
//       // User signed in successfully.
//        const user = result.user;
//        console.log(user)
//       // ...
//       alert("SignIn successfull")
//       }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//      // ...
//      alert("Enter Correct OTP")
//      console.log(error)
//      });
//     }
//   }

//   return (
//     <div>
//         return <div>
//         <form onSubmit={requestOTP}>
//           <div id='sign-in-button'></div>
//             <input type="mobile" name="mobile" placeholder="enter number" value={phoneNumber} onChange={(e)=>{
//               setPhoneNumber(e.target.value)
//             }}/>
//             <button>Submit</button>
//         </form>
//         <form onSubmit={verifyOTP}>
//             <input type="number" name="otp" placeholder="enter otp" value={OTP} onChange={(e)=>setOTP(e.target.value)}/>
//             <button>Submit</button>
//         </form>
//     </div>
//     </div>
//   )
// }

import React from "react";
import { Login } from "./components/authentication/login/LogIn";
import { SignUp } from "./components/authentication/signUp/SignUp";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";

 function App() {
  return <div>
     <Navbar />
     {/* <Login/>
     <SignUp/>
     <Home/> */}
  </div>
 }
// </div>
   
  
// }
// export default App


// import './App.css';
// import { Home } from './components/home/Home';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
//   } from "react-router-dom";


// function App() {
//   return (
//     <div >
//       <Routes>
//             <Route path='/' element={<Home/>} />
//       </Routes>
//     </div>
//   );
// }
>>>>>>> 09c7198db3ffe263f0f7aa7998cd1f4588916556

// export default App;
