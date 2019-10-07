import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import reducers from 'Core/store';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store: Store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );
