import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class CarRentalForm extends Component {

    state = {
        pickingUp: '',
        droppingOff: '',
        pickupDate: '',
        dropoffDate: '',
        pickupTime: '',
        dropoffTime: '',
        // disabled: false,
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
                        <Form.Control id="pickup-date" type="text" name="pickupDate" placeholder="Click for calendar" value={this.state.pickupDate} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Col>
                        <Form.Label>Drop-off date</Form.Label>
                        <Form.Control id="dropoff-date" type="text" name="dropoffDate" placeholder="Click for calendar" value={this.state.dropoffDate} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    </Form.Row>
                </Form>            
                <Button className="d-inline-block" variant="primary" style={{backgroundColor: "#364182"}} size="lg" type="submit">
                        Get Deals
                </Button>
                </div>
            </div>
        )
    }
}