import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import Flights from '../pages/Flights';
import Hotels from '../pages/Hotels';
import CarRental from '../pages/CarRental';
import axios from 'axios'
import brand from '../assets/images/TravelSaverBrand5.png'
import { connect } from 'react-redux'

class TravelSaverNavbar extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         isLoggedIn: false,
         user: {}
      }
   } 
      //keep track of logged in status and request this information every time it’s mounted
   componentDidMount() {
      this.loginStatus()
   }

    //taking in login data recieved from server and setting state
   handleLogin = (data) => {
   // debugger
      console.log(data)
      if (data.user) {
         const user = data.user
         this.dataOrigin(user)
      } else if (data.data.user) {
         const user = data.data.user
         this.dataOrigin(user)
      }
      // this.props.dispatch({ type: 'LOGIN_USER', payload: data.user })
      // this.setState({
      //    isLoggedIn: true,
      //    user: this.props.user
      // })
   }

   //helper function to overcome not setting state 2x in same function and to
   //also pass into conditional to check if the origin of the data is from the 
   //server(to check for login from session) or from user input.
   
   dataOrigin = (user) => {
      this.props.dispatch({ type: 'LOGIN_USER', payload: user})
      this.setState({
         isLoggedIn: true,
         user: this.props.user
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
      // This allows our Rails server to set and read the cookie on the front-end’s browser.
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
   
   handleLogoutClick = () => {
      axios.delete('http://localhost:3001/logout', {withCredentials: true})
      .then(response => {
         this.handleLogout()
         this.history.push('/')
      })
      .catch(error => console.log(error))
   }

   render() {
      return (
         <Router>
            <Container className="p-0" fluid={true} >
               <Navbar className="navbar" expand="lg">
                  <Navbar.Brand>
                     <img src={brand} style={{height: "50px", width: "340px"}} alt=""/>
                  </Navbar.Brand>
                     <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                           <Nav className="ml-auto">
                              <NavDropdown className="account" title={
                                 <span className="my-auto" style={{color: "white"}}>Account</span>
                                       } id="basic-dropdown">
                                    { 
                                    this.state.isLoggedIn ? 
                                    <NavDropdown.Item as={Link} to='/' onClick={this.handleLogoutClick}>
                                       Log Out
                                    </NavDropdown.Item> :
                                    <>
                                    <NavDropdown.Item as={Link} to='/login'>
                                       Log In
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/signup'>
                                       Create Account
                                    </NavDropdown.Item>
                                    </>
                                    }
                              </NavDropdown>
                              <Link className="nav-link" style={{color: "white"}} to='/'>Home</Link>

                           </Nav>
                        </Navbar.Collapse>
               </Navbar>

                  <Route path="/" exact component={HomePage} />
                  {/* <Route path="/login" component={Login} /> */}
                  <Route exact path='/login' 
                     render={props => (<Login {...props} 
                     handleLogin={this.handleLogin} 
                     loggedInStatus={this.state.isLoggedIn}/>)}
                  />
                  {/* <Route path="/signup" component={CreateAccount} /> */}
                  <Route 
                     exact path='/signup' 
                     render={props => (
                     <CreateAccount {...props} 
                        handleLogin={this.handleLogin} 
                        loggedInStatus={this.state.isLoggedIn}/>)}
                  />
                  <Route path="/flights" component={Flights} />
                  <Route path="/hotels" component={Hotels}/>
                  <Route path="/carrental" component={CarRental} />

                  <Footer />
            </Container>
         </Router>
      )
   }
}

const mapStateToProps = state => ({
   user: state.user
})

export default connect(mapStateToProps)(TravelSaverNavbar)