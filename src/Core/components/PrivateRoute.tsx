import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: any) => (
    <Route {...rest} render={(props: any) => (
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  );
