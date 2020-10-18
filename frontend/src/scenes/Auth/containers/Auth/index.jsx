import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from 'scenes/Auth/components/SignUp';
import SignIn from 'scenes/Auth/components/SignIn';

const Auth = () => {
  return (
    <Switch>
      <Route exact path='/auth/signin' component={SignIn} />
      <Route exact path='/auth/signup' component={SignUp} />
      <Redirect to='/auth/signin' />
    </Switch>
  );
};

export default Auth;
