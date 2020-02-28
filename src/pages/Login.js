import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class Login extends React.Component {

   state = {
      name: '',
      email: '',
      password: '',
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
               LoginInfo: this.state
            }
         }}/>
      }
      return (
         <div>
            <Form onSubmit={this.handleSubmit}>
            <Form.Row>
               <Form.Group>
                     <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control id="enter-name" type="text" name="name" placeholder="Enter Username" value={this.state.name} onChange={this.handleChange}>
                           </Form.Control>
                     </Col>
               </Form.Group>
               <Form.Group>
                     <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                     </Col>
               </Form.Group>
               <Form.Group>
                     <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" type="password" name="password" placeholder="Enter a Password 6-8 characters" value={this.state.password} onChange={this.handleChange} />
                     </Col>
               </Form.Group>
            </Form.Row>
            <Link className="nav-link" 
               to='/'
               exact="true"
            >
               <Button className="d-inline-block" variant="primary" style={{backgroundColor: "#364182"}} size="lg" type="submit">
                  Welcome Back
               </Button>
            </Link>                  
         </Form>            
         </div>
      )
   }
}

