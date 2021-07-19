import React, { Component, useEffect, useRef, useState } from 'react';
import './signup.css';
import Signup from './signup';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import searchFunc from './search';



const Quotes = (props) =>{

    var dispQuote;
    const [quotes,setQuotes]=useState(null);
   const [quoteOfDay,setQuoteOfDay]=useState(null);
    
    const fetchData=()=>{
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuotes(data);
      props.setAllQuotes(data);
      setQuoteOfDay(data[0]);
      console.log("PROPS",props);      
    });
}

    useEffect(() => {
        fetchData();

   
        console.log(quoteOfDay);
    },[] );

    
    return(
    <div>
         <h3 style={{textAlign:"center"}}>Quote of the day</h3>
   <div className="quote" style={{marginLeft:"150px"}}>

         <h2 style={{marginTop:"200px",color:"black"}}>{quoteOfDay!==null?quoteOfDay.text:""}</h2>
         <h5 style={{marginLeft:"900px"}}>-{quoteOfDay!==null?quoteOfDay.author:""}</h5>    
    </div>
       

    </div>
    );
}

export default Quotes;