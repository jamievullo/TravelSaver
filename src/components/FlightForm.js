import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import AutoCompleteSearch from './AutoCompleteSearch'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import airports from '../data/airports.js'
import validateForm from '../components/Validations'

require('dotenv').config();

export default class FlightForm extends React.Component {
   // sets initial state
   state = {
      flyingFrom: '',
      flyingTo: '',
      departing: '',
      returning: '',
      adults: '1',
      children: '',
      redirect: null,
      errors: [],
      flights: []
   }
   // sets state of all inputted values based on name attribute
   handleChange = (event) => {
      // console.log(event.target)      
      this.setState({
         [event.target.name]: event.target.value
      })
      console.log(event.target.value)      
   }

   handleChangeCity = (value, name) => {
      console.log(value, name)
      this.setState({
         [name]: value[1]
      })
   }
   //prevents default of submit button and redirects to flight page for results display
   handleSubmit = (event) => {
      event.preventDefault();
      const inputs = [this.state.flyingFrom, this.state.flyingTo]
      let validationResults = []
         inputs.map(input => {
         let results =  validateForm(input)
            if (results !== null) {
            return validationResults.push(results)
         } else {
            return null
         }        
      })  
      if (validationResults.length > 0) {
         this.setState({
            errors: validationResults
         })
      } else {
      // after submit, redirects to flight page
         this.setState({
            redirect: "/flights",
         })      
      }
   }

   render() {
      //if submit button pressed, sets state of redirect and sends props/state to flight 
      // page as flightInfo object
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
               <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                     <Form.Group>
                           <Col>
                              <Form.Label>Flying From</Form.Label>
                              {/* <Form.Control id="flying-from" type="text" name="flyingFrom" placeholder="Enter airport code" value={this.state.flyingFrom} onChange={this.handleChange}> */}
                                 <AutoCompleteSearch id="flying-from" type="text" name="flyingFrom" handleChangeCity={this.handleChangeCity} items={airports} value={this.state.flyingFrom} ></AutoCompleteSearch>
                                 {/* </Form.Control> */}
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Flying To</Form.Label>
                                 <AutoCompleteSearch id="flying-to" type="text" name="flyingTo" handleChangeCity={this.handleChangeCity} items={airports} value={this.state.flyingTo} ></AutoCompleteSearch>
                              {/* <Form.Control id="flying-to" type="text" name="flyingTo" value={this.state.flyingTo} onChange={this.handleChange} /> */}
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Departing</Form.Label>
                              <Form.Control id="departing" type="date" name="departing" placeholder="dd/mm/yyyy" value={this.state.departing} onChange={this.handleChange} required />                           
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Returning</Form.Label>
                              <Form.Control id="returning" type="date" name="returning" placeholder='dd/mm/yyyy' value={this.state.returning} onChange={this.handleChange} required />
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
