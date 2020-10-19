import React from 'react';
import { Switch } from 'react-router-dom';
import Auth from 'scenes/Auth';
import Main from 'scenes/Main';
import PublicRoute from 'containers/PublicRoute';
import PrivateRoute from 'containers/PrivateRoute';

const Routing = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Main} />
      <PublicRoute exact path='/auth/:page' component={Auth} />
    </Switch>
  );
};

export default Routing;
