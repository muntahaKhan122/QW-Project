import React, { Component, useEffect, useRef, useState } from 'react';
import './signup.css';
import Signup from './signup';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Header from './header';
import Quotes from './quotes';
import Wallpapers from './wallpapers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Home = () =>{
 
return(
    <div>
  <Header/>

 </div>
  );

}

export default Home;