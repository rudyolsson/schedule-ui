import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'App.css';
import history from './history';
import LandingLayout from 'Features/Landing/containers/LandingLayout';
import DashboardLayout from 'Features/DashboardLayout/containers/DashboardLayout';
import { PrivateRoute } from 'Core/components/PrivateRoute';
import { connect } from 'react-redux';
import { AppState } from 'Core/store';
import { checkToken } from 'Core/store/actions/auth.actions';

import { AppProvider, ContextProps } from './context';

export const App: React.FC = (props: any) => {

  const ctx: ContextProps = {
    name: 'Ava',
    cutest: true,
    nickNames: ['bob', 'joe'],
  }

  useEffect(() => {
    // checkLogIn
    props.checkToken();
  })
  return (
    <AppProvider value={ctx}>
      <div className="App" data-testid="app-root">
        <Router history={history}>
          <Switch>
             {/* <PrivateRoute path="/dashboard" component={DashboardLayout} isAuthenticated={props.isAuthenticated}></PrivateRoute> */}
             <Route path="/dashboard" component={DashboardLayout}></Route>
             <Route path="/" component={LandingLayout}></Route> 
          </Switch>
        </Router>
      </div>
      </AppProvider>
  );
}

const mapStateToProps = (state: AppState)  => {
  return {
    isAuthenticated: state.auth.authenticated,
    loading: state.auth.loading,
  }
};

export default connect(mapStateToProps, { checkToken })(App);
