import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import PrivateRoutes from './private';
import Guest from './guest';

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Main from '../Main';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <PrivateRoutes path="/" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;