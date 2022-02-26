import { Link } from "react-router-dom";
import styled from "styled-components";
import {Search, PhoneAndroidRounded,PersonOutlineRounded, ShoppingCartOutlined} from "@material-ui/icons";
const Navbardiv= styled.div`
font-family: sans-serif;
   #navbar{
       margin:auto;
   width:100%;
   
   display:flex;
   justify-content: space-between;
   text-content:center;
    height:70px;
    background-color:white;
    border:1px solid grey;
}
#di{
    width:45%;
    // height:70px;
    display:flex;
    // border:1px solid red;
    justify-content: space-between;
}
.mlogo{
    height:47px;
    margin-top:18px;
    margin-left:30px;
}
#inps{
   width:65%;
    height:40px;
    margin-top:15px;
    margin-left:20px;
    // direction:rtl;
    padding-left:6%;

}
.searchb{
    // border:1px solid grey;
    position:relative;
    top:25px;
    left:-63%;
}
.phone{
    margin-top:20px;
}
.r{
    width:42%;
    display:flex;
    // height:70px;
    // border:1px solid red;
}
.text{
    margin-top:25px;
    margin-left:10px;
}
.text1{
    margin-top:25px;
    margin-left:35px;
}
.line{
    width:2px;
    height:40px;
    margin-left:35px;
    margin-top:15px;
    background-color:grey;
}
.person{
    font-size:15px;
}
.prof{
    margin-left:7px;
}
.cartlogo{
    margin-left:5px;
}
.cart{
    width:70px;
    // height:50px;
    margin-left:35px;
    display:grid;
   margin-top:10px;
    //  border:1px solid red;
}
.navprofile{
    width:70px;
    // height:50px;
    margin-left:35px;
    display:grid;
   margin-top:10px;
    //  border:1px solid red;
}
// .navprofile:hover{
//     background-color:pink;
// }
#dropd{
    width:100%;
    // color:grey;
    // height:40px;
    padding:10px;
    display:flex;
     justify-content: space-between;
    border-bottom:1px solid grey;
}
#eth{
    margin-left:30px;
}
#elec{
    margin-right:35px;
}
#down{
    width:96%;
    display:flex;
    // display:none;
    // visibility: hidden;
    // justify-content: space-between;
    height:300px;
    margin-left:27px;
    border:1px solid red;
}
.dowp{
    width:12%;
    // height:auto;
    padding-left:18px;
    border:1px solid grey;
}
// #eth:hover{
//     background-color: red;
  
//   }

`;


export const Navbar = () => {

    
    
  return (
    <div>
        <Navbardiv>
         <div id="navbar"> 
         <div id="di"><img className="mlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxBx_qV2aTUPJ_faUXY0jSHYgkOaW6l-9bDo1uRllHveesA1MNFu6Ne8QOEaEo29rqQ&usqp=CAU" alt="" srcset="" />
        
    <input id="inps"  type="text" />

         <Search className="searchb" />
         </div> 
         <div className="r">
        
         <PhoneAndroidRounded className="phone" />
        
         <p className="text">Download App</p>
         <div id="mob">
             </div>
         <div className="line"></div>
         <p className="text1">Become Supplier</p>
         <div className="line"></div>
         <div className="navprofile">     
         <PersonOutlineRounded className="prof"  />
         <p className="person">Profile</p>
         </div>
         <div className="cart">
             <ShoppingCartOutlined  className="cartlogo"/>
             <p>Cart</p>
         </div>
         </div>
      </div>
      
      <div id="dropd">
          <p id="eth">Women Ethnic</p>
          <p>Women Western</p>
          <p>Jewelleries & Accessories</p>
          <p>Men</p>
          <p>Beauty & Health</p>
          <p>Bags & Footwear</p>
          <p>Home & Kitchen</p>
          <p>Kids</p>
          <p id="elec">Electronics</p>
      </div>
      <div id="down">
       <div className="dowp">
           <p>All Women Ethnic</p>
           <p>View All</p>
       </div>
       <div className="dowp">
           <p>Sarees</p>
           <p>All Sarees</p>
           <p>Silk Sarees</p>
           <p>Cotton Silk Sarees</p>
           <p>Cotton Sarees</p>
           <p>Georgette Sarees</p>
           <p>Chiffon Sarees</p>
           <p>Satin Sarees</p>
           <p>Embroidered Sarees</p>
       </div>
       <div className="dowp">
           <p>Kurtis</p>
           <p>All Kurtis</p>
           <p>Rayon Kurtis</p>
           <p>Cotton Kurtis</p>
           <p>Embroidered Kurtis</p>
       </div>
       <div className="dowp">
       <p>Suits & Dress Material</p>
           <p>All Suits & Dress Material</p>
           <p>Cotton Suits</p>
           <p>Embroidered Suits</p>
           <p>Chanderi Suits</p>
       </div>
       <div className="dowp">
       <p>Other Ethnic</p>
           <p>All Suits & Dress Material</p>
           <p>Blouses</p>
           <p>Dupattas</p>
           <p>Lehanga</p>
           <p>Gown</p>
           <p>Ethnic Bottomwear</p>
       </div>
       <div className="dowp" >
           <p>Kurta Sets</p>
           <p>All Kurta Sets</p>
       </div>
      </div>
      </Navbardiv>
    </div>
  );
};