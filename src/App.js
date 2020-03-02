import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelSaverNavbar from './components/TravelSaverNavbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tsReducer from './reducers/tsReducer'

export default function App() {

  const store = createStore(tsReducer)

  return (
    <Provider store={store}>
      <div>
        <TravelSaverNavbar/>
      </div>
    </Provider>
  );
}


