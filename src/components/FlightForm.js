import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
// import AutoCompleteSearch from './AutoCompleteSearch'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import PaperAirplane from './PaperAirplane';
require('dotenv').config();
// const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

// console.log(api_key)

export default class FlightForm extends React.Component {
   // sets initial state
   state = {
      flyingFrom: '',
      flyingTo: '',
      departing: '',
      returning: '',
      adults: '',
      children: '',
      redirect: null,
      // isLoading: false
   }
   // sets state of all inputted values based on name attribute
   handleChange = (event) => {
      
      this.setState({
         [event.target.name]: event.target.value
      })
      console.log(event.target.value)
      
   }
   //prevents default of submit button and redirects
   handleSubmit = (event) => {
      event.preventDefault();

      // after submit, redirects to flight page
      this.setState({
         redirect: "/flights",
      })  
   }

   render() {
      //if submit button pressed, sets state of redirect and sends props/state to flight page
      if(this.state.redirect) {
         return <Redirect to={{
            pathname: this.state.redirect,
            state: {
               flightInfo: this.state
            }
         }}/>
      }
      return (
         <div>
            <div className='hero-flight-form'>
               <PaperAirplane />
               <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                     <Form.Group>
                           <Col>
                              <Form.Label>Flying From</Form.Label>
                              <Form.Control id="flying-from" type="text" name="flyingFrom" placeholder="Enter airport code" value={this.state.flyingFrom} onChange={this.handleChange}>
                                 {/* <AutoCompleteSearch id="flying-from" type="text" name="flyingFrom" placeholder="Enter airport code" value={this.state.flyingFrom}/> */}
                                 </Form.Control>
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Flying To</Form.Label>
                              <Form.Control id="flying-to" type="text" name="flyingTo" placeholder="Enter airport code" value={this.state.flyingTo} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Departing</Form.Label>
                              <Form.Control id="departing" type="text" name="departing" placeholder="dd/mm/yyyy" value={this.state.departing} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Returning</Form.Label>
                              <Form.Control id="returning" type="text" name="returning" placeholder="dd/mm/yyyy" value={this.state.returning} onChange={this.handleChange} />
                           </Col>
                        </Form.Group>
                        <Form.Group>
                           <Col>
                              <Form.Label>Adults</Form.Label>
                                 <Form.Control as="select" id="adults" name="adults" style={{width: "3.5em"}} value={this.state.adults} onChange={this.handleChange}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                 </Form.Control>
                           </Col>
                        </Form.Group>
                        <Form.Group>                              
                           <Col>
                              <Form.Label>Children</Form.Label>
                                 <Form.Control as="select" id="children" name="children" style={{width: "3.5em"}} value={this.state.children} onChange={this.handleChange}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                 </Form.Control>
                           </Col>
                        </Form.Group>
                  </Form.Row>
                  <Link className="nav-link" 
                     to='/flights'
                     exact="true"
                  >
                     <Button className="d-inline-block" variant="primary" style={{backgroundColor: "#364182"}} size="lg" type="submit">
                           Get Deals        
                     </Button>
                  </Link>                  
               </Form>            
            </div>
         </div>
      )
   }
}
