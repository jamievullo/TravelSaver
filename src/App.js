import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login'
// import Flights from './pages/Flights';
// import Hotels from './pages/Hotels';
// import Account from './pages/Account';

import { NavDropdown } from 'react-bootstrap';
// import Brand from './components/Brand'

require('dotenv').config();

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // title: 'TripSaver',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Flights', path: '/flights' },
        { title: 'Hotels', path: '/hotels' },
        { title: 'Account', path: '/account'}
      ],
      home: {
        title: "Save on Flights",
        subTitle: "",
        text: ""
      },
      flights: {
        title: "Flights"
      },
      hotels: {
        title: "Hotels"
      },
      account: {
        signup: "Sign Up",
        login: "Log in with existing account"
      }
  }
}

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} >
          <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
              {/* <Brand /> */}
            </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                      <NavDropdown className="account" title={
                        <span className="my-auto" style={{color: "white"}}>Account</span>
                      } id="basic-dropdown">
                          <NavDropdown.Item to='/login'>
                            <Link className="nav-link" style={{color: "#364182"}} to='/login'>
                              Log In
                            </Link>
                            </NavDropdown.Item>
                          <NavDropdown.Item to='/signup'>
                            <Link className="nav-link" style={{color: "#364182"}} to='/signup'>
                              Create Account
                            </Link>
                          </NavDropdown.Item>
                      {/* <Link className="nav-link" style={{color: "white"}} to='/account'>Account</Link> */}
                      </NavDropdown>
                      <Link className="nav-link" style={{color: "white"}} to='/'>Home</Link>

                    {/* <Link className="nav-link" style={{color: "white"}} to='/flights'>Flights</Link>
                    <Link className="nav-link" style={{color: "white"}} to='/hotels'>Hotels</Link> */}
                  </Nav>
                </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          {/* <Route path="/flights" render={() => <Flights title={this.state.flights.title} />} />
          <Route path="/hotels" render={() => <Hotels title={this.state.hotels.title} />} /> */}
          <Route path="/login" render={() => <Login title={this.state.account.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
