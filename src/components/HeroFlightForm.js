import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

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

    handleChange = (event) => {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;

        this.setState({
            [flyingFrom]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
  
        console.log(event.target);
  
        this.setState({
            disabled: true
        });
            //fetch
    }

    render() {
        return (
            <div>
                 {/* style={{ backgroundColor: "grey", height: "30%", width: "83%"}} */}
                <div className='hero-flight-form'>
                <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                    <Form.Group>
                        <Col>
                        <Form.Label>Flying From</Form.Label>
                        <Form.Control id="flying-from" type="text" placeHolder="city or airport" value={this.state.flyingFrom} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <Form.Group>
                    <Col>
                        <Form.Label>Flying To</Form.Label>
                        <Form.Control id="flyingTo" type="text" placeHolder="city or airport" value={this.state.flyingTo} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <Form.Group>
                        <Col>
                        <Form.Label>Departing</Form.Label>
                        <Form.Control id="departing" type="text" placeHolder="mm/dd/yyy" value={this.state.departing} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Col>
                        <Form.Label>Returning</Form.Label>
                        <Form.Control id="returning" type="text" placeHolder="mm/dd/yyy" value={this.state.returning} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    </Form.Row>
                </Form>            
                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Get Deals
                </Button>
                </div>
            </div>
        )
    }
}
