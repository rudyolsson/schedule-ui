import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'App.css';
import history from './history';
import LandingLayout from 'Features/Landing/containers/LandingLayout';
import DashboardLayout from 'Features/DashboardLayout/containers/DashboardLayout';

const App: React.FC = () => {
  return (
      <div className="App">
        <Router history={history}>
          <Switch>
             <Route path="/dashboard" component={DashboardLayout}></Route>
             <Route path="/" component={LandingLayout}></Route> 
          </Switch>
        </Router>
      </div>
  );
}

export default App;
