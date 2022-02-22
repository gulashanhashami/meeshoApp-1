// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCv_hcLOzWtypRFWJ_2_C9M6iRmfAA0Lls",
  authDomain: "meesho-auth-b80af.firebaseapp.com",
  projectId: "meesho-auth-b80af",
  storageBucket: "meesho-auth-b80af.appspot.com",
  messagingSenderId: "376367493085",
  appId: "1:376367493085:web:ee5715e96b9995f90d9034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCv_hcLOzWtypRFWJ_2_C9M6iRmfAA0Lls",
//   authDomain: "meesho-auth-b80af.firebaseapp.com",
//   projectId: "meesho-auth-b80af",
//   storageBucket: "meesho-auth-b80af.appspot.com",
//   messagingSenderId: "376367493085",
//   appId: "1:376367493085:web:ee5715e96b9995f90d9034"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);