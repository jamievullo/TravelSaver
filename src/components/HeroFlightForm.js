import React, { Component } from 'react'
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
                <div className='hero-flight-from' >
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="flyingFrom">Flying From</Form.Label>
                    <Form.Control id="flyingFrom" name="flyingFrom" type="text" value={this.state.flyingFrom} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="flyingTo">Flying To</Form.Label>
                    <Form.Control id="flyingTo" name="flyingTo" type="text" value={this.state.flyingTo} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="departing">Departing</Form.Label>
                    <Form.Control id="departing" name="name" type="text" value={this.state.departing} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="returning">Returning</Form.Label>
                    <Form.Control id="returning" name="name" type="text" value={this.state.returning} onChange={this.handleChange} />
                </Form.Group>
                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Get Deals
                </Button>
            </Form>
            </div>
            </div>
        )
    }
}
