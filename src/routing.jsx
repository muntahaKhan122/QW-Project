import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import Home from './home';
import Quotes from './quotes';
import Wallpapers from './wallpapers';
import Header from './header';
import QuotesPage from './quotePage';
import WallpaperPage from './wallpaperPage';

function Routing() {
 
  const [searchh,setSearch]=useState("");

  const setSearchData=(val)=>{
    console.log("in route",val)
    setSearch(val);
  }
 
 
  return (
      <Router>

        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/Signup" exact>
            <Signup />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
          <Route path="/Quotes" exact>
            <QuotesPage/>
          </Route>
          <Route path="/Wallpapers" exact>
           <WallpaperPage />
          </Route>
          </Switch>

    </Router>
  );
}

export default Routing;
  