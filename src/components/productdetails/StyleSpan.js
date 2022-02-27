import styled from "styled-components"
export const Span=styled.span`
background:${({rating})=>rating>=3.5?"rgb(35, 187, 117)":"#f4b619"};

display: inline-flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
border-radius: 16px;
padding: 4px 8px;
height: 15px;
margin-top:0px
fill: rgb(255, 255, 255);
color: white;

@media (max-width: 415px){
 
  border-radius: 13px;
  padding: 4px ;
  height: 10px;
  border-radius: 10px;
  -webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
  font-size: 10px;
  text-align:center;
  color: white;
}

}
`