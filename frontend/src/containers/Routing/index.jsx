import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import Auth from 'scenes/Auth';
import Main from 'scenes/Main';
import PublicRoute from 'containers/PublicRoute';
import PrivateRoute from 'containers/PrivateRoute';
import Header from 'containers/Header';
import ProtectedRoute from 'containers/ProtectedRoute';
import Dashboard from 'scenes/Dashboard';
import { LoaderWrapper } from 'components/LoaderWrapper';

const Routing = ({ isAuthorized, isLoading}) => {
  return (
    <>
      { isAuthorized && <Header /> }
      <LoaderWrapper loading={isLoading}>
        <Switch>
          <PrivateRoute exact path='/' component={Main} />
          <PublicRoute exact path='/auth/:page' component={Auth} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <Redirect to='/' />
        </Switch>
      </LoaderWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthorized: state.user.isAuthorized,
  isLoading: state.user.isLoading
});

export default connect(mapStateToProps)(Routing);
