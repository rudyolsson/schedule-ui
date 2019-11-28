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

const App: React.FC = (props: any) => {
  useEffect(() => {
    // checkLogIn
    props.checkToken();
  })
  return (
      <div className="App">
        <Router history={history}>
          <Switch>
             {/* <PrivateRoute path="/dashboard" component={DashboardLayout} isAuthenticated={props.isAuthenticated}></PrivateRoute> */}
             <Route path="/dashboard" component={DashboardLayout}></Route>
             <Route path="/" component={LandingLayout}></Route> 
          </Switch>
        </Router>
      </div>
  );
}

const mapStateToProps = (state: AppState)  => {
  return {
    isAuthenticated: state.auth.authenticated,
    loading: state.auth.loading,
  }
};

export default connect(mapStateToProps, { checkToken })(App);
