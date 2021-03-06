import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

class CreateAccount extends React.Component {

   state = {
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
      redirect: null,
      success: false
   }

   handleChange = (event) => {
      
      this.setState({
         [event.target.name]: event.target.value
      })
      console.log(event.target.value)
   }

   handleSubmit = (event) => {
      event.preventDefault();
      // console.log(event);
      const {email, password, password_confirmation} = this.state
      let user = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
      }
      // with credentials allows rails to return back a cookie
   axios.post('https://fierce-meadow-46868.herokuapp.com/users', {user})
      .then(response => {
         if (response.data.status === 'created') {
            // callback passed in thru props logging in user after signup
         this.props.handleLogin(response.data)
         //sets response.data.user to userData variable
         const userData = response.data.user
         //calls dispatch method 'add new user' and passes user data payload
         this.props.dispatch({ type: 'ADD_NEW_USER', payload: userData })
         this.redirect()
         } else {
         this.setState({
            errors: response.data.errors
            })
         }
      })
      .catch(error => console.log('api errors:', error))
   };
   redirect = () => {
      this.props.history.push('/')
   }

   errorMessages = () => {
      if(this.state.errors) {
         return this.state.errors.map((err, index) => (
            <Alert style={{color: 'red'}} key={index}>
               {err}
            </Alert>
            )
         )
      }
   }

   render() {
      if(this.state.redirect) {
         return <Redirect to={{
            pathname: this.state.redirect,
            state: {
               CreateAccountInfo: this.state
            }
         }}/>
      }
      return (
         <div>
            {this.errorMessages()}
            <Col>
               <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                  <Form.Row>
                     <Form.Group>
                        <Col>
                           <Form.Label style={{color: "#364182"}}>Email</Form.Label>
                           <Form.Control id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                           <Form.Label style={{color: "#364182"}}>Password</Form.Label>
                           <Form.Control id="password" type="password" name="password" placeholder="Password 6-8 digits" value={this.state.password} onChange={this.handleChange} />
                           <Form.Label style={{color: "#364182"}}>Confirm Password</Form.Label>
                           <Form.Control id="password_confirmation" type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange} />
                        </Col>
                        <Link className="nav-link" 
                           to='/'
                           exact="true"
                           >
                           <Button id="cabutton" className=" button d-inline-block" style={{backgroundColor: "#212747"}}size="lg" type="submit">
                              See The World
                           </Button>
                        </Link>                  
                     </Form.Group>
                  </Form.Row>
               </Form>
            </Col>            
         </div>
      )
   }
}

export default connect()(CreateAccount)