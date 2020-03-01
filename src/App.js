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

  componentDidMount() {
    //on page load/refresh will check for session in the backend
    this.loginStatus()
  }

  //taking in login data and setting state
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  //on logout clears user state obj and toggles isLoggedIn obj
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    //ajax call to sessions custom route
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
        {/* passing props to TS navbar */}
        <TravelSaverNavbar handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
      </div>
    );

  }
}

