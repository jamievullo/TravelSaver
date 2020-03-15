import React from 'react'
import { BrowserRouter as Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

class Login extends React.Component {

   state = {
      email: '',
      password: '',
      errors: '',
      redirect: null
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
      
      axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
      if (response.data.logged_in) {
         this.props.handleLogin(response.data)
         this.props.dispatch({
            type: 'LOGIN_USER',
            payload: response.data.user
            
         })
         //trying to toggle redirect after logging in
         // this.history.push('/')
         // this.setState({
         //    redirect: '/'
         // })
         this.redirect()
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
      }}

   redirect = () => {
      // this.props.history.push('/')
      this.setState({
         redirect: "/"
         })
   }
   
   render() {
      if(this.state.redirect === '/') {
         return (<Redirect to='/' />)
      }
      // } else if(this.props.loggedInStatus === true) {
      //    // return <Redirect to='/' />
      //    return this.redirect()
      // }
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
                           <Form.Control id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                     </Col>
                  </Form.Group>
               </Form.Row>
                  {/* <Link className="nav-link" 
                     to='/'
                     exact="true"
                  > */}
                  <Button className="d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit">
                     True Adventurer
                  </Button>
                  {/* </Link> */}
            </Form>
         </Col> 
         </div>
      )
   }
}

export default connect()(Login)