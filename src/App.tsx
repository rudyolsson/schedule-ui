import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'App.css';
import history from './history';
import LandingLayout from 'Landing/containers/LandingLayout';

const App: React.FC = () => {
  return (
      <div className="App">
        <Router history={history}>
          <Switch>
             <Route exact path="/" component={LandingLayout}></Route> 
          </Switch>
        </Router>
      </div>
  );
}

export default App;
