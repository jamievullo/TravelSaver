import React from 'react'
// import Container from 'react-bootstrap/Container'
// import AutoCompleteSearch from './AutoCompleteSearch'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
require('dotenv').config();
// const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

// console.log(api_key)

export default class FlightForm extends React.Component {
   
   state = {
      flyingFrom: '',
      flyingTo: '',
      departing: '',
      returning: '',
      adults: '',
      children: ''
   }

   handleChange = (event) => {
      
      this.setState({
         [event.target.name]: event.target.value
      })
      console.log(event.target.value)
   }

   // componentDidMount = () => {
   //    this.handleSubmit()
   // }

   handleSubmit = (event) => {
      event.preventDefault();

      console.log(event);
      
      fetch("https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query=new%20york", {
         "method": "GET",
         "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "9d244aaeabmsh059d5079a8fdd03p1a0572jsn52a9b59c3240"
            }
      })
      .then(response => response.json())
      .then(data => data.map(result => 
         console.log(result.location_id)
      ))
      .catch(err =>console.log(err))     
   }

   render() {
      return (
         <div>
            <div className='hero-flight-form'>
               <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                     <Form.Group>
                           <Col>
                              <Form.Label>Flying From</Form.Label>
                              <Form.Control id="flying-from" type="text" name="flyingFrom" placeholder="Enter city or airport" value={this.state.flyingFrom} onChange={this.handleChange}>
                                 {/* <AutoCompleteSearch id="flying-from" type="text" name="flyingFrom" placeholder="Enter city or airport" value={this.state.flyingFrom}/> */}
                                 </Form.Control>
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Flying To</Form.Label>
                              <Form.Control id="flying-to" type="text" name="flyingTo" placeholder="Enter city or airport" value={this.state.flyingTo} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Departing</Form.Label>
                              <Form.Control id="departing" type="text" name="departing" placeholder="Click for calendar" value={this.state.departing} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Returning</Form.Label>
                              <Form.Control id="returning" type="text" name="returning" placeholder="Click for calendar" value={this.state.returning} onChange={this.handleChange} />
                           </Col>
                        <Form.Group>
                           <Col>
                              <Form.Label>Adults</Form.Label>
                                 <Form.Control as="select" id="adults" style={{width: "3em"}} value={this.state.adults} onChange={this.handleChange} >
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
                                 <Form.Control as="select" id="children" style={{width: "3em"}} value={this.state.children} onChange={this.handleChange} >
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
                     </Form.Group>
                  </Form.Row>
               <Button className="d-inline-block" variant="primary" style={{backgroundColor: "#364182"}} size="lg" type="submit">
                     Get Deals
               </Button>
               </Form>            
            </div>
         </div>
      )
   }
}
