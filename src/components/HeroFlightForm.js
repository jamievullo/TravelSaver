import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class HeroFlightForm extends Component {

    state = {
        flyingFrom: '',
        flyingTo: '',
        departing: '',
        returned: '',
        adults: '',
        children: '',
        disabled: false,
    }



    render() {
        return (
            <div>
                 {/* style={{ backgroundColor: "grey", height: "30%", width: "83%"}} */}
                <div className='hero-flight-form'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group style={{ float: "left", marginRight: "80px" }}>
                        <Form.Label>Flying From</Form.Label>
                        <Form.Control id="flying-from" type="text" placeHolder="city or airport" value={this.state.flyingFrom} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group style={{ float: "left", marginRight: "80px" }}>
                        <Form.Label>Flying To</Form.Label>
                        <Form.Control id="flyingTo" type="text" placeHolder="city or airport" value={this.state.flyingTo} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group style={{ float: "left", marginRight: "80px" }}>
                        <Form.Label>Departing</Form.Label>
                        <Form.Control id="departing" type="text" placeHolder="mm/dd/yyy" value={this.state.departing} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group style={{ float: "left", marginRight: "80px" }}>
                        <Form.Label>Returning</Form.Label>
                        <Form.Control id="returning" type="text" placeHolder="mm/dd/yyy" value={this.state.returning} onChange={this.handleChange} />
                    </Form.Group>
                </Form>            
                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Get Deals
                </Button>
                </div>
            </div>
        )
    }
}
