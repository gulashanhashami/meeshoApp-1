import React from "react";
import {ProductDetail} from "./ProductDetail"
import "./Product.css"
import axios from "axios"
import {useState,useEffect} from "react"
import {Link } from "react-router-dom"
import { LoadingWrapper } from './loading/LoadingWrapper'
import { Dot } from './loading/Dot'
import {Navbar} from '../navbar/Navbar'
export const Product=()=>{
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    axios.get(`https://meesho-clone-123.herokuapp.com/proudcts?page=${page}&size=20`)
.then((data)=>{
  setData(data.data.product)
  setLoading(false)
  })
  },[page])
  return (loading==false)?(
    <div className="productPage">
      <Navbar/>
      <h1 className="productPageHeading">Women Dresses</h1>
      <span className="productSubheading">Showing 1-20 </span>
      <span className="productSubheading2">out of 59964 Products</span>
    
      
    <div className="productAllItem">
      {
        data.map((e)=><Link to={`/product/${e._id}`}><ProductDetail key={e._id} data={e}/></Link>)
       
      }
      
    </div>
    <div className="pagination">
        <div className="paginationButtonPrevious" style={{color:(page==1)?'white':""}} onClick={()=>{
          if(page>1)
          setPage(page-1)
          console.log(page)
        }}>PREVIOUS</div>
        <div className="pageNumber" style={{color:(page==1)?'white':"",backgroundColor:(page==1)?'#f43397':""}} onClick={()=>{
          setPage(1)
          console.log(page)
        }}>1</div>
        <div className="pageNumber" style={{color:(page==2)?'white':"",backgroundColor:(page==2)?'#f43397':""}} onClick={()=>{
          
          setPage(2)
          console.log(page)
        }}>2</div>
        <div className="pageNumber" style={{color:(page==3)?'white':"",backgroundColor:(page==3)?'#f43397':""}} onClick={()=>{
          setPage(3)
          console.log(page)
        }}>3</div>
        <div className="pageNumber" style={{color:(page==4)?'white':"",backgroundColor:(page==4)?'#f43397':""}} onClick={()=>{
          setPage(4)
          console.log(page)
        }}>4</div>
        <div className="pageNumber" style={{color:(page==5)?'white':"",backgroundColor:(page==5)?'#f43397':""}} onClick={()=>{
          setPage(5)
          console.log(page)
        }}>5</div>
        <div className="pageNumber" style={{color:(page==6)?'white':"",backgroundColor:(page==6)?'#f43397':""}} onClick={()=>{
          setPage(6)
          console.log(page)
        }}>6</div>
        <div className="pageNumber" style={{color:(page==7)?'white':"",backgroundColor:(page==7)?'#f43397':""}} onClick={()=>{
          setPage(7)
          console.log(page)
        }}>7</div>
   
        <div className="paginationButtonNext" onClick={()=>{
          
          setPage(page+1)
          console.log(page)
        }}>NEXT</div>
      </div>
    </div>
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