import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import { Redirect } from "react-router-dom";

class Login extends React.Component {

   state = {
      email: '',
      password: '',
      errors: '',
      redirect: false,
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
      const {email, password} = this.state
      let user = {
         email: email,
         password: password
         }
      
      axios.post('https://fierce-meadow-46868.herokuapp.com/login', {user})
      .then(response => {
      if (response.data.logged_in) {
         this.props.handleLogin(response.data)
         this.props.dispatch({
            type: 'LOGIN_USER',
            payload: response.data.user            
         })
         //trying to toggle redirect after logging in and display success messages       
         // this.props.history.push('/')
         this.setState({
            success: true,
            redirect: true
         })
      } else {
         this.setState({
            errors: response.data.errors,
            email: "",
            password: ""
            })
         }
      })
      .catch(error => console.log('api errors:', error))
   };

   //rendering of error messages in response from server controller actions
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
      // checking to see if state is updated and if it is redirecting with state to home to 
      // render success message 
      if(this.state.success === true) {
         return <Redirect to={{
            pathname: '/',
            state: {
               success: true
            }
         }}/>
      }
      return (
         <div>
            {this.errorMessages()}
            <Col>
               <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                  {/* <Form.Row className="justify-content-md-center"> */}
                  <Form.Row>
                     <Form.Group>
                        <Col>
                           <Form.Label style={{color: "#364182"}}>Email</Form.Label>
                              <Form.Control id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                           <Form.Label style={{color: "#364182"}}>Password</Form.Label>
                              <Form.Control id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </Col>
                        <Button className="button d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit">
                           True Adventurer
                        </Button>
                     </Form.Group>
                  </Form.Row>
               </Form>
            </Col> 
         </div>
      )
   }
}

export default connect()(Login)