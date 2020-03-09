import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelSaverNavbar from './components/TravelSaverNavbar';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import tsReducer from './reducers/tsReducer'

export default function App() {

  const logger = createLogger()

  const store = createStore(tsReducer, applyMiddleware(logger))

  return (
    <Provider store={store}>
      <div>
        <TravelSaverNavbar/>
      </div>
    </Provider>
  );
}


