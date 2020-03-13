import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ts from '../assets/images/travelsaver2.png'

export default function FlightResultsDisplay(props) {

    return (
        <div>
            <div className="justify-content-center" >
                <Card>
                    <Row className="no-gutters" style={{position: "center", width: "100%", paddingBottom: "1em"}}>
                        <Col className="auto" md={4} style={{paddingRight: "1em"}}>
                            <img src={ts} className="img-fluid" alt=""/>
                        </Col>
                        <Col>                       
                            <Card.Title>
                                {props.flight.flyFrom}-- 
                                {props.flight.cityFrom} ==>
                                {props.flight.flyTo}--  
                                {props.flight.cityTo}                                
                            <Card.Text>Price: ${props.flight.price}</Card.Text>
                            </Card.Title>
                            <Card.Text>Departure: {props.flight.route[0].local_departure}</Card.Text> 
                            <Card.Text>Arrival: {props.flight.route[1].local_arrival}</Card.Text>                                                        
                            <Card.Text as="h6">Click Here to Book Now: <a href={props.flight.deep_link} target="_blank" rel="noopener noreferrer">${props.flight.price}</a></Card.Text>                       
                        </Col>
                    </Row>    
                </Card>
            </div> 
        </div>
    )
}