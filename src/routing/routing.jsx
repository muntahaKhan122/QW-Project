/* eslint-disable require-jsdoc */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import QuotesPage from '../pages/quotePage';
import WallpaperPage from '../pages/wallpaperPage';

function Routing() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Signup" exact>
          <Signup />
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

