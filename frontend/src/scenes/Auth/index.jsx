import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from 'scenes/Auth/components/SignUp';
import SignIn from 'scenes/Auth/components/SignIn';
import { connect } from 'react-redux';
import { signUpUserRoutine, signInUserRoutine } from 'scenes/Auth/routines';

const Auth = ({ signInUser, addNewUser }) => {
  return (
    <Switch>
      <Route exact path='/auth/signin' component={SignIn} />
      <Route exact path='/auth/signup' component={SignUp} />
      <Redirect to='/auth/signin' />
    </Switch>
  );
};

const mapDispatchToProps = {
  signInUser: signInUserRoutine,
  signUpUser: signUpUserRoutine
};

export default connect(null, mapDispatchToProps)(Auth);
