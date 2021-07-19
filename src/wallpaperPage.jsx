import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import Home from './home';
import Quotes from './quotes';
import Wallpapers from './wallpapers';
import Header from './header';
import QuoteList from './QuoteList';
import Wallppr from './wallppr';

const WallpaperPage=({openModal,url})=> {

  return (
      <div>
    <Header/>
    
    <Wallppr />    
    
      
        </div>


  );
}

export default WallpaperPage;
  