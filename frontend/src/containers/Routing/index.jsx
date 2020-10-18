import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from 'scenes/Auth/containers/Auth';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/auth/:page' component={Auth} />
    </Switch>
  );
};

export default Routing;
