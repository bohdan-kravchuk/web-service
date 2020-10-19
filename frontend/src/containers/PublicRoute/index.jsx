import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthorized
      ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      : <Component {...props} />)}
  />
);

const mapStateToProps = state => ({
  isAuthorized: state.user.isAuthorized
});

export default connect(mapStateToProps)(PublicRoute);
