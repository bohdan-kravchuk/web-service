import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAdmin
      ? <Component {...props} />
      : <Redirect to='/' />)}
  />
);

const mapStateToProps = state => ({
  isAdmin: state.user.user.isAdmin
});

export default connect(mapStateToProps)(ProtectedRoute);
