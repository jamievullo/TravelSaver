import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelSaverNavbar from './components/TravelSaverNavbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {

  const store = createStore()

  return (
    <Provider store={store}>
      <div>
        <TravelSaverNavbar/>
      </div>
    </Provider>
  );
}


