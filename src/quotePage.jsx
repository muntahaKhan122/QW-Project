import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import Home from './home';
import Quotes from './quotes';
import Wallpapers from './wallpapers';
import Header from './header';
import QuoteList from './QuoteList';
const QuotesPage=()=> {
 
  const [search,setSearch]=useState("");
  const [allQuotes,setAllQuotes]=useState("");
  const [enter,setEnter]=useState(false);

  const toggleEnter=()=>{
    setEnter(true);
  }

  const setSearchData=(val)=>{
    console.log("in route",val)
    setSearch(val);
    setEnter(true);
  }

  const setQuotes=(val)=>{
   setAllQuotes(val);
  }
 
  return (
      <div>
    <Header setData={setSearchData}/>
    
      {search||enter?
        <QuoteList data={search}  quotes={allQuotes}/>
        :<Quotes setAllQuotes={setQuotes}/>}
        
    
      
        </div>


  );
}

export default QuotesPage;
  