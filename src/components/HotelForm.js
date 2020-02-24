import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
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
         redirect: "/hotels"
      })


         //fetch
   }

   render() {
      if(this.state.redirect) {
         return <Redirect to={this.state.redirect}/>
      }
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
                                 <Form.Control as="select" id="rooms" name="rooms" value={this.state.rooms} onChange={this.handleChange}>
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
                              <Form.Label>Adults</Form.Label>
                                 <Form.Control as="select" id="h-adults" name="adults" style={{width: "3.5em"}} value={this.state.adults} onChange={this.handleChange}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                 </Form.Control>
                           </Col>
                        </Form.Group>
                        <Form.Group>
                           <Col>
                              <Form.Label>Children</Form.Label>
                                 <Form.Control as="select" id="h-children" name="children" style={{width: "3.5em"}} value={this.state.children} onChange={this.handleChange}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                 </Form.Control>
                           </Col>
                        </Form.Group>
                  </Form.Row>
                  <Link className="nav-link" 
                     to='/hotels'
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