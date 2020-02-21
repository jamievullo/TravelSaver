import React from 'react'
// import Container from 'react-bootstrap/Container'
// import AutoCompleteSearch from './AutoCompleteSearch'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class HeroFlightForm extends React.Component {

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

    handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(event.target);
            //fetch
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
