import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import AirportSelector from './AirportSelector';
// import DatePicker from './DatePicker'


export default class CarRentalForm extends React.Component {

   state = {
      pickingUp: '',
      droppingOff: '',
      pickupDate: '',
      dropoffDate: '',
      pickupTime: '',
      dropoffTime: '',
      redirect: null
   }

   handleChange = (event) => {
      
      this.setState({
         [event.target.name]: event.target.value
      })
      // console.log(event.target.value)
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
      
      this.setState({
         redirect: '/carrental'
      })
      

         //fetch
   }

   render() {
      if(this.state.redirect) {
         return <Redirect to={this.state.redirect}/>
      }
      return (
         <div>
            <div className='car-rental-form'>
               <Form onSubmit={this.handleSubmit}>
                     <Form.Row>
                  <Form.Group>
                     <Col>
                     <Form.Label>Picking up</Form.Label>
                     <Form.Control id="picking-up" type="text" name="pickingUp" placeholder="Try 'Scranton'" value={this.state.pickingUp} onChange={this.handleChange} />
                  </Col>
                  </Form.Group>
                  <Form.Group>
                  <Col>
                     <Form.Label>Dropping off</Form.Label>
                     <Form.Control id="dropping-off" type="text" name="droppingOff" placeholder="Try 'Scranton'" value={this.state.droppingOff} onChange={this.handleChange} />
                  </Col>
                  </Form.Group>
                  <Form.Group>
                     <Col>
                     <Form.Label>Pick-up date</Form.Label>
                     <Form.Control id="pickup-date" type="text" name="pickupDate" placeholder="dd/mm/yyyy" value={this.state.pickupDate} onChange={this.handleChange} />
                     </Col>
                  </Form.Group>
                  <Form.Group>
                           <Col>
                              <Form.Label>Time</Form.Label>
                                 <Form.Control as="select" id="pickup-time" name="pickup-time" style={{width: "6.25em"}} value={this.state.pickupTime} onChange={this.handleChange}>
                                    <option>6:00am</option>
                                    <option>6:30am</option>
                                    <option>7:00am</option>
                                    <option>7:30am</option>
                                    <option>8:00am</option>
                                    <option>8:30am</option>
                                    <option>9:00am</option>
                                    <option>9:30am</option>
                                    <option>10:00am</option>
                                    <option>10:30am</option>
                                    <option>11:00am</option>
                                    <option>11:30am</option>
                                    <option>12:00pm</option>
                                    <option>12:30pm</option>
                                    <option>1:00pm</option>
                                    <option>1:30pm</option>
                                    <option>2:00pm</option>
                                    <option>2:30pm</option>
                                    <option>3:00pm</option>
                                    <option>3:30PM</option>
                                    <option>4:00PM</option>
                                    <option>4:30PM</option>
                                    <option>5:00PM</option>
                                    <option>5:30PM</option>
                                    <option>6:00PM</option>
                                    <option>6:30PM</option>
                                    <option>7:00PM</option>
                                    <option>7:30PM</option>
                                    <option>8:00PM</option>
                                    <option>8:30PM</option>
                                    <option>9:00PM</option>
                                    <option>9:30PM</option>
                                    <option>10:00PM</option>
                                    <option>10:30pm</option>
                                    <option>11:00pm</option>
                                    <option>11:30pm</option>
                                    <option>12:00pm</option>
                                 </Form.Control>
                           </Col>
                        </Form.Group>
                  <Form.Group>
                     <Col>
                     <Form.Label>Drop-off date</Form.Label>
                     <Form.Control id="dropoff-date" type="text" name="dropoffDate" placeholder="dd/mm/yyyy" value={this.state.dropoffDate} onChange={this.handleChange} />
                     </Col>
                  </Form.Group>
                  {/* <Form.Group>
                     <Col>
                        <Form.Label>Calendar</Form.Label>
                           <DatePicker />
                     </Col>
                     </Form.Group> */}
                  <Form.Group>
                           <Col>
                              <Form.Label>Time</Form.Label>
                                 <Form.Control as="select" id="dropoff-time" name="dropoff-time" style={{width: "6.25em"}} value={this.state.dropOff} onChange={this.handleChange}>
                                    <option>6:00am</option>
                                    <option>6:30am</option>
                                    <option>7:00am</option>
                                    <option>7:30am</option>
                                    <option>8:00am</option>
                                    <option>8:30am</option>
                                    <option>9:00am</option>
                                    <option>9:30am</option>
                                    <option>10:00am</option>
                                    <option>10:30am</option>
                                    <option>11:00am</option>
                                    <option>11:30am</option>
                                    <option>12:00pm</option>
                                    <option>12:30pm</option>
                                    <option>1:00pm</option>
                                    <option>1:30pm</option>
                                    <option>2:00pm</option>
                                    <option>2:30pm</option>
                                    <option>3:00pm</option>
                                    <option>3:30PM</option>
                                    <option>4:00PM</option>
                                    <option>4:30PM</option>
                                    <option>5:00PM</option>
                                    <option>5:30PM</option>
                                    <option>6:00PM</option>
                                    <option>6:30PM</option>
                                    <option>7:00PM</option>
                                    <option>7:30PM</option>
                                    <option>8:00PM</option>
                                    <option>8:30PM</option>
                                    <option>9:00PM</option>
                                    <option>9:30PM</option>
                                    <option>10:00PM</option>
                                    <option>10:30pm</option>
                                    <option>11:00pm</option>
                                    <option>11:30pm</option>
                                    <option>12:00pm</option>
                                 </Form.Control>
                           </Col>
                        </Form.Group>
                  </Form.Row>
                  <Link className="nav-link" 
                     to='/carrental'
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