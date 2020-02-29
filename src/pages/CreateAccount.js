import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class CreateAccount extends React.Component {

   state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
      console.log(event);

      this.setState({
         redirect: "/"
      })
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
            <Col>
            <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
            <Form.Row>
               <Form.Group>
                  <Col>
                     <Form.Label style={{color: "#364182"}}>Name</Form.Label>
                     <Form.Control id="enter-name" type="text" name="name" placeholder="Enter Username" value={this.state.name} onChange={this.handleChange} />
                  {/* </Col>
               </Form.Group>
               <Form.Group>
                  <Col> */}
                     <Form.Label style={{color: "#364182"}}>Email</Form.Label>
                     <Form.Control id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                  {/* </Col>
               </Form.Group>
               <Form.Group>
                  <Col> */}
                     <Form.Label style={{color: "#364182"}}>Password</Form.Label>
                     <Form.Control id="password" type="password" name="password" placeholder="Password 6-8 digits" value={this.state.password} onChange={this.handleChange} />
                  {/* </Col>
               </Form.Group>
               <Form.Group>
                  <Col> */}
                     <Form.Label style={{color: "#364182"}}>Confirm Password</Form.Label>
                     <Form.Control id="confirm-password" type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} />
                  </Col>
               </Form.Group>
               </Form.Row>
            <Link className="nav-link" 
               to='/'
               exact="true"
               >
               <Button id="cabutton" className="d-inline-block" style={{backgroundColor: "#212747"}}size="lg" type="submit">
                  See The World
               </Button>
            </Link>                  
         </Form>
         </Col>            
         </div>
      )
   }
}


