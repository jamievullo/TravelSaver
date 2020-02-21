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
import CreateAccount from './pages/CreateAccount'
// import Flights from './pages/Flights';
// import Hotels from './pages/Hotels';

import { NavDropdown } from 'react-bootstrap';
// import Brand from './components/Brand'
require('dotenv').config();


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // title: 'TripSaver',
      // headerLinks: [
      //   { title: 'Home', path: '/' },
      //   { title: 'Flights', path: '/flights' },
      //   { title: 'Hotels', path: '/hotels' },
      //   { title: 'Account', path: '/account'}
      // ],
      // home: {
      //   title: "Save on Flights",
      //   subTitle: "",
      //   text: ""
      // },
      // flights: {
      //   title: "Flights"
      // },
      // hotels: {
      //   title: "Hotels"
      // },
      // account: {
      //   login: "Log in with existing account",
      //   signup: "Create Account"
      // }
  }
}

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} >
          <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
              {/* gotta create logo for brand */}
              {/* <Brand /> */}
            </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                      <NavDropdown className="account" title={
                          <span className="my-auto" style={{color: "white"}}>Account</span>
                            } id="basic-dropdown">
                            <NavDropdown.Item>
                              <Link className="nav-link" style={{color: "#364182"}} to='/login'>
                                Log In
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
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

          <Route path="/" exact render={() => <HomePage />} />
          {/* <Route path="/flights" render={() => <Flights title={this.state.flights.title} />} />
          <Route path="/hotels" render={() => <Hotels title={this.state.hotels.title} />} /> */}
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <CreateAccount />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}
