import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Auth from 'scenes/Auth';
import Main from 'scenes/Main';
import PublicRoute from 'containers/PublicRoute';
import PrivateRoute from 'containers/PrivateRoute';
import Header from 'containers/Header';
import ProtectedRoute from 'containers/ProtectedRoute';
import Dashboard from 'scenes/Dashboard';

const Routing = ({ isAuthorized }) => {
  return (
    <>
      { isAuthorized && <Header /> }
      <Switch>
        <PrivateRoute exact path='/' component={Main} />
        <PublicRoute exact path='/auth/:page' component={Auth} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthorized: state.user.isAuthorized
});

export default connect(mapStateToProps)(Routing);
