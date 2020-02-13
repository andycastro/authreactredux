import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Main from '../Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;