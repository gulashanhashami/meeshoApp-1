import React from "react";
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import{Span} from "./StyleSpan"
import "./productdetails.css"
import "./Product.css"
import { LoadingWrapper } from './loading/LoadingWrapper'
import { Dot } from './loading/Dot'
import {Navbar} from '../navbar/Navbar'
import { Link } from "react-router-dom";
export const ShowProduct=()=>{
  const  {id} =useParams()
  const [data,setData]=useState([])
  console.log("dils", data)
  const [image,setImage]=useState([])
  const [detail,setDetail]=useState({})
  const [n,setN]=useState(0)
  const [loading,setLoading]=useState(true)

//   console.log(id)

  useEffect(()=>{
    axios.get(`https://meesho-clone-123.herokuapp.com/proudcts/${id}`)
.then(({data})=>{
  
  setData(data)
 setImage(data.images)
 setDetail(data.details)
 setLoading(false)
  })
  },[])

  console.log("Amit",data._id)
  return (loading==false)?(
    <>
    <Navbar/>
    <div className='complete_page'>
            <div className='left_side'>
                <div className='left_small'>
                    { (image[1])?<img  src={image[1]} onClick={()=>setN(1)}/>:""}
                       { (image[2])?<img  src={image[2]} onClick={()=>setN(2)}/>:""}
                       { (image[3])?<img  src={image[3]} onClick={()=>setN(3)}/>:""}
                      {  (image[4])?<img  src={image[4]} onClick={()=>setN(4)}/>:""}
                        
                   
                </div>
                <div className='left_big'>
                    <div className='left_big_img'>
                    <img src={image[n]} alt=""/>
                    </div>
                    <div className='left_big_p'>
                        
                        <Link to={`/addToCart/${data._id}`}>
                        <button className='Add_to_card'>Add To Cart</button>
                        </Link>
                        <hr />
                        <p>1 Similar Products</p>
                        <img className='small_image' src="https://images.meesho.com/images/products/35729859/tp8k4_512.jpg" />
                    </div>
                </div>
            </div>
            <div className='Right_side'>
                <div className='first_box'>
                    
                <div className="imageDetail">
           <p className="text1">{data.title}</p>

           <div className="text2">
                 <h5 className="text2_1">₹{data.discounted_price}</h5>
                 <p className="text2_2">₹{data.original_price}</p>
                 <span className="text2_3">{Math.ceil((data.original_price)/(data.discounted_price)*10)}% off</span>
           </div>

           <div className="text3">
           <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" color="greenT2" iconsize="20" className="Icon-sc-1iwi4w1-0 jabcjO" ><path fillRule="evenodd" clipRule="evenodd" d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z" fill="#06A759" ></path></svg>

           <p className="text3_1">₹100 discount on 1st order</p>
           </div>

           <div ><p className="text4">Free Delivery</p></div>

           <div className="text5">
             <div className="text5_1">
             <div className="text5_1_1">
            <Span rating={data.rating} >{data.rating}</Span>
        {/* for star     */}
             </div>
             <p className="text5_1_2">20 Reviews</p>
             </div>

             <div>
               {
           (data.icon==true)?<svg width="62" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" iconSize="20" className="Icon-sc-1iwi4w1-0 jpkVRY" ><path fill="#fff" d="M0 0h62v24H0z" ></path><path d="M10.6 6.085a2 2 0 012-2H60a2 2 0 012 2V17.27a2 2 0 01-2 2H12.6a2 2 0 01-2-2V6.085z" fill="#FDE9F2" ></path><path d="M27.294 7.008h-5.876v1.204h2.313v6.824h1.261V8.212h2.302V7.008zM27.278 9.611v5.425h1.195v-2.534c0-1.274.587-1.79 1.384-1.79.143 0 .298.023.398.07V9.576a.929.929 0 00-.41-.08c-.62 0-1.162.367-1.427.986h-.022v-.872h-1.118zM35.764 15.036V9.611h-1.207v3.12c0 .814-.542 1.388-1.228 1.388-.631 0-.996-.448-.996-1.285V9.611h-1.195v3.475c0 1.32.708 2.122 1.837 2.122.741 0 1.339-.367 1.627-.895h.055v.723h1.107zM39.173 15.208c1.24 0 2.08-.688 2.08-1.789 0-2.168-2.866-1.204-2.866-2.397 0-.356.266-.642.786-.642.475 0 .863.286.918.688l1.118-.241c-.188-.826-1.007-1.388-2.07-1.388-1.162 0-1.947.665-1.947 1.675 0 2.167 2.866 1.204 2.866 2.397 0 .459-.299.768-.852.768-.543 0-.985-.298-1.118-.78l-1.096.23c.255.929 1.063 1.48 2.18 1.48zM44.62 15.15c.387 0 .719-.068.896-.16l-.133-.998a1.086 1.086 0 01-.531.115c-.565 0-.841-.264-.841-1.066v-2.375h1.45V9.611h-1.45V7.88l-1.207.24v1.491h-.952v1.055h.952v2.58c0 1.412.742 1.905 1.815 1.905zM51.09 13.717l-1.008-.31c-.232.494-.664.769-1.228.769-.841 0-1.417-.62-1.527-1.525H51.3v-.31c-.022-1.87-1.162-2.902-2.59-2.902-1.538 0-2.6 1.25-2.6 2.902 0 1.64 1.117 2.867 2.733 2.867 1.051 0 1.815-.516 2.246-1.49zm-2.358-3.314c.675 0 1.262.435 1.317 1.399h-2.711c.133-.895.63-1.4 1.394-1.4zM52.165 12.33c0 1.708 1.04 2.878 2.446 2.878.697 0 1.394-.298 1.737-.998h.033v.826h1.107V7.008h-1.206v3.303c-.277-.505-.864-.872-1.65-.872-1.405 0-2.467 1.159-2.467 2.89zm1.206 0c0-1.021.564-1.801 1.483-1.801.907 0 1.46.745 1.46 1.8 0 1.044-.553 1.778-1.46 1.778-.896 0-1.483-.757-1.483-1.778z" fill="#F43397" ></path><path d="M18.036 3.783L9.612.07a.813.813 0 00-.659 0L.53 3.783a.915.915 0 00-.53.843v7.43c0 6.214 3.538 8.89 8.958 11.239.208.09.441.09.65 0 5.42-2.35 8.957-5.025 8.957-11.24v-7.43a.915.915 0 00-.53-.842z" fill="#F7A8CA" ></path><path d="M17.188 4.548L9.58 1.194a.735.735 0 00-.595 0L1.377 4.548a.826.826 0 00-.479.761v6.71c0 5.614 3.196 8.03 8.091 10.152a.735.735 0 00.587 0c4.895-2.122 8.09-4.538 8.09-10.152V5.31a.826.826 0 00-.478-.761z" fill="#F43397" ></path><path d="M11.669 7.54c.906.008 1.67.327 2.3.954.636.631.95 1.384.943 2.274l-.026 4.18a.917.917 0 01-.928.9.91.91 0 01-.915-.907l.026-4.18a1.305 1.305 0 00-.413-.994 1.346 1.346 0 00-.998-.409 1.38 1.38 0 00-1.039.434c-.26.266-.387.631-.39 1l-.023 4.12a.926.926 0 01-.94.912.926.926 0 01-.928-.922l.025-4.145a1.409 1.409 0 00-.376-.986 1.388 1.388 0 00-1.035-.441 1.385 1.385 0 00-1.006.398 1.35 1.35 0 00-.416.986l-.026 4.177a.918.918 0 01-.932.904.915.915 0 01-.918-.914l.026-4.164a3.142 3.142 0 01.804-2.1c.676-.74 1.51-1.109 2.479-1.102.925.008 1.715.334 2.347.997.651-.66 1.434-.975 2.359-.972z" fill="#fff" ></path></svg>:""

           }


             </div>
           </div>
        </div>
                </div>
                <div className='second_box'>
                    <p style={{margin:"0px"}}>Select Size</p>
                    <button>Free Size</button>
                </div>
                <div className='third_box'>
                    <p>Product Details</p>
                    <p>Name : brasso printed saree with blouse</p>
                    <p>Saree Fabric : {detail.Fabric}</p>
                    <p>Blouse : Running Blouse</p>
                    <p>Multipack : Single</p>
                    <p>Country of Origin : India</p>
                    <p >More Information</p>
                </div>
                <div className='fourth_box'>
                    <p>Sold By</p>
                    <div className='fourth_mid_box'>
                        <img src='data:image/png;base64,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' alt='logo' />
                        <p>NIBBLE SHOES </p>
                        <button style={{width:"39%"}}>View Shop</button>
                    </div>
                    <div className='rating'>
                        {/* <p style={{paddingTop:'12px'}}>Ratings :</p> */}
                        
                    </div>

                </div>
                
            </div>
        </div>


    </>
  ):(<div >
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
    </div>
  )
}
