import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';
// import Brand from './components/Brand'
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'

import Flights from '../pages/Flights';
import Hotels from '../pages/Hotels';
import CarRental from '../pages/CarRental';
import brand from '../assets/images/TravelSaverBrand5.png'

export default function TravelSaverNavbar() {
   
   return (
      <Router>
         <Container className="p-0" fluid={true} >
            <Navbar className="navbar" expand="lg">
               <Navbar.Brand>
                  {/* gotta create logo for brand */}
                  <img src={brand} style={{height: "50px", width: "340px"}} alt=""/>
               </Navbar.Brand>
                  <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                     <Navbar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                           <NavDropdown className="account" title={
                              <span className="my-auto" style={{color: "white"}}>Account</span>
                                    } id="basic-dropdown">
                                 <NavDropdown.Item as={Link} to='/login'>
                                       Log In
                                 </NavDropdown.Item>
                                 <NavDropdown.Item as={Link} to='/signup'>
                                       Create Account
                                 </NavDropdown.Item>
                           </NavDropdown>
                           <Link className="nav-link" style={{color: "white"}} to='/'>Home</Link>

                        </Nav>
                     </Navbar.Collapse>
            </Navbar>

               <Route path="/" exact component={HomePage} />
               <Route path="/login" component={Login} />
               <Route path="/signup" component={CreateAccount} />
               <Route path="/flights" component={Flights} />
               <Route path="/hotels" component={Hotels}/>
               <Route path="/carrental" component={CarRental} />

               <Footer />
         </Container>
      </Router>
   )
}
