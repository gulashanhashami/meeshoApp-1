
import { Link , Navigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import './Navbar.css';
// import {Product} from "./Product";
import {Search, PhoneAndroidRounded,PersonOutlineRounded, ShoppingCartOutlined} from "@material-ui/icons";
// const Navbardiv= styled.div`

// `;


export const Navbar = () => {

    const [Drop, setDrop]= useState(false);
    const [Drop1, setDrop1]= useState(false);
    const [Drop2, setDrop2]= useState(false);
    const [Drop3, setDrop3]= useState(false);
    const [Drop4, setDrop4]= useState(false);
    const [Drop5, setDrop5]= useState(false);
    const [Drop6, setDrop6]= useState(false);
    const [Drop7, setDrop7]= useState(false);
    const [Drop8, setDrop8]= useState(false);

    function displayNone(e){
        
    }
  return (
    <div>
        {/* <Navbardiv> */}
         <div id="navbar"> 
         <div id="di"><img className="mlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxBx_qV2aTUPJ_faUXY0jSHYgkOaW6l-9bDo1uRllHveesA1MNFu6Ne8QOEaEo29rqQ&usqp=CAU" alt="" srcset="" />
        
         <input id="inps"  type="text" placeholder="Try Saree,Kurti or Search by Product Code" />

         <Search className="searchb" />
         </div> 
         <div className="r">

         <PhoneAndroidRounded className="phone" />
         <p className="text">Download App</p>
    
         <div id="mob">
             </div>
         <div className="line"></div>
         <div>
         <p className="text1">Become Supplier</p>
         </div>
         <div className="line"></div>
         <Link to= "/login">
         <div className="navprofile">     
         <PersonOutlineRounded className="prof"  />
         <p className="person">Profile</p>
         </div>
         </Link>
         <Link to="/cart">
         <div className="cart"> 
             <ShoppingCartOutlined  className="cartlogo"/>
             <p id="car">Cart</p>
         </div>
         </Link>
         </div>
      </div>
      
      <div id="dropd">
          <p className="texthover" id="eth" onMouseEnter={(e) => {
              setDrop(true)
            displayNone(e)
          }} onMouseLeave={() => setDrop(true)}>Women Ethnic</p>
          <p className="texthover" onMouseEnter={() => setDrop1(true)} onMouseLeave={() => setDrop1(false)}>Women Western</p>
          <p className="texthover" onMouseEnter={() => setDrop2(true)} onMouseLeave={() => setDrop2(false)}>Jewelleries & Accessories</p>
          <p className="texthover" onMouseEnter={() => setDrop3(true)} onMouseLeave={() => setDrop3(false)}>Men</p>
          <p className="texthover" onMouseEnter={() => setDrop4(true)} onMouseLeave={() => setDrop4(false)}>Beauty & Health</p>
          <p className="texthover"  onMouseEnter={() => setDrop5(true)} onMouseLeave={() => setDrop5(false)}>Bags & Footwear</p>
          <p className="texthover"  onMouseEnter={() => setDrop6(true)} onMouseLeave={() => setDrop6(false)}>Home & Kitchen</p>
          <p className="texthover" onMouseEnter={() => setDrop7(true)} onMouseLeave={() => setDrop7(false)}>Kids</p>
          <p className="texthover" id="elec" onMouseEnter={() => setDrop8(true)} onMouseLeave={() => setDrop8(false)}>Electronics</p>
      </div>
      {(Drop==true)?(<div className="down">
       <div className="dowp">
           <h4>All Women Ethnic</h4>
           <p>View All</p>
       </div>
       <div id="divcol" className="dowp">
           <h4>Sarees</h4>
           <Link to={'/product'}><p>All Sarees</p></Link>
           <p>Silk Sarees</p>
           <p>Cotton Silk Sarees</p>
           <p>Cotton Sarees</p>
           <p>Georgette Sarees</p>
           <p>Chiffon Sarees</p>
           <p>Satin Sarees</p>
           <p>Embroidered Sarees</p>
       </div>
       <div className="dowp">
           <h4>Kurtis</h4>
           <p>All Kurtis</p>
           <p>Rayon Kurtis</p>
           <p>Cotton Kurtis</p>
           <p>Embroidered Kurtis</p>
       </div>
       <div id="divcol1" className="dowp">
       <h4>Suits & Dress Material</h4>
           <p>All Suits & Dress Material</p>
           <p>Cotton Suits</p>
           <p>Embroidered Suits</p>
           <p>Chanderi Suits</p>
       </div>
       <div className="dowp">
       <h4>Other Ethnic</h4>
           <p>All Suits & Dress Material</p>
           <p>Blouses</p>
           <p>Dupattas</p>
           <p>Lehanga</p>
           <p>Gown</p>
           <p>Ethnic Bottomwear</p>
       </div>
       <div id="divcol2" className="dowp" >
           <h4>Kurta Sets</h4>
           <p>All Kurta Sets</p>
       </div>
      </div>)
:""}


{(Drop1==true)?(<div className="down">
       <div className="dowp">
           <h4>Topwear</h4>
           <p>Dresses</p>
           <p>Sweater</p>
           <p>Jumpsuits</p>
       </div>
       <div id="divcol3" className="dowp">
           <h4>Bottomwear</h4>
           <Link to={'/product'}><p>Jeans</p></Link>
           <p>Jeggings</p>
           <p>Palazzos</p>
           <p>Shorts</p>
           <p>Skirts</p>
       </div>
       <div className="dowp">
       <h4>Innerwear</h4>
           <p>Braw</p>
           <p>Brief</p>
       </div>
       <div id="divcol4" className="dowp">
       <h4>Sleepwear</h4>
           <p>Nightsuits</p>
           <p>Babydolls</p>
       </div>
      </div>)
:""}

{(Drop2==true)?(<div className="down">
       <div className="dowp">
           <h4>Jewellery</h4>
           <Link to={'/product'}><p>Jewellery Set</p></Link>
           <p>Mangalsutras</p>
           <p>Earrings</p>
           <p>Studs</p>
           <p>Bangles</p>
           <p>Necklaces</p>
           <p>Rings</p>
           <p>Anklets</p>
       </div>
       <div id="divcol5" className="dowp">
           <h4>Women Accessory</h4>
           <p>Bags</p>
           <p>Watches</p>
           <p>Hair Accessories</p>
           <p>Sunglasses</p>
           <p>Socks</p>
       </div>
      </div>)
:""}

{(Drop3==true)?(<div className="down">
       <div className="dowp">
       <h4>Top Wear</h4>
           <p>All Top Wear</p>
           <p>Tshirts</p>
           <p>Shirts</p>
       </div>
       <div id="divcol6" className="dowp">
           <h4>Bottom Wear</h4>
           <Link to={'/product'}><p>Track Pants</p></Link>
           <p>Jeans</p>
           <p>Trousers</p>
       </div>
       <div className="dowp">
       <h4>Men Accessories</h4>
           <p>All Men Accessories</p>
           <p>Watches</p>
           <p>Belts</p>
           <p>Wallets</p>
           <p>Jewellery</p>
           <p>Sunglasses</p>
           <p>Bags</p>
       </div>
       <div id="divcol7"  className="dowp">
       <h4>Men Footwear</h4>
           <p>Sports Shoes</p>
           <p>Casual Shoes</p>
           <p>Formal Shoes</p>
           <p>Sandals</p>
       </div>
       <div className="dowp">
          <h4>Ethnic Wear</h4>
           <p>Men Kurtas</p>
           <p>Ethnic Jackets</p>
       </div>
       <div id="divcol8" className="dowp" >
           <h4>Inner & Sleep Wear</h4>
           <p>All Inner & Sleep Wear</p>
           <p>Vests</p>
       </div>
      </div>)
:""}

{(Drop4==true)?(<div className="down">
       <div className="dowp">
           <h4>Make up</h4>
           <p>Faces</p>
           <p>Eyes</p>
           <p>Lips</p>
           <p>Nails</p>
       </div>
       <div id="divcol9" className="dowp">
           <h4>Wellness</h4>
           <Link to={'/product'}><p>Sanitizers</p></Link>
           <p>Silk Sarees</p>
           <p>Oral Care</p>
           <p>Feminine Hygiene</p>
       </div>
       <div className="dowp">
           <h4>Skincare</h4>
           <p>Deodorants</p>
       </div>
      </div>)
:""}

{(Drop5==true)?(<div className="down">
       <div className="dowp">
           <h4>Women Footwear</h4>
           <p>Flats</p>
           <p>Bellies</p>
           <p>Juttis</p>
       </div>
       <div id="divcol10" className="dowp">
           <h4>Men Footwear</h4>
           <Link to={'/product'}><p>Sports Shoes</p></Link>
           <p>Casual Shoes</p>
           <p>Formal Shoes</p>
           <p>Sandals</p>
       </div>
       <div className="dowp">
       <h4>Women Bags</h4>
           <p>All Women Bags</p>
           <p>Handbags</p>
           <p>Clutches</p>
           <p>Slingbags</p>
       </div>
       <div id="divcol11" className="dowp">
       <h4>Men Bags</h4>
           <p>All Women Bags</p>
           <p>All Men Bags</p>
           <p>Men Wallets</p>
       </div>
      </div>)
:""}

{(Drop6==true)?(<div className="down">
       <div className="dowp">
           <h4>Home Furnishing</h4>
           <p>Bedsheets</p>
           <p>Doormats</p>
           <p>Curtains & Sheers</p>
           <p>Cushions & Cushion Covers</p>
           <p>Mattress Protectors</p>
       </div>
       <div id="divcol12" className="dowp">
           <h4>Home Decor</h4>
           <Link to={'/product'}><p>All Home Decor</p></Link>
           <p>Stickers</p>
           <p>Clocks</p>
           <p>Showpieces</p>
       </div>
       <div className="dowp">
       <h4>Kitchen & Dining</h4>
           <p>Kitchen Storage</p>
           <p>Cookware & Bakeware</p>
       </div>
      </div>)
:""}

{(Drop7==true)?(<div className="down">
       <div className="dowp">
           <h4>Toys & Accessories</h4>
           <p>Soft Toys</p>
           <p>Footwear</p>
           <p>Stationery</p>
           <p>Watches</p>
           <p>Bags & Backpacks</p>
       </div>
       <div id="divcol13" className="dowp">
           <h4>Infant 0-2 Years</h4>
           <Link to={'/product'}><p>Rompers</p></Link>
       </div>
       <div className="dowp">
       <h4>Boys & Girls 2+ Years</h4>
           <p>Dresses</p>
       </div>
       <div id="divcol14" className="dowp">
       <h4>Baby Care</h4>
           <p>All Baby Care</p>
       </div>
      </div>)
:""}

{(Drop8==true)?(<div className="down">
       <div className="dowp">
           <h4>Mobile & Accessories</h4>
           <p>All Mobile & Accessories</p>
           <p>Smartwatches</p>
           <p>Mobile Holders</p>
           <p>Mobile cases and covers</p>
       </div>
       <div id="divcol15" className="dowp">
           <h4>Sarees</h4>
           <Link to={'/product'}><p>Appliances</p></Link>
           <p>All Appliances</p>
           <p>Grooming</p>
           <p>Home Appliances</p>
       </div>
      </div>)
:""}
      {/* </Navbardiv> */}
    </div>
  );
};
