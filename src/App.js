import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import TravelSaverNavbar from './components/TravelSaverNavbar';
// require('dotenv').config();

export default function App() {

  return (
    <div>
      {/* passing props to TS navbar */}
      <TravelSaverNavbar/>
    </div>
  );
}


