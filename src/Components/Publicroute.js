import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogins, isLogina } from '../utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      isLogins() && restricted ?
        <Redirect to="/Studenthome" />
        : isLogina() && restricted ? <Redirect to="/Adminhome" /> : <Component {...props} />
    )} />
  );
};

export default PublicRoute;