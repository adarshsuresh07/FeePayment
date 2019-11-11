import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogins, isLogina } from '../utils'
import Studenthome from './Studenthome.js'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogins()?
                <Studenthome {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;