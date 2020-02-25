import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
// import Container from 'react-bootstrap/Container'
// import AutoCompleteSearch from './AutoCompleteSearch'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
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
   // changes date format to be used in fetch
   // changeDateFormat = (inputtedDate) => {
   //    let date = inputtedDate
   //    let newDate = date.split("/").reverse().join("-");
   //    return newDate
   // }

   // componentDidMount = () => {      

   // }
   
   handleSubmit = (event) => {
      event.preventDefault();
      // const outbound = this.changeDateFormat(this.state.departing)
      // const inbound = this.changeDateFormat(this.state.returning)
      // const origin = this.state.flyingFrom
      // const destination = this.state.flyingTo
      // console.log(outbound, inbound, origin, destination);

      // after submit, redirects to flight page
      this.setState({
         redirect: "/flights",
         // isLoading: true
      })  

      // fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${outbound}?inboundpartialdate=${inbound}`, {
      // // fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/AVP-sky/PHX-sky/2020-04-09?inboundpartialdate=2020-04-14", {
      //    "method": "GET",
      //    "headers": {
      //       "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      //       "x-rapidapi-key": api_key
      //    }
      // })
      // .then(response => response.json())
      // .then(data => {
      //    // data.map()
      //    console.log(data)
      // })
      // .catch(err => {    
      //    console.log(err);
      // });
   }

   render() {
      // const { isLoading } = this.state
      // if (isLoading) {
      //    return <p>Loading ...</p>;
      // }
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
