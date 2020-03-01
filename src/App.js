import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
// import './App.css';
import TravelSaverNavbar from './components/TravelSaverNavbar';
// require('dotenv').config();

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      user: {}
    }
  } 

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  render() {
    return (
      <div>
        <TravelSaverNavbar />
      </div>
    );

  }
}

