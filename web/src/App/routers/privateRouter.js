import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/auth';

const PrivateRoute = ({ Component,  exact, path}) => {
  const [jwt]= useAuth();
  
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        jwt ?
          <Component {...props} />
          :
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  );
};

export default PrivateRoute;
