import React from 'react'
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class HotelForm extends React.Component {

   state = {
      goingTo: '',
      checkIn: '',
      checkOut: '',
      roomsNeeded: '',
      adults: '',
      children: '',
   }

   handleChange = (event) => {
      
      this.setState({
         [event.target.name]: event.target.value
      })
      console.log(event.target.value)
   }

   handleSubmit = (event) => {
      event.preventDefault();
      
      console.log(event.target);

         //fetch
   }

   render() {
      return (
         <div>
               <div className='hotel-form'>
               <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                     <Form.Group>
                           <Col>
                              <Form.Label>Destination</Form.Label>
                              <Form.Control id="going-to" type="text" name="goingTo" placeholder="Try 'Flagstaff'" value={this.state.goingTo} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Checking-in</Form.Label>
                              <Form.Control id="check-in" type="text" name="checkIn" placeholder="mm/dd/yyyy" value={this.state.checkIn} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Checking-out</Form.Label>
                              <Form.Control id="check-out" type="text" name="checkOut" placeholder="mm/dd/yyyy" value={this.state.checkOut} onChange={this.handleChange} />
                           </Col>
                     </Form.Group>
                     <Form.Group>
                           <Col>
                              <Form.Label>Rooms</Form.Label>
                              <Form.Control id="rooms" type="text" name="rooms" placeholder="# of rooms needed" value={this.state.rooms} onChange={this.handleChange} />
                           </Col>
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