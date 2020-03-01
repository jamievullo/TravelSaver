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

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render() {
    return (
      <div>
        <TravelSaverNavbar />
      </div>
    );

  }
}

