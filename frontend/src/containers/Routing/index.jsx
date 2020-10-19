import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from 'scenes/Auth';
import Main from 'scenes/Main';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/auth/:page' component={Auth} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Routing;
