import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import Home from './home';
import Quotes from './quotes';
import Wallpapers from './wallpapers';
import Header from './header';
import searchFunc from './search';
import  {background} from './assets/images/qwBackground.jpg';

const QuoteList=(props)=> {
 
  const [quotes,setQuotes]=useState("");
  useEffect(()=>{
    console.log("In quoteList",props.quotes);
     setQuotes(
       searchFunc(props.quotes,props.data)
       )
   
    
},[props.data]);
  
 
  return (
      <div className="container" style={{backgroundColor:"white"}}>
          <div className="row justify-content-center">
          <div className="col">
      
       <h3 className="heading" style={{textAlign:"center"}}>Quotes</h3>
</div>
</div>
       {quotes?
        <>
        {quotes.map((val)=>{
            
          return (
            <div>
          <div className="row justify-content-md-center" style={{marginTop:"10px"}}>
          <div className="col">
            <h5 style={{textAlign:"center"}}>{val.text}</h5>
            
          </div>
          
          </div>
          <div className="row justify-content-center">
          <div className="col-md-9 mx-auto" >
            <h6 style={{textAlign:"center"}}>{val.author?val.author:"Unknown"}</h6>
          </div>
          
          </div>

          </div>
          )
          },
         
         )}
      </>
       :""}
        </div>


  );
}

export default QuoteList;
  