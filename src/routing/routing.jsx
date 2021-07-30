/* eslint-disable require-jsdoc */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import QuotesPage from '../pages/quotePage';
import WallpaperPage from '../pages/wallpaperPage';
import VerifySignup from '../pages/confirmSignup';

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
        <Route path="/VerifyUser" exact>
          <VerifySignup />
        </Route>

      </Switch>

    </Router>
  );
}

export default Routing;

