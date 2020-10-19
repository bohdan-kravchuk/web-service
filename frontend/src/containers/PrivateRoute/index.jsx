import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthorized
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/auth/signin', state: { from: props.location } }} />)}
  />
);

const mapStateToProps = state => ({
  isAuthorized: state.user.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);
