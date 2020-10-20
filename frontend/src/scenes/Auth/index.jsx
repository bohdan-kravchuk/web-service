import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from 'scenes/Auth/components/SignUp';
import SignIn from 'scenes/Auth/components/SignIn';
import { signUpUserRoutine, signInUserRoutine } from 'scenes/Auth/routines';

const Auth = ({ signInUser, signUpUser }) => {
  return (
    <Switch>
      <Route exact path='/auth/signin' render={props => (<SignIn {...props} signInUser={signInUser} />)} />
      <Route exact path='/auth/signup' render={props => (<SignUp {...props} signUpUser={signUpUser} />)} />
      <Redirect to='/auth/signin' />
    </Switch>
  );
};

const mapDispatchToProps = {
  signInUser: signInUserRoutine,
  signUpUser: signUpUserRoutine
};

export default connect(null, mapDispatchToProps)(Auth);
